type Sentiment = "Positive" | "Negative" | "Mixed" | "Neutral" | null;
interface Source {
  code: string;
  name: string;
  icon: string;
  image: string;
}

interface Analytics {
  category: string;
  topic: string;
  phrases: string[];
  sentences: string[];
  sentiment: "Positive" | "Negative" | "Mixed" | "Neutral";
  highlight_indices: [number, number, string][]; // Ensure this matches the expected type
}
type HighlightIndex = [number, number, string];

interface Review {
  review_id: string;
  reviewer_name: string;
  content: string;
  raw_content: string;
  date: string;
  rating_review_score: number;
  hotel_code: string;
  hotel_reply: string;
  source_language: string;
  source_hotel_code_: string;
  source_review_id: string;
  category: string | null;
  phrases: string | null;
  sentences: string | null;
  topic: string | null;
  sentiment: string | null;
  out_of: number;
  review_url: string;
  source: {
    code: string;
    name: string;
    icon: string;
    image: string;
  };
  bookmarked: boolean;
  bookmark_pk: number;
  analytics: {
    category: string;
    topic: string;
    phrases: string[];
    sentences: string[];
    sentiment: string;
    highlight_indices: HighlightIndex[];
  }[];
  highlight_indices: HighlightIndex[];
}

export type { Analytics, Review, Sentiment, Source };
