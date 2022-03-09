import { PropertyData, PropertyImage, Host } from '../types/property';

export const propertyDataList: PropertyData[] = [
  {
    isClass: true,
    classEstate: 'premium',
    srcImg: 'img/apartment-01.jpg',
    altImg: 'Place image',
    cost: 120,
    period: 'night',
    description: 'Beautiful &amp; luxurious apartment at great location',
    typeEstate: 'Apartment',
    id: 1,
    isFavorites: false,
    ratingStarts: 80,
    rating: 4.8,
    rooms: 3,
    maxAdults: 4,
    convenience: ['Wi-Fi', 'Washing machine', 'Towels', 'Heating', 'Coffee machine', 'Baby seat', 'Kitchen', 'Dishwasher', 'Cabel TV', 'Fridge'],
  },
  {
    srcImg: 'img/apartment-02.jpg',
    altImg: 'Place image',
    cost: 1000,
    period: 'night',
    description: 'Beautiful &amp; luxurious',
    typeEstate: 'Apartment',
    id: 2,
    isFavorites: false,
    ratingStarts: 50,
  },
  {
    srcImg: 'img/apartment-03.jpg',
    altImg: 'Place image',
    cost: 10000,
    period: 'night',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing ',
    typeEstate: 'Flat',
    id: 3,
    isFavorites: false,
    ratingStarts: 70,
  },
  {
    srcImg: 'img/room.jpg',
    altImg: 'Place image',
    cost: 2000,
    period: 'night',
    description: 'Lorem ipsum dolor sit amet',
    typeEstate: 'Room',
    id: 4,
    isFavorites: false,
    ratingStarts: 30,
  },
];

export const propertyGallery: PropertyImage[] = [
  {
    src: 'img/room.jpg',
    alt: 'Photo studio',
  },
  {
    src: 'img/apartment-01.jpg',
    alt: 'Photo studio',
  },
  {
    src: 'img/apartment-02.jpg',
    alt: 'Photo studio',
  },
  {
    src: 'img/apartment-03.jpg',
    alt: 'Photo studio',
  },
  {
    src: 'img/studio-01.jpg',
    alt: 'Photo studio',
  },
  {
    src: 'img/apartment-01.jpg',
    alt: 'Photo studio',
  },
];

export const propertyHost: Host = {
  avatarSrc: 'img/avatar-angelina.jpg',
  avatarAlt: 'Host avatar',
  name: 'Angelina',
  status: 'Pro',
  about: ['A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
    'An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.',
  ],
};
