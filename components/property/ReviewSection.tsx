import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

interface Review {
  id: string;
  userId: string;
  userName: string;
  rating: number;
  comment: string;
  date: string;
  userAvatar?: string;
}

interface ReviewSectionProps {
  propertyId: string;
}

const ReviewSection: React.FC<ReviewSectionProps> = ({ propertyId }) => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get<Review[]>(`/api/properties/${propertyId}/reviews`);
        setReviews(response.data);
        setError(null);
      } catch (error) {
        console.error("Error fetching reviews:", error);
        setError("Failed to load reviews. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, [propertyId]);

  const renderStars = (rating: number) => {
    return (
      <div className="flex items-center">
        {[...Array(5)].map((_, index) => (
          <svg
            key={index}
            className={`w-4 h-4 ${
              index < rating ? "text-yellow-400" : "text-gray-300"
            }`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
        <span className="ml-2 text-gray-600">{rating.toFixed(1)}</span>
      </div>
    );
  };

  if (loading) {
    return (
      <div className="animate-pulse">
        <div className="h-4 bg-gray-200 rounded w-1/4 mb-4"></div>
        <div className="space-y-3">
          {[1, 2, 3].map((n) => (
            <div key={n} className="h-24 bg-gray-200 rounded"></div>
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-red-500 bg-red-50 p-4 rounded-lg">
        <p>{error}</p>
        <button
          onClick={() => window.location.reload()}
          className="mt-2 text-sm text-red-600 hover:text-red-800"
        >
          Try again
        </button>
      </div>
    );
  }

  if (reviews.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-500">No reviews yet. Be the first to review!</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">
          Reviews ({reviews.length})
        </h2>
        <div className="flex items-center">
          <span className="text-xl font-semibold mr-2">
            {(reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length).toFixed(1)}
          </span>
          {renderStars(reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length)}
        </div>
      </div>

      <div className="grid gap-6">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="bg-white rounded-lg shadow-sm p-6 border border-gray-100"
          >
            <div className="flex items-start">
              <div className="flex-shrink-0">
                {review.userAvatar ? (
                  <img
                    src={review.userAvatar}
                    alt={review.userName}
                    className="h-10 w-10 rounded-full"
                  />
                ) : (
                  <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center">
                    <span className="text-gray-500 text-lg">
                      {review.userName.charAt(0)}
                    </span>
                  </div>
                )}
              </div>
              <div className="ml-4 flex-1">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-medium">{review.userName}</h3>
                  <time className="text-sm text-gray-500">
                    {new Date(review.date).toLocaleDateString('en-US', {
                      month: 'long',
                      year: 'numeric'
                    })}
                  </time>
                </div>
                {renderStars(review.rating)}
                <p className="mt-2 text-gray-600 whitespace-pre-line">
                  {review.comment}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewSection;