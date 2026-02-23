"use client";

import { useEffect, useRef, useCallback } from "react";
import { usePathname } from "next/navigation";
import { trackEvent } from "@/lib/analytics";

const getElementDescriptor = (el: HTMLElement): Record<string, string> => {
  const tag = el.tagName.toLowerCase();
  const text = (el.textContent || "").trim().slice(0, 100);
  const id = el.id || undefined;
  const className =
    typeof el.className === "string"
      ? el.className.split(" ").slice(0, 3).join(" ")
      : undefined;
  const href = (el as HTMLAnchorElement).href || undefined;
  const name = el.getAttribute("name") || undefined;
  const ariaLabel = el.getAttribute("aria-label") || undefined;

  const descriptor: Record<string, string> = { tag };
  if (id) descriptor.element_id = id;
  if (className) descriptor.element_class = className;
  if (text) descriptor.element_text = text;
  if (href) descriptor.link_url = href;
  if (name) descriptor.element_name = name;
  if (ariaLabel) descriptor.aria_label = ariaLabel;

  return descriptor;
};

const findMeaningfulTarget = (el: HTMLElement): HTMLElement => {
  let current: HTMLElement | null = el;
  const interactiveTags = ["A", "BUTTON", "INPUT", "SELECT", "TEXTAREA"];
  const interactiveRoles = ["button", "link", "tab", "menuitem", "checkbox", "radio"];

  while (current && current !== document.body) {
    if (
      interactiveTags.includes(current.tagName) ||
      interactiveRoles.includes(current.getAttribute("role") || "") ||
      current.hasAttribute("data-track")
    ) {
      return current;
    }
    current = current.parentElement;
  }
  return el;
};

export const useGlobalActivityTracker = () => {
  const pathname = usePathname();
  const scrollMilestones = useRef(new Set<number>());
  const page = pathname ?? "/";

  useEffect(() => {
    scrollMilestones.current.clear();
  }, [page]);

  const handleClick = useCallback(
    (e: MouseEvent) => {
      const raw = e.target as HTMLElement;
      if (!raw) return;

      const el = findMeaningfulTarget(raw);
      const desc = getElementDescriptor(el);

      const isExternal =
        el.tagName === "A" &&
        (el as HTMLAnchorElement).hostname !== window.location.hostname;

      trackEvent(isExternal ? "outbound_click" : "click", {
        ...desc,
        page,
        x: e.clientX,
        y: e.clientY,
      });
    },
    [page]
  );

  const handleContextMenu = useCallback(
    (e: MouseEvent) => {
      const el = e.target as HTMLElement;
      if (!el) return;

      trackEvent("right_click", {
        ...getElementDescriptor(el),
        page,
      });
    },
    [page]
  );

  const handleSubmit = useCallback(
    (e: Event) => {
      const form = e.target as HTMLFormElement;
      if (!form || form.tagName !== "FORM") return;

      trackEvent("form_submit", {
        form_id: form.id || undefined,
        form_name: form.getAttribute("name") || undefined,
        form_action: form.action || undefined,
        page,
      });
    },
    [page]
  );

  const handleFocus = useCallback(
    (e: FocusEvent) => {
      const el = e.target as HTMLElement;
      if (!el) return;
      const tag = el.tagName;
      if (tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT") {
        trackEvent("field_focus", {
          ...getElementDescriptor(el),
          field_type: (el as HTMLInputElement).type || tag.toLowerCase(),
          page,
        });
      }
    },
    [page]
  );

  const handleBlur = useCallback(
    (e: FocusEvent) => {
      const el = e.target as HTMLElement;
      if (!el) return;
      const tag = el.tagName;
      if (tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT") {
        const value = (el as HTMLInputElement).value;
        trackEvent("field_blur", {
          ...getElementDescriptor(el),
          field_type: (el as HTMLInputElement).type || tag.toLowerCase(),
          has_value: value ? "yes" : "no",
          page,
        });
      }
    },
    [page]
  );

  const handleCopy = useCallback(() => {
    const selectedText = window.getSelection()?.toString().trim();
    if (!selectedText) return;

    trackEvent("text_copy", {
      copied_text: selectedText.slice(0, 200),
      page,
    });
  }, [page]);

  const handleScroll = useCallback(() => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    if (docHeight <= 0) return;

    const percent = Math.round((scrollTop / docHeight) * 100);
    const milestones = [25, 50, 75, 100];

    for (const milestone of milestones) {
      if (percent >= milestone && !scrollMilestones.current.has(milestone)) {
        scrollMilestones.current.add(milestone);
        trackEvent("scroll_depth", {
          depth: `${milestone}%`,
          page,
        });
      }
    }
  }, [page]);

  const handleVisibilityChange = useCallback(() => {
    trackEvent("visibility_change", {
      state: document.visibilityState,
      page,
    });
  }, [page]);

  const handleKeydown = useCallback(
    (e: KeyboardEvent) => {
      if (!e.ctrlKey && !e.metaKey) return;

      const keyMap: Record<string, string> = {
        c: "copy",
        v: "paste",
        a: "select_all",
        p: "print",
        s: "save",
        f: "find",
      };

      const action = keyMap[e.key.toLowerCase()];
      if (action) {
        trackEvent("keyboard_shortcut", {
          shortcut: `Ctrl+${e.key.toUpperCase()}`,
          action,
          page,
        });
      }
    },
    [page]
  );

  useEffect(() => {
    document.addEventListener("click", handleClick, { capture: true });
    document.addEventListener("contextmenu", handleContextMenu, { capture: true });
    document.addEventListener("submit", handleSubmit, { capture: true });
    document.addEventListener("focusin", handleFocus, { capture: true });
    document.addEventListener("focusout", handleBlur, { capture: true });
    document.addEventListener("copy", handleCopy);
    document.addEventListener("keydown", handleKeydown, { capture: true });
    document.addEventListener("visibilitychange", handleVisibilityChange);

    let scrollTimeout: ReturnType<typeof setTimeout> | null = null;
    const throttledScroll = () => {
      if (scrollTimeout) return;
      scrollTimeout = setTimeout(() => {
        handleScroll();
        scrollTimeout = null;
      }, 500);
    };
    window.addEventListener("scroll", throttledScroll, { passive: true });

    return () => {
      document.removeEventListener("click", handleClick, { capture: true });
      document.removeEventListener("contextmenu", handleContextMenu, { capture: true });
      document.removeEventListener("submit", handleSubmit, { capture: true });
      document.removeEventListener("focusin", handleFocus, { capture: true });
      document.removeEventListener("focusout", handleBlur, { capture: true });
      document.removeEventListener("copy", handleCopy);
      document.removeEventListener("keydown", handleKeydown, { capture: true });
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      window.removeEventListener("scroll", throttledScroll);
      if (scrollTimeout) clearTimeout(scrollTimeout);
    };
  }, [
    handleClick,
    handleContextMenu,
    handleSubmit,
    handleFocus,
    handleBlur,
    handleCopy,
    handleScroll,
    handleVisibilityChange,
    handleKeydown,
  ]);
};
