import React, { useEffect, useState } from "react";
import { MeteorsDemo } from "./components/meteor-card-main";

// Define the Review type based on your JSON data
type Review = {
  review_id: string;
  reviewer_name: string;
  // Add other fields as necessary
};

const ReviewList: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [reviews, setReviews] = useState<Review[]>([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch(
          "https://raw.githubusercontent.com/WebNaresh/sentiment-analysis-assesment/main/src/assets/data.json"
        );
        console.log(`🚀 ~ file: Home.tsx:42 ~ response:`, response);

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const jsonData = await response.json();
        console.log(`🚀 ~ file: Home.tsx:17 ~ jsonData:`, jsonData);
        setReviews(jsonData as Review[]);
      } catch (error: any) {
        setError(error?.message || "An error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="p-4 flex flex-wrap gap-6 justify-around">
      {reviews.map((review) => (
        <MeteorsDemo
          key={review.review_id}
          title={review.reviewer_name}
          review={review}
        />
      ))}
    </div>
  );
};

export default ReviewList;
