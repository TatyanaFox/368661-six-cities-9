export type Review = {
  reviewerAvatar: string,
  reviewerAltImg: string,
  reviewerName: string,
  reviewText: string,
  reviewDate: string,
  reviewId: number,
  rating: number,
};

export type ReviewsList = {
  reviews: Review[],
};
