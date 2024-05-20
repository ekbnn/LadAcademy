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
      name: 'Наручные часы мужские SKMEI 1251',
      imageUrl:
        'https://main-cdn.sbermegamarket.ru/big2/hlr-system/214/156/886/511/117/11/600004929632b0.jpeg',
      price: 8165,
      discount: 90,
      rating: 4.7,
      isFavorite: true,
    },
    {
      id: 3,
      name: 'Наручные часы мужские SKMEI 1251',
      imageUrl:
        'https://main-cdn.sbermegamarket.ru/big2/hlr-system/214/156/886/511/117/11/600004929632b0.jpeg',
      price: 8165,
      discount: 90,
      rating: 4.7,
      isFavorite: true,
    },
    {
      id: 4,
      name: 'Наручные часы мужские SKMEI 1251',
      imageUrl:
        'https://main-cdn.sbermegamarket.ru/big2/hlr-system/214/156/886/511/117/11/600004929632b0.jpeg',
      price: 8165,
      discount: 90,
      rating: 4.7,
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
        <Cart cartProducts={cartProducts} />
      </div>
    </div>
  );
}

export default App;
