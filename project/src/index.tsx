import React from 'react';
import ReactDOM from 'react-dom';

import { citiesList } from './mocks/cities';
import { pointsList } from './mocks/points';
import { propertyDataList, propertyGallery, propertyHost} from './mocks/property';
import { reviewsProperty } from './mocks/reviews';

import App from './components/app/app';

const LogoHeader = {
  LOGO_SRC: 'img/logo.svg',
  LOGO_ALT: '6 cities logo',
};

const User = {
  USER_EMAIL: 'Oliver.conner@gmail.com',
  USER_STATUS: true,
};

ReactDOM.render(
  <React.StrictMode>
    <App
      propertyDataList={propertyDataList}
      propertyGallery={propertyGallery}
      propertyHost={propertyHost}

      reviewsProperty={reviewsProperty}

      cities={citiesList}
      points={pointsList}

      logoSrc={LogoHeader.LOGO_SRC}
      logoAlt={LogoHeader.LOGO_ALT}

      userEmail={User.USER_EMAIL}
      userStatus={User.USER_STATUS}
    />
  </React.StrictMode>,
  document.getElementById('root'));
