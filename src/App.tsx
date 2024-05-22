import Row from './components/Row/Row.tsx';
import ProductCatalog from './components/ProductCatalog/ProductCatalog.tsx';
import { Position } from './types/position.ts';
import Cart from './components/Cart/Cart.tsx';
import { CartType } from './types/cart.ts';
import { useState } from 'react';
import classes from './App.module.scss';

function App() {
  const positions: Position[] = [
    {
      id: 1,
      name: 'Наручные часы мужские SKMEI 1251',
      imageUrl:
        'https://main-cdn.sbermegamarket.ru/big2/hlr-system/214/156/886/511/117/11/600004929632b0.jpeg',
      price: 8165,
      discount: 90,
      rating: 4.7,
      isFavorite: true,
    },
    {
      id: 2,
      name: 'Смартфон HONOR X8a 6/128GB Blue',
      imageUrl:
        'https://main-cdn.sbermegamarket.ru/big2/hlr-system/-11/166/911/211/024/423/100049920620b0.jpg',
      price: 12489,
      discount: 50,
      rating: 4.9,
      isFavorite: true,
    },
    {
      id: 3,
      name: 'Коляска детская 3 в 1 Indigo Desire с автолюлькой',
      imageUrl:
        'https://main-cdn.sbermegamarket.ru/big2/hlr-system/-13/880/530/081/024/433/100050018818b0.jpg',
      price: 35099,
      discount: 7,
      rating: 4.1,
      isFavorite: true,
    },
    {
      id: 4,
      name: 'Водонагреватель THERMEX Dream 30',
      imageUrl:
        'https://main-cdn.sbermegamarket.ru/big2/hlr-system/-14/558/933/265/131/918/100034330245b1.png',
      price: 9999,
      discount: 32,
      rating: 5.0,
      isFavorite: true,
    },
    {
      id: 5,
      name: 'Sup-доска Konda Shark 11,6',
      imageUrl:
        'https://main-cdn.sbermegamarket.ru/big2/hlr-system/306/339/777/318/165/1/100060619305b0.jpg',
      price: 17999,
      discount: 10,
      rating: 4.3,
      isFavorite: true,
    },
  ];

  const [cartProducts, setCartProducts] = useState<CartType>([]);

  return (
    <div className={classes.all}>
      <Row>
        <ProductCatalog
          products={positions}
          onSetCartProducts={setCartProducts}
          cartProducts={cartProducts}
        />
      </Row>

      <div>
        <Cart cartProducts={cartProducts} onSetCartProducts={setCartProducts} />
      </div>
    </div>
  );
}

export default App;
