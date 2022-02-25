import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const ArrCities = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];

const LogoHeader = {
  LOGO_SRC: 'img/logo.svg',
  LOGO_ALT: '6 cities logo',
};

const User = {
  USER_EMAIL: 'Oliver.conner@gmail.com',
  USER_STATUS: true,
};

const PropertyDates = {
  PROPERTY_CLASS: 'Premium',
  PROPERTY_DESCRIPTION: 'Beautiful & luxurious studio at great location',
  PROPERTY_RATING: 4.8,
  PROPERTY_COST: 120,
};

const SearchResult = {
  RESULT: 312,
};

const FlatCardSet = {
  CLASS_ESTATE: 'premium',
  SRC_IMG: 'img/apartment-01.jpg',
  ALT_IMG: 'Place image',
  COST: 120,
  PERIOD: 'night',
  DESCRIPTION: 'Beautiful &amp; luxurious apartment at great location',
  TYPE_ESTATE: 'Apartment',
};

// const cards = FlatCards.map((card: object) => (card));

ReactDOM.render(
  <React.StrictMode>
    <App
      propertyClass={PropertyDates.PROPERTY_CLASS}
      propertyDescription={PropertyDates.PROPERTY_DESCRIPTION}
      propertyRating={PropertyDates.PROPERTY_RATING}
      propertyCost={PropertyDates.PROPERTY_COST}

      arrCities={ArrCities}

      logoSrc={LogoHeader.LOGO_SRC}
      logoAlt={LogoHeader.LOGO_ALT}

      userEmail={User.USER_EMAIL}
      userStatus={User.USER_STATUS}

      searchResult={SearchResult.RESULT}

      classEstate={FlatCardSet.CLASS_ESTATE}
      srcImg={FlatCardSet.SRC_IMG}
      altImg={FlatCardSet.ALT_IMG}
      cost={FlatCardSet.COST}
      period={FlatCardSet.PERIOD}
      description={FlatCardSet.DESCRIPTION}
      typeEstate={FlatCardSet.TYPE_ESTATE}
    />
  </React.StrictMode>,
  document.getElementById('root'));
