import { useCallback } from "react";

export default function useAnalytics() {
  const trackEvent = useCallback((action, { category, label, value } = {}) => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", action, {
        event_category: category,
        event_label: label,
        value: value,
      });
    } else {
      console.warn("gtag not loaded yet");
    }
  }, []);

  return { trackEvent };
}
