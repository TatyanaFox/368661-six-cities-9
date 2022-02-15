import React from 'react';
import FlatCard from '../../flat-card/flat-card';

type MainPAgeProps = {
  arrCities: string[],

  searchResult: number,

  classEstate?: string
  srcImg: string
  altImg: string,
  cost: number,
  period: string,
  description: string
  typeEstate: string
}

function MainPage({arrCities, searchResult, classEstate, srcImg, altImg, cost, period, description, typeEstate}: MainPAgeProps): JSX.Element {
  return (
    <div className="page page--gray page--main">

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <ul className="locations__list tabs__list">
              <li className="locations__item">
                <a className="locations__item-link tabs__item" href="#">
                  <span>{arrCities[0]}</span>
                </a>
              </li>
              <li className="locations__item">
                <a className="locations__item-link tabs__item" href="#">
                  <span>{arrCities[1]}</span>
                </a>
              </li>
              <li className="locations__item">
                <a className="locations__item-link tabs__item" href="#">
                  <span>{arrCities[2]}</span>
                </a>
              </li>
              <li className="locations__item">
                <a className="locations__item-link tabs__item tabs__item--active">
                  <span>{arrCities[3]}</span>
                </a>
              </li>
              <li className="locations__item">
                <a className="locations__item-link tabs__item" href="#">
                  <span>{arrCities[4]}</span>
                </a>
              </li>
              <li className="locations__item">
                <a className="locations__item-link tabs__item" href="#">
                  <span>{arrCities[5]}</span>
                </a>
              </li>
            </ul>
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{searchResult} places to stay in Amsterdam</b>
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by</span>
                <span className="places__sorting-type" tabIndex={0}>
                  Popular
                  <svg className="places__sorting-arrow" width="7" height="4">
                    <use xlinkHref="#icon-arrow-select" />
                  </svg>
                </span>
                <ul className="places__options places__options--custom places__options--opened">
                  <li className="places__option places__option--active" tabIndex={0}>Popular</li>
                  <li className="places__option" tabIndex={0}>Price: low to high</li>
                  <li className="places__option" tabIndex={0}>Price: high to low</li>
                  <li className="places__option" tabIndex={0}>Top rated first</li>
                </ul>
              </form>
              <div className="cities__places-list places__list tabs__content">
                <FlatCard
                  classEstate={classEstate}
                  srcImg={srcImg}
                  altImg={altImg}
                  cost={cost}
                  period={period}
                  description={description}
                  typeEstate={typeEstate}
                />


                <FlatCard
                  srcImg={srcImg}
                  altImg={altImg}
                  cost={cost}
                  period={period}
                  description={description}
                  typeEstate={typeEstate}
                />


                <FlatCard
                  classEstate={classEstate}
                  srcImg={srcImg}
                  altImg={altImg}
                  cost={cost}
                  period={period}
                  description={description}
                  typeEstate={typeEstate}
                />


                <FlatCard
                  srcImg={srcImg}
                  altImg={altImg}
                  cost={cost}
                  period={period}
                  description={description}
                  typeEstate={typeEstate}
                />


                <FlatCard
                  classEstate={classEstate}
                  srcImg={srcImg}
                  altImg={altImg}
                  cost={cost}
                  period={period}
                  description={description}
                  typeEstate={typeEstate}
                />
              </div>
            </section>
            <div className="cities__right-section">
              <section className="cities__map map" />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainPage;
