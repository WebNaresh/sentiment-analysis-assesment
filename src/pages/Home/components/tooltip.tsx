import React from "react";
import { sentimentColors } from "./review-highlighter";

interface TooltipProps {
  topic: string;
}

const Tooltip: React.FC<TooltipProps> = ({ topic }) => {
  return <p className="tooltip">{}</p>;
};

interface HighlightedSentenceProps {
  sentence: string;
  sentiment: string;
  topic: string;
}

export const HighlightedSentence: React.FC<HighlightedSentenceProps> = ({
  sentence,
  sentiment,
  topic,
}) => {
  return (
    <mark
      style={{ backgroundColor: sentimentColors[sentiment], color: "white" }}
    >
      {sentence}
      <Tooltip topic={topic} />
    </mark>
  );
};
