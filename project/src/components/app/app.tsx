import React from 'react';

import Header from '../header/header';
import Footer from '../footer/footer';

import MainPage from '../main/main-full/main-page';
// import FavoritesFlats from '../favorites/favorites-full/favorites';
// import FavoritesEmpty from '../favorites/favorites-empty/favorites-empty';
// import LoginPage from '../login/login';
// import PropertyPage from '../property/property-page';

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

function App({arrCities, logoSrc, logoAlt, userEmail, userStatus, searchResult, flatCards, propertyClass, propertyDescription, propertyRating, propertyCost}: AppProps): JSX.Element {
  return (

    <>
      <Header
        logoSrc={logoSrc}
        logoAlt={logoAlt}
        userEmail={userEmail}
        userStatus={userStatus}
      />

      <MainPage
        arrCities={arrCities}
        searchResult={searchResult}
        flatCards={flatCards}
      />

      {/*<FavoritesFlats*/}
      {/*  srcImg={srcImg}*/}
      {/*  altImg={altImg}*/}
      {/*  cost={cost}*/}
      {/*  period={period}*/}
      {/*  description={description}*/}
      {/*  typeEstate={typeEstate}*/}
      {/*/>*/}

      {/*<FavoritesEmpty />*/}

      {/*<PropertyPage */}
      {/*  propertyClass={propertyClass} */}
      {/*  propertyDescription={propertyDescription} */}
      {/*  propertyRating={propertyRating} */}
      {/*  propertyCost={propertyCost} */}
      {/*/>*/}

      {/*<LoginPage />*/}

      <Footer />
    </>
  );
}

export default App;
