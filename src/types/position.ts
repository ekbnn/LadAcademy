export interface Position {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
  discount: number;
  rating: number;
  isFavorite: boolean;
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

export interface PositionCount extends Position {
  count: number;
}
