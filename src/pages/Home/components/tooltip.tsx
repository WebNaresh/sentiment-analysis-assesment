import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import React from "react";
import { sentimentColors } from "./review-highlighter";

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
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger className=" cursor-pointer">
            hello
            {sentence}
          </TooltipTrigger>
          <TooltipContent>
            <p>{topic}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </mark>
  );
};
