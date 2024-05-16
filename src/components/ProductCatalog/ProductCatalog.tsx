import { FC } from 'react';
import Product from '../Product/Product';
import { Position } from '../../types/position';

interface ProductCatalogProps {
  products: Position[];
}

const ProductCatalog: FC<ProductCatalogProps> = ({ products }) => {
  return (
    <>
      {products.map((product) => (
        <Product key={product.id} position={product} />
      ))}
    </>
  );
};

export default ProductCatalog;
