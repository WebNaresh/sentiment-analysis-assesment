import { Review } from "@/lib/default";
import React from "react";

export const sentimentColors: Record<Exclude<string, null>, string> = {
  Positive: "#00ff2982",
  Negative: "#ebbab585",
  Mixed: "#e8bd6d3d",
  Neutral: "#eaf09b6b",
};

interface ReviewHighlighterProps {
  review: Review;
  className?: string;
}

export const ReviewHighlighter: React.FC<ReviewHighlighterProps> = ({
  review,
  className = "",
}) => {
  const getHighlightedContent = () => {
    let content = review.content;
    const parts: string[] = [];
    let lastIndex = 0;

    review.analytics.forEach(({ highlight_indices }) => {
      highlight_indices.forEach(([start, end, sentiment]) => {
        parts.push(content.slice(lastIndex, start));
        parts.push(
          `<mark class="hover:underline rounded-md px-2" style="background-color: ${
            sentimentColors[sentiment]
          }" title="${sentiment}">${content.slice(start, end)}</mark>`
        );
        lastIndex = end;
      });
    });

    parts.push(content.slice(lastIndex));
    return parts.join("");
  };

  return (
    <div
      className={`truncate whitespace-pre-wrap w-full max-h-[300px] ${className}`}
      dangerouslySetInnerHTML={{ __html: getHighlightedContent() }}
    />
  );
};
