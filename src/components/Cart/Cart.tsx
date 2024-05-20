import { FC } from 'react';
import { CartType } from '../../types/cart';
import ChangeCount from '../ChangeCount/ChangeCount';

interface CartProps {
  cartProducts: CartType;
}

const Cart: FC<CartProps> = ({ cartProducts, funcTest }) => {
  //console.log(handleCartCount);
  //   const r = handleCartCount();
  //   console.log(r);
  const countTest = 2;

  //const [count, setCount] = useState(0);
  const handleClickUp = (elCart) => {
    let countNext = elCart.count;
    setCount((countNext = count + 1));

    if (countNext > 0) {
      if (cartProducts.find((el) => el.id == position.id)) {
        cartProducts.find((el) => {
          if (el.id == position.id) {
            el.count = countNext;
          }
        });
        onSetCartProducts([...cartProducts]);
      } else {
        onSetCartProducts([...cartProducts, { ...position, count: countNext }]);
      }
    }
  };
  return (
    <div>
      <h3>Корзина</h3>
      <ul>
        {cartProducts.map((product) => (
          <li key={product.id}>
            {product.name}
            <ChangeCount
              count={product.count}
              // handleClickDown={}
              // handleClickUp={}
            />
            <button onClick={() => funcTest([product.id, product.count])}>
              -
            </button>
            {product.count}
            <button>-</button>
          </li>
        ))}
      </ul>
      <div>Cevvf</div>
    </div>
  );
};

export default Cart;
