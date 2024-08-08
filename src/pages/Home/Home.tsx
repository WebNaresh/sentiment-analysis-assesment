import { Review } from "@/lib/default";
import React, { useEffect, useState } from "react";
import { MeteorsDemo } from "./components/meteor-card-main";

// Define the Review type based on your JSON data

const ReviewList: React.FC = () => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const jsonDataElement: any = document.getElementById("reviewsData");
        const jsonData = JSON.parse(jsonDataElement.textContent || "[]");
        console.log(`🚀 ~ file: Home.tsx:17 ~ jsonData:`, jsonData);
        setReviews(jsonData);

        // Use the JSON data in your application
      } catch (error: any) {
        setError(error?.message || "An error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, []);
  const jsonDataElement: any = document.getElementById("reviewsData");
  console.log(`🚀 ~ file: Home.tsx:30 ~ jsonDataElement:`, jsonDataElement);
  // const jsonData = JSON.parse(jsonDataElement.textContent || "[]");
  // console.log(`🚀 ~ file: Home.tsx:17 ~ jsonData:`, jsonData);

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
