import { Review } from "@/lib/default";
import React, { useEffect, useState } from "react";
import reviewsData from "./../../assets/reviews_data.json"; // Adjust path if necessary
import { MeteorsDemo } from "./components/meteor-card-main";

const ReviewList: React.FC = () => {
  const [reviews, setReviews] = useState<Review[]>([]);

  useEffect(() => {
    setReviews(reviewsData as Review[]);
  }, []);

  return (
    <div className="p-4 flex flex-wrap gap-6 justify-around">
      {reviews.map((review, _index) => (
        <MeteorsDemo title={review.reviewer_name} review={review} />
      ))}
    </div>
  );
};

export default ReviewList;
