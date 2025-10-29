import { useEffect } from "react";

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}

export default function GoogleAnalytics({
  measurementId,
}: {
  measurementId: string;
}) {
  useEffect(() => {
    if (
      !measurementId ||
      measurementId === "YOUR_GA_MEASUREMENT_ID"
    ) {
      console.log(
        "Google Analytics: No valid measurement ID provided",
      );
      return;
    }

    // Check if already loaded
    if (window.dataLayer && window.gtag) {
      console.log(
        "Google Analytics: Already loaded",
        measurementId,
      );
      // Even if already loaded, ensure page view is tracked
      window.gtag("event", "page_view", {
        page_path: window.location.pathname,
        page_title: document.title,
        page_location: window.location.href,
      });
      console.log(
        "Google Analytics: Page view event sent (re-init)",
      );
      return;
    }

    console.log(
      "Google Analytics: Starting initialization with ID:",
      measurementId,
    );

    // Initialize dataLayer and gtag function first
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () {
      window.dataLayer!.push(arguments);
    };
    window.gtag("js", new Date());
    window.gtag("config", measurementId, {
      page_path: window.location.pathname,
      send_page_view: true,
      debug_mode: true, // Enable debug mode
    });

    console.log("Google Analytics: gtag configured");

    // Load Google Analytics script
    const script = document.createElement("script");
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;

    script.onload = () => {
      console.log(
        "Google Analytics: External script loaded successfully",
      );
      // Send initial page view
      if (window.gtag) {
        window.gtag("event", "page_view", {
          page_path: window.location.pathname,
          page_title: document.title,
          page_location: window.location.href,
        });
        console.log(
          "Google Analytics: Initial page view event sent",
        );
      }
    };

    script.onerror = (error) => {
      // Silently handle the error - this is expected when ad blockers are active
      console.log(
        "Google Analytics: Script loading blocked (ad blocker or CSP restriction)",
      );
    };

    document.head.appendChild(script);

    // Don't cleanup - let GA persist
  }, [measurementId]);

  return null;
}

// Helper function to track page views
export function trackPageView(url: string, title?: string) {
  if (window.gtag) {
    window.gtag("event", "page_view", {
      page_path: url,
      page_title: title || document.title,
      page_location: window.location.origin + url,
    });
    console.log("Google Analytics: Page view tracked -", url);
  }
}

// Helper function to track custom events
export function trackEvent(
  eventName: string,
  eventParams?: Record<string, any>,
) {
  if (window.gtag) {
    window.gtag("event", eventName, eventParams);
    console.log(
      "Google Analytics: Event tracked -",
      eventName,
      eventParams,
    );
  }
}