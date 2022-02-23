import React from 'react';

type FlatCardProps = {
  flatCards: {
    classEstate?: string
    srcImg: string
    altImg: string,
    cost: number,
    period: string,
    description: string
    typeEstate: string
  },
}

const spanStyle = {
  width: '80%',
};

function FlatCard({flatCards}: FlatCardProps): JSX.Element {
  return (
    <article className="cities__place-card place-card">
      <div className="place-card__mark">
        <span>{flatCards.classEstate}</span>
      </div>
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img className="place-card__image" src={flatCards.srcImg} width="260" height="200" alt={flatCards.altImg} />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{flatCards.cost}</b>
            <span className="place-card__price-text">&#47;&nbsp;{flatCards.period}</span>
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
            <span style={spanStyle} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="#">{flatCards.description}</a>
        </h2>
        <p className="place-card__type">{flatCards.typeEstate}</p>
      </div>
    </article>
  );
}

export default FlatCard;
