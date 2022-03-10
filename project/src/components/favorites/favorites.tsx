import React from 'react';
import { Link } from 'react-router-dom';

import { PropertyData } from '../../types/property';
import FlatCardComponent from '../flat-card/flat-card';

type FavoritesProps = {
  propertyDataList: PropertyData[],
};

function FavoritesFlats({ propertyDataList }: FavoritesProps): JSX.Element {
  const condition = (propertyDataList.length === 0);

  return(
    <div className={`page ${condition ? 'page page--favorites-empty' : ''}`}>
      <main className={`page__main page__main--favorites ${condition ? 'page__main--favorites-empty' : ''}`}>
        <div className='page__favorites-container container'>
          <section className={`favorites ${condition ? 'favorites--empty' : ''}`}>
            <h1 className="favorites__title">
              {condition ? 'Favorites (empty)' : 'Saved listing'}
            </h1>

            <ul className="favorites__list">
              <li className="favorites__locations-items">
                <div className="favorites__locations locations locations--current">
                  <div className="locations__item">
                    <Link className="locations__item-link" to='#'>
                      <span>Amsterdam</span>
                    </Link>
                  </div>
                </div>
                <div className="favorites__places">
                  {
                    propertyDataList.map((flat) => <FlatCardComponent key={flat.id} flatCard={flat} />)
                  }
                </div>
              </li>
            </ul>
          </section>
        </div>
      </main>
    </div>
  );
}

export default FavoritesFlats;
