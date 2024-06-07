import { FC } from 'react';
import { Product } from '@/components';
import { getProducts } from '@/servises';
import { useQuery } from '@tanstack/react-query';

const ProductCatalog: FC = () => {
  const { data: positions, isLoading } = useQuery({
    queryKey: ['products'],
    queryFn: getProducts,
  });

  if (isLoading) {
    return (
      <div>
        <span>Загрузка</span>
      </div>
    );
  }

  return (
    <>
      {positions.map((product) => (
        <Product key={product.id} position={{ ...product, count: 0 }} />
      ))}
      <span>test</span>
    </>
  );
};

export default ProductCatalog;
