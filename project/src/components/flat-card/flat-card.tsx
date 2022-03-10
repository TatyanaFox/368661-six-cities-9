import React from 'react';
import { Link } from 'react-router-dom';
import { PropertyData } from '../../types/property';

type FlatCardProps = {
  flatCard: PropertyData,
}

function FlatCardComponent({flatCard}: FlatCardProps): JSX.Element {
  const {classEstate, srcImg, altImg, cost, period, description, typeEstate, isFavorites, ratingStarts, id} = flatCard;
  const path = `/room/${id}`;

  if (isFavorites) {
    return (
      <article className="favorites__card place-card">
        <div className="place-card__mark">
          <span>{classEstate}</span>
        </div>
        <div className="favorites__image-wrapper place-card__image-wrapper">
          <Link to='/room'>
            <img className="place-card__image" src={srcImg} width="150" height="110" alt={altImg} />
          </Link>
        </div>
        <div className="favorites__card-info place-card__info">
          <div className="place-card__price-wrapper">
            <div className="place-card__price">
              <b className="place-card__price-value">&euro;{cost}</b>
              <span className="place-card__price-text">&#47;&nbsp;{period}</span>
            </div>
            <button className="place-card__bookmark-button place-card__bookmark-button--active button" type="button">
              <svg className="place-card__bookmark-icon" width="18" height="19">
                <use xlinkHref="#icon-bookmark" />
              </svg>
              <span className="visually-hidden">In bookmarks</span>
            </button>
          </div>
          <div className="place-card__rating rating">
            <div className="place-card__stars rating__stars">
              <span style={{width: `${ratingStarts}%`}} />
              <span className="visually-hidden">Rating</span>
            </div>
          </div>
          <h2 className="place-card__name">
            <Link to='/room'>{description}</Link>
          </h2>
          <p className="place-card__type">{typeEstate}</p>
        </div>
      </article>
    );
  }

  return (
    <article className="cities__place-card place-card">
      <div className="place-card__mark">
        <span>{classEstate}</span>
      </div>
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={path}>
          <img className="place-card__image" src={srcImg} width="260" height="200" alt={altImg} />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{cost}</b>
            <span className="place-card__price-text">&#47;&nbsp;{period}</span>
          </div>
          <button className="place-card__bookmark-button button" type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark" />
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${ratingStarts}%`}} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={path}>{description}</Link>
        </h2>
        <p className="place-card__type">{typeEstate}</p>
      </div>
    </article>
  );
}

export default FlatCardComponent;
