// Google Analytics 4 - Tracking Utilities
// Measurement ID: G-RL23CCQGEE

export const GA_MEASUREMENT_ID = "G-RL23CCQGEE";

// Extend window with gtag
declare global {
  interface Window {
    gtag: (
      command: string,
      targetOrAction: string,
      params?: Record<string, unknown>
    ) => void;
    dataLayer: unknown[];
  }
}

/**
 * Send a page view event to GA4.
 * Call this on every route change in a SPA.
 */
export const trackPageView = (url: string, title?: string) => {
  if (typeof window === "undefined" || typeof window.gtag === "undefined") return;

  window.gtag("config", GA_MEASUREMENT_ID, {
    page_path: url,
    page_title: title || document.title,
  });
};

/**
 * Send a custom event to GA4.
 */
export const trackEvent = (
  action: string,
  params?: Record<string, unknown>
) => {
  if (typeof window === "undefined" || typeof window.gtag === "undefined") return;

  window.gtag("event", action, params);
};

export const trackCTAClick = (ctaText: string, location: string) => {
  trackEvent("cta_click", { cta_text: ctaText, location });
};

export const trackOutboundLink = (url: string) => {
  trackEvent("click", {
    event_category: "outbound",
    event_label: url,
    transport_type: "beacon",
  });
};

export const trackFormSubmission = (
  formName: string,
  success: boolean,
  extraParams?: Record<string, unknown>
) => {
  trackEvent("form_submit", { form_name: formName, success, ...extraParams });
};

export const trackSectionView = (sectionName: string, page: string) => {
  trackEvent("section_view", { section_name: sectionName, page });
};

export const trackScrollDepth = (depth: string, page: string) => {
  trackEvent("scroll_depth", { depth, page });
};

export const trackDownload = (fileName: string, fileType: string) => {
  trackEvent("file_download", { file_name: fileName, file_type: fileType });
};

export const trackCaseStudyView = (slug: string, title: string) => {
  trackEvent("case_study_view", { case_study_slug: slug, case_study_title: title });
};

export const trackPortfolioItemClick = (
  projectName: string,
  category?: string
) => {
  trackEvent("portfolio_item_click", { project_name: projectName, category });
};

export const trackNavClick = (linkText: string, destination: string) => {
  trackEvent("nav_click", { link_text: linkText, destination });
}
