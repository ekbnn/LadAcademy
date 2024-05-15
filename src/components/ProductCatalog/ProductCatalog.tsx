import { FC } from 'react';
import Product from '../Product/Product';
import Row from '../Row/Row';
import { Position } from '../../types/position';

interface ProductCatalogProps {
  products: Position[];
}

const ProductCatalog: FC<ProductCatalogProps> = ({ products }) => {
  return (
    <Row>
      {products.map((product) => (
        <Product position={product} />
      ))}
    </Row>
  );
};

export default ProductCatalog;
