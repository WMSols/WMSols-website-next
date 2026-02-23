"use client";

import { usePageTracking } from "@/hooks/usePageTracking";
import { useGlobalActivityTracker } from "@/hooks/useGlobalActivityTracker";

export function Providers({ children }: { children: React.ReactNode }) {
  usePageTracking();
  useGlobalActivityTracker();
  return <>{children}</>;
}
