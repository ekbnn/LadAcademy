// import { useImmer } from 'use-immer';
import { Row, ProductCatalog, Cart } from '@/components';
// import { CartType } from '@/types';
import classes from '@/App.module.scss';
import ThemesChanger from './components/ThemesChanger/ThemesChanger';

function App() {
  // const [cartProducts, setCartProducts] = useImmer<CartType>({
  //   items: [],
  //   totalPrice: 0,
  // });

  return (
    <div>
      <div>
        <ThemesChanger />
      </div>
      <div className={classes.all}>
        <Row>
          <ProductCatalog />
        </Row>

        <div>
          <Cart />
        </div>
      </div>
    </div>
  );
}

export default App;
