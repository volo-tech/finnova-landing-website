// lib/gtag.js
export const GA_TRACKING_ID = "G-VD1P6C49YH"; // replace with your GA ID

// Track pageviews
export const pageview = (url) => {
  window.gtag("config", GA_TRACKING_ID, {
    page_path: url,
  });
};

// Track custom events (like button clicks)
export const event = ({ action, category, label, value }) => {
  window.gtag("event", action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};
