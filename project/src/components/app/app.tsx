import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const';
import PrivateRoute from '../private-route/private-route';

import Header from '../header/header';
import Footer from '../footer/footer';

import MainPage from '../main/main-full/main-page';
import FavoritesFlats from '../favorites/favorites-full/favorites';
import LoginPage from '../login/login';
import PropertyPage from '../property/property-page';
import ErrorPage from '../404/404';

type AppProps = {
  propertyClass: string,
  propertyDescription: string,
  propertyRating: number,
  propertyCost: number,

  arrCities: string[],

  logoSrc: string,
  logoAlt: string,

  userEmail: string,
  userStatus: boolean,

  searchResult: number,

  classEstate?: string
  srcImg: string
  altImg: string,
  cost: number,
  period: string,
  description: string
  typeEstate: string,
}

function App({arrCities, logoSrc, logoAlt, userEmail, userStatus, searchResult, classEstate, srcImg, altImg, cost, period, description, typeEstate, propertyClass, propertyDescription, propertyRating, propertyCost}: AppProps): JSX.Element {
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
              arrCities={arrCities}
              searchResult={searchResult}
              classEstate={classEstate}
              srcImg={srcImg}
              altImg={altImg}
              cost={cost}
              period={period}
              description={description}
              typeEstate={typeEstate}
            />
          }
        />

        <Route
          path={AppRoute.FavoriteFlats}
          element={
            <PrivateRoute
              authorizationStatus={AuthorizationStatus.NoAuth}
            >
              <FavoritesFlats
                srcImg={srcImg}
                altImg={altImg}
                cost={cost}
                period={period}
                description={description}
                typeEstate={typeEstate}
              />
            </PrivateRoute>
          }
        />

        <Route
          path={AppRoute.PropertyPage}
          element={
            <PropertyPage
              propertyClass={propertyClass}
              propertyDescription={propertyDescription}
              propertyRating={propertyRating}
              propertyCost={propertyCost}
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
