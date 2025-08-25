"use client";
import useAnalytics from "@/hooks/useAnalytics";
import { useState } from "react";

export function ReadMoreText({ text, maxLength = 250 }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const { trackEvent } = useAnalytics();

  if (text.length <= maxLength)
    return <p className="text-darkGray mb-4 text-sm">{text}</p>;

  return (
    <p className="text-darkGray mb-4 text-sm">
      {isExpanded ? text : text.slice(0, maxLength) + "... "}
      <button
        onClick={() => {
          setIsExpanded(!isExpanded); // ✅ toggle expand
          trackEvent("Testimonial text Expand Button"); // ✅ log analytics
        }}
        className="text-purpleSecondary font-semibold ml-1 hover:underline"
      >
        {isExpanded ? "Read less" : "Read more"}
      </button>
    </p>
  );
}
export default ReadMoreText;
