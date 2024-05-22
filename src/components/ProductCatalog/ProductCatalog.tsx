import { FC, Dispatch, SetStateAction } from 'react';
import Product from './Product/Product';
import { Position } from '../../types/position';
import { CartType } from '../../types/cart';

interface ProductCatalogProps {
  products: Position[];
  cartProducts: CartType;
  onSetCartProducts: Dispatch<SetStateAction<CartType>>;
}

const ProductCatalog: FC<ProductCatalogProps> = ({
  products,
  onSetCartProducts,
  cartProducts,
}) => {
  return (
    <>
      {products.map((product) => (
        <Product
          key={product.id}
          position={{ ...product, count: 0 }}
          onSetCartProducts={onSetCartProducts}
          cartProducts={cartProducts}
        />
      ))}
    </>
  );
};

export default ProductCatalog;
