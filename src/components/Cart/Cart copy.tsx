//import { Dispatch, FC, SetStateAction } from 'react';
import { FC } from 'react';
import { CartType } from '../../types/cart';
import classes from './Cart.module.scss';
import { Updater } from 'use-immer';

interface CartProps {
  cartProducts: CartType;
  //onSetCartProducts: Dispatch<SetStateAction<CartType>>;
  onSetCartProducts: Updater<CartType>;
}

const Cart: FC<CartProps> = ({
  cartProducts: { items, totalPrice },
  onSetCartProducts,
}) => {
  // //Увеличение товара в корзине useState
  // const handleClickUp = (id: number) => {
  //   items.map((el) => {
  //     if (el.id == id) {
  //       el.count = el.count + 1;
  //       totalPrice = totalPrice + el.price;
  //     }
  //   });
  //   onSetCartProducts((preState) => {
  //     return { ...preState, items: [...items], totalPrice: totalPrice };
  //   });
  // };

  //Увеличение товара в корзине useImmer
  const handleClickUp = (id: number) => {
    onSetCartProducts((preState) => {
      preState.items.map((el) => {
        if (el.id == id) {
          el.count++;
          preState.totalPrice = preState.totalPrice + el.price;
        }
      });
    });
  };

  // //Уменьшение товара в корзине useState
  // const handleClickDown = (id: number) => {
  //   items.map((el) => {
  //     if (el.id == id) {
  //       el.count = el.count - 1;
  //       totalPrice = totalPrice - el.price;
  //     }
  //   });
  //   onSetCartProducts((preState) => {
  //     return { ...preState, items: [...items], totalPrice: totalPrice };
  //   });
  // };

  //Уменьшение товара в корзине useState
  const handleClickDown = (id: number) => {
    onSetCartProducts((preState) => {
      preState.items.map((el) => {
        if (el.id == id) {
          el.count--;
          preState.totalPrice = preState.totalPrice - el.price;
        }
      });
    });
  };

  //Итог корзина
  let summPrice = 0;
  items.map(
    (product) => (summPrice = summPrice + product.count * product.price),
  );

  return (
    <div>
      <h3>Корзина</h3>

      {items.map((product) => {
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
                  <span>{items.find((el) => el.id == product.id)?.count}</span>
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

      {/* <div>Итог: {summPrice} ₽</div> */}
      <div>Итог: {totalPrice} ₽</div>
    </div>
  );
};

export default Cart;
