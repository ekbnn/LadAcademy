import { FC, Dispatch, SetStateAction } from 'react';
import Product from '../Product/Product';
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
  handleCartCount,
}) => {
  return (
    <>
      {products.map((product) => (
        <Product
          key={product.id}
          position={product}
          onSetCartProducts={onSetCartProducts}
          cartProducts={cartProducts}
          handleCartCount={handleCartCount}
        />
      ))}
    </>
  );
};

export default ProductCatalog;
