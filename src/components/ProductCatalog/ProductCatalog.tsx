import { FC, useState } from 'react';
import { getProducts } from '@/servises';
import { useQuery } from '@tanstack/react-query';
import Product from './Product/Product';
import Pagination from '../Pagination/Pagination';
import classes from './ProductCatalog.module.scss';
import { Row } from '..';

const ProductCatalog: FC = () => {
  const [carrentPage, setCarrentPage] = useState<number>(1);
  const [prePage, setPrePage] = useState<number>(3);

  const { data, isLoading, isError } = useQuery({
    queryKey: ['products', carrentPage, prePage],
    queryFn: () => getProducts(carrentPage, prePage),
    refetchOnWindowFocus: false,
  });

  if (isLoading) {
    return (
      <div>
        <span>Загрузка</span>
      </div>
    );
  }

  if (isError || !data) {
    return <h1>Ошибка</h1>;
  }

  const { first, prev, next, last, pages, items } = data;

  return (
    <div className={classes.wrapper}>
      <div className={classes.pagination}>
        <select
          onChange={(event) => setPrePage(+event.target.value)}
          value={prePage}
        >
          <option value="3">3</option>
          <option value="6">6</option>
          <option value="9">9</option>
        </select>
        <Pagination
          carrentPage={carrentPage}
          setCarrentPage={setCarrentPage}
          first={first}
          prev={prev}
          next={next}
          last={last}
          pages={pages}
          items={items}
        />
      </div>
      <div className={classes.items}>
        <Row>
          {data.products.map((product) => (
            <Product key={product.id} position={{ ...product, count: 0 }} />
          ))}
        </Row>
      </div>
    </div>
  );
};

export default ProductCatalog;
