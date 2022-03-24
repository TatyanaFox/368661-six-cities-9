import React from 'react';
import { Link } from 'react-router-dom';

import { City } from '../../types/cities';
import { PropertyData } from '../../types/property';
import FlatCardComponent from '../flat-card/flat-card';

type MainPAgeProps = {
  cities: City[],
  propertyDataList: PropertyData[],
}

function MainPage({cities, propertyDataList}: MainPAgeProps): JSX.Element {
  const condition = !propertyDataList.length;
  const citesList = cities.map((town) => (
    <li className="locations__item" key={town.id}>
      <Link className="locations__item-link tabs__item" to={town.src}>
        <span>{town.name}</span>
      </Link>
    </li>
  ));

  return (
    <div className="page page--gray page--main">
      <main className={`page__main page__main--index ${condition ? 'page__main--index-empty' : ''}`}>
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <ul className="locations__list tabs__list">{citesList}</ul>
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            {
              !propertyDataList.length
                ? (
                  <>
                    <section className="cities__no-places">
                      <div className="cities__status-wrapper tabs__content">
                        <b className="cities__status">No places to stay available</b>
                        <p className="cities__status-description">We could not find any property available at the moment in Dusseldorf</p>
                      </div>
                    </section>
                    <div className="cities__right-section" />
                  </>
                )
                : (
                  <>
                    <section className={`cities__places places ${condition ? 'cities__places-container--empty' : ''}`}>
                      <h2 className="visually-hidden">Places</h2>
                      <b className="places__found">
                        {propertyDataList.length} places to stay in Amsterdam
                      </b>
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
                        {
                          propertyDataList.map((flat) => <FlatCardComponent key={flat.id} flatCard={flat} />)
                        }
                      </div>
                    </section>
                    <div className="cities__right-section">
                      <section className="cities__map map" />
                    </div>
                  </>
                )
            }
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainPage;
