import React from 'react';

type TabsProps = {
  arrCities: string[],
}

function Tab({arrCities}: TabsProps): JSX.Element {

  const cities = arrCities.map((number: string) => (
    <li className="locations__item" key={number}>
      <a className="locations__item-link tabs__item" href="#">
        <span>{number}</span>
      </a>
    </li>
  ));

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">{cities}</ul>
      </section>
    </div>
  );
}

export default Tab;
