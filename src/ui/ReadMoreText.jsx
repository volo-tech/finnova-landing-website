"use client";

import { useState } from "react";

export function ReadMoreText({ text, maxLength = 250 }) {
  const [isExpanded, setIsExpanded] = useState(false);

  if (text.length <= maxLength)
    return <p className="text-darkGray mb-4 text-sm">{text}</p>;

  return (
    <p className="text-darkGray mb-4 text-sm">
      {isExpanded ? text : text.slice(0, maxLength) + "... "}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="text-purpleSecondary font-semibold ml-1 hover:underline"
      >
        {isExpanded ? "Read less" : "Read more"}
      </button>
    </p>
  );
}
export default ReadMoreText;