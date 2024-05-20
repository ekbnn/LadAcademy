export interface Position {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
  discount: number;
  rating: number;
  isFavorite: boolean;
  //count: number;
}

// export type PositionType = {
//   id: number;
//   name: string;
//   imageUrl: string;
//   price: number;
//   discount: number;
//   rating: number;
//   isFavorite: boolean;
// };

export interface ProductItemInCart extends Position {
  count: number;
}
