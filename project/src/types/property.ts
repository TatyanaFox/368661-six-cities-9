export type PropertyData = {
  id: number,
  isFavorites: boolean,
  isClass?: boolean,
  classEstate?: string
  srcImg: string
  altImg: string,
  cost: number,
  period: string,
  description: string
  typeEstate: string,
  ratingStarts: number,
  rating?: number,
  rooms?: number,
  maxAdults?: number,
  convenience?: string[],
};

export type PropertyImage = {
  src: string,
  alt: string,
};

export type Host = {
  avatarSrc: string,
  avatarAlt: string,
  name: string,
  status?: string,
  about: string[],
};
