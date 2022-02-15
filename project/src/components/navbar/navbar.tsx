import React from 'react';

type TabsProps = {
  arrCities: string[],
}


function Tab({arrCities}: TabsProps): JSX.Element {
  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          <li className="locations__item">
            <a className="locations__item-link tabs__item" href="#">
              <span>

              </span>
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default Tab;
