import React from 'react';
import { PropertyData, PropertyImage, Host } from '../../types/property';
import { ReviewsList } from '../../types/reviews';

import FlatCardComponent from '../flat-card/flat-card';
import ReviewComponent from '../reviews/review-component';
import ReviewsForm from '../reviews/review-form';

type PropertyProps = {
  propertyDataList: PropertyData[],
  propertyGallery: PropertyImage[],
  propertyHost: Host,
  reviewsProperty: ReviewsList,
};

function PropertyPage({propertyDataList, propertyGallery, propertyHost, reviewsProperty }: PropertyProps): JSX.Element {
  const {classEstate, ratingStarts, rating, cost, period, description, rooms, maxAdults, typeEstate, convenience } = propertyDataList[0];
  const {avatarSrc, avatarAlt, name, status, about} = propertyHost;
  const {reviews} = reviewsProperty;

  const imageList = propertyGallery.map((img) => (
    <div className="property__image-wrapper" key={img.alt}>
      <img className="property__image" src={img.src} alt={img.alt} />
    </div>
  ));

  return (
    <main className="page__main page__main--property">
      <section className="property">
        <div className="property__gallery-container container">
          <div className="property__gallery">
            {imageList}
          </div>
        </div>
        <div className="property__container container">
          <div className="property__wrapper">
            <div className="property__mark">
              <span>{classEstate}</span>
            </div>
            <div className="property__name-wrapper">
              <h1 className="property__name">{description}</h1>
              <button className="property__bookmark-button button" type="button">
                <svg className="property__bookmark-icon" width="31" height="33">
                  <use xlinkHref="#icon-bookmark" />
                </svg>
                <span className="visually-hidden">To bookmarks</span>
              </button>
            </div>
            <div className="property__rating rating">
              <div className="property__stars rating__stars">
                <span style={{width: `${ratingStarts}%`}} />
                <span className="visually-hidden">Rating</span>
              </div>
              <span className="property__rating-value rating__value">{rating}</span>
            </div>
            <ul className="property__features">
              <li className="property__feature property__feature--entire">
                {typeEstate}
              </li>
              <li className="property__feature property__feature--bedrooms">
                {rooms} Bedrooms
              </li>
              <li className="property__feature property__feature--adults">
                Max {maxAdults} adults
              </li>
            </ul>
            <div className="property__price">
              <b className="property__price-value">&euro;{cost}</b>
              <span className="property__price-text">&nbsp;{period}</span>
            </div>
            <div className="property__inside">
              <h2 className="property__inside-title">What&apos;s inside</h2>
              <ul className="property__inside-list">
                {
                  (convenience as string[]).map((item) => (
                    <li className="property__inside-item" key={item}>
                      {item}
                    </li>
                  ))
                }
              </ul>
            </div>
            <div className="property__host">
              <h2 className="property__host-title">Meet the host</h2>
              <div className="property__host-user user">
                <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                  <img className="property__avatar user__avatar" src={avatarSrc} width="74" height="74" alt={avatarAlt} />
                </div>
                <span className="property__user-name">{name}</span>
                <span className="property__user-status">{status}</span>
              </div>
              <div className="property__description">
                {
                  about.map((paragraph) => (
                    <p className="property__text" key={paragraph}>
                      {paragraph}
                    </p>
                  ))
                }
              </div>
            </div>
            <section className="property__reviews reviews">
              <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
              <ul className="reviews__list">
                {
                  reviews.map((review) => <ReviewComponent key={review.reviewId} reviewsProperty={review} />)
                }
              </ul>

              <ReviewsForm />
            </section>
          </div>
        </div>
        <section className="property__map map" />
      </section>
      <div className="container">
        <section className="near-places places">
          <h2 className="near-places__title">Other places in the neighbourhood</h2>
          <div className="near-places__list places__list">
            {
              propertyDataList.map((card) => <FlatCardComponent key={card.id} flatCard={card} />)
            }
          </div>
        </section>
      </div>
    </main>
  );
}

export default PropertyPage;
