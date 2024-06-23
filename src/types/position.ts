export interface Position {
  id: string;
  name: string;
  imageUrl: string;
  price: number;
  discount?: {
    type: 'persent' | 'fix';
    value: number;
  };
  rating?: number;
  isFavorite?: boolean;
}

export type ProductStoreRequest = Omit<
  Position,
  'id' | 'discount' | 'rating' | 'isFavorite'
>;

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

export interface ProductResponse {
  first: number;
  prev: number | null;
  next: number | null;
  last: number;
  pages: number;
  items: number;
  products: Position[];
}
