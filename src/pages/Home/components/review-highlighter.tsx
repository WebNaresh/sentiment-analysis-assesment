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

    review.analytics.forEach(({ sentences, sentiment }) => {
      sentences.forEach((sentence) => {
        const index = content.indexOf(sentence);
        if (index >= 0) {
          const before = content.slice(0, index);
          const after = content.slice(index + sentence.length);
          const highlightedSentence = `<mark style="background-color: ${sentimentColors[sentiment]}">${sentence}</mark>`;
          content = before + highlightedSentence + after;
        }
      });
    });

    return content;
  };

  return (
    <div
      className={`truncate whitespace-pre-wrap w-full max-h-[300px] ${className}`}
      dangerouslySetInnerHTML={{ __html: getHighlightedContent() }}
    />
  );
};
