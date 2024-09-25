'use client';

import React, { useState, useEffect } from 'react';

import { reviewsData } from '@/data/reviewsData';
import { calculateColumns, splitArrayEvenly } from './ReviewsFunc';
import renderReviewItem from './RenderReview';

import '@/public/styles/reviews.css';

type ReviewItem = {
  id: string;
  title: string;
  review_text: string;
  review_time: number;
  response_time: number;
  response_text: string;
  user: {
    name: string;
    id: string;
  };
};

const Reviews: React.FC = () => {
  const [reviews, setReviews] = useState<ReviewItem[][]>([]);
  useEffect(() => {
    const columns = calculateColumns(window.innerWidth);
    const reviews = splitArrayEvenly(columns, reviewsData);
    setReviews(reviews);
  }, []);

  const renderReviews = () => {
    return reviews.map((items: ReviewItem[], index) => (
      <div key={index} className="flex flex-col gap-6 flex-1 justify-start">
        {items.map((item: ReviewItem) => renderReviewItem(item))}
      </div>
    ));
  };

  return (
    <section className="review py-1">
      <div className="review-wrapper max-w-7xl mx-auto sm:my-20">
        <div className="review-top">Hear from our delighted users.</div>

        <h2 className="mx-auto section__title min-h-16 pt-1">
          Ratings and Reviews
        </h2>

        <div className="review__list mt-8 sm:mt-16">{renderReviews()}</div>
      </div>
    </section>
  );
};

export default Reviews;
