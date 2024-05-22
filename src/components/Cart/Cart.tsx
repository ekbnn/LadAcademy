import { Dispatch, FC, SetStateAction } from 'react';
import { CartType } from '../../types/cart';
import classes from './Cart.module.scss';

interface CartProps {
  cartProducts: CartType;
  onSetCartProducts: Dispatch<SetStateAction<CartType>>;
}

const Cart: FC<CartProps> = ({ cartProducts, onSetCartProducts }) => {
  //Увеличение товара в корзине
  const handleClickUp = (id: number) => {
    cartProducts.map((el) => el.id == id && (el.count = el.count + 1));
    onSetCartProducts([...cartProducts]);
  };
  //Уменьшение товара в корзине
  const handleClickDown = (id: number) => {
    cartProducts.map((el) => el.id == id && (el.count = el.count - 1));
    onSetCartProducts([...cartProducts]);
  };

  //Итог корзина
  let summPrice = 0;
  cartProducts.map(
    (product) => (summPrice = summPrice + product.count * product.price),
  );

  return (
    <div>
      <h3>Корзина</h3>

      {cartProducts.map((product) => {
        return (
          product.count > 0 && (
            <div key={product.id} className={classes.cart}>
              <div className={classes.cart__name}>{product.name}</div>
              <div className={classes.cart__priceCount}>
                <div className={classes.cart__price}>{product.price} ₽</div>
                <div className={classes.cart__count}>
                  <button
                    className={classes.cart__count__button}
                    onClick={() => handleClickUp(product.id)}
                  >
                    +
                  </button>
                  <span>
                    {cartProducts.find((el) => el.id == product.id)?.count}
                  </span>
                  <button
                    className={classes.cart__count__button}
                    onClick={() => handleClickDown(product.id)}
                  >
                    -
                  </button>
                </div>
              </div>
            </div>
          )
        );
      })}

      <div>Итог: {summPrice} ₽</div>
    </div>
  );
};

export default Cart;
