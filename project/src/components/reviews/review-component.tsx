import React from 'react';
import {Review} from '../../types/reviews';

type ReviewsProps = {
  reviewsProperty: Review,
};

function ReviewComponent({reviewsProperty}: ReviewsProps): JSX.Element {
  const {reviewerAvatar, reviewerAltImg, reviewerName, reviewText, reviewDate, rating} = reviewsProperty;

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={reviewerAvatar} width="54" height="54" alt={reviewerAltImg} />
        </div>

        <span className="reviews__user-name">
          {reviewerName}
        </span>
      </div>

      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: `${rating}%`}} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {reviewText}
        </p>
        <time className="reviews__time" dateTime="2019-04-24">{reviewDate}</time>
      </div>
    </li>
  );
}

export default ReviewComponent;
