import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// AuthorizationStatus
import { AppRoute } from '../../const';
import { City } from '../../types/cities';
import { PropertyData, PropertyImage, Host } from '../../types/property';
import { ReviewsList } from '../../types/reviews';

// import PrivateRoute from '../private-route/private-route';

import Header from '../header/header';
import Footer from '../footer/footer';

import MainPage from '../main/main-page';
import FavoritesFlats from '../favorites/favorites';
import PropertyPage from '../property/property-page';
import LoginPage from '../login/login';
import ErrorPage from '../404/404';

type AppProps = {
  propertyHost: Host,
  propertyGallery: PropertyImage[],
  propertyDataList: PropertyData[];
  reviewsProperty: ReviewsList,

  cities: City[],

  logoSrc: string,
  logoAlt: string,

  userEmail: string,
  userStatus: boolean,
}

function App({cities, logoSrc, logoAlt, userEmail, userStatus, reviewsProperty, propertyDataList, propertyGallery, propertyHost }: AppProps): JSX.Element {
  return (

    <BrowserRouter>
      <Header
        logoSrc={logoSrc}
        logoAlt={logoAlt}
        userEmail={userEmail}
        userStatus={userStatus}
      />

      <Routes>
        <Route
          path={AppRoute.Root}
          element={
            <MainPage
              cities={cities}

              propertyDataList={propertyDataList}
            />
          }
        />

        <Route
          path={AppRoute.FavoriteFlats}
          element={
            // <PrivateRoute
            //   authorizationStatus={AuthorizationStatus.NoAuth}
            // >
            <FavoritesFlats propertyDataList={propertyDataList}/>
            // </PrivateRoute>
          }
        />

        <Route
          path={AppRoute.PropertyPage}
          element={
            <PropertyPage
              propertyDataList={propertyDataList}
              propertyGallery={propertyGallery}
              propertyHost={propertyHost}
              reviewsProperty={reviewsProperty}
            />
          }
        />

        <Route
          path={AppRoute.Login}
          element={<LoginPage />}
        />

        <Route
          path='*'
          element={<ErrorPage />}
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
