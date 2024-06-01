//import { Dispatch, FC, SetStateAction } from 'react';
import { ChangeEventHandler, FC, useContext, useState } from 'react';
import { CartType } from '../../types/cart';
import classes from './Cart.module.scss';
import { Updater } from 'use-immer';
import { CartContext, decrementCart, incrementCart } from '@/Context/Cart';

// ///Пропишем для типов action перечесление чтоб далее не ошибится
// enum ActionType {
//   INCREMENT = 'increment',
//   DECREMENT = 'decrement',
// }
// ///пропишим типы action
// type CounterAction =
//   | { type: ActionType.INCREMENT; payload: { id: number; count: number } }
//   | { type: ActionType.DECREMENT; payload: { id: number; count: number } };

// //описываем функцию reducer
// const reducerCart: ImmerReducer<CartType, CounterAction> = (
//   draftState,
//   action,
// ) => {
//   switch (action.type) {
//     case ActionType.INCREMENT:
//       draftState.items.map((el) => {
//         if (el.id == action.payload.id) {
//           el.count += action.payload.count;
//         }
//       });
//       break;
//     case ActionType.DECREMENT:
//       draftState.items.map((el) => {
//         if (el.id == action.payload.id) {
//           el.count -= action.payload.count;
//         }
//       });
//       break;
//     default:
//       break;
//   }
// };

// //вынесем начальное состояние в переменную
// const initialStateCart: CartType = {
//   items: [],
//   totalPrice: 0,
// };

// //Создаем вспомогательные функции для формирования объекта и передачи в dispatch
// const increment = (id: number, value: number) => ({
//   type: ActionType.INCREMENT,
//   payload: { id: id, count: value },
// });
// const decrement = (id: number, value: number) => ({
//   type: ActionType.DECREMENT,
//   payload: { id: id, count: value },
// });

//типизация пропса
interface CartProps {
  cartProducts: CartType;
  //onSetCartProducts: Dispatch<SetStateAction<CartType>>;
  onSetCartProducts: Updater<CartType>;
}

const Cart: FC<CartProps> = ({
  cartProducts: { items, totalPrice },
  onSetCartProducts,
}) => {
  const [value, setValue] = useState<number>(0);
  //const [state, dispatch] = useImmerReducer(reducerCart, initialStateCart);

  const { cart, dispatch } = useContext(CartContext);

  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) =>
    setValue(+event.target.value);

  const handleIncrementClick = (id: number) => {
    dispatch(incrementCart(id, value));
  };

  const handleDecrementClick = (id: number) => {
    dispatch(decrementCart(id, value));
  };

  // //Увеличение товара в корзине useImmer
  // const handleClickUp = (id: number) => {
  //   onSetCartProducts((preState) => {
  //     preState.items.map((el) => {
  //       if (el.id == id) {
  //         el.count++;
  //         preState.totalPrice = preState.totalPrice + el.price;
  //       }
  //     });
  //   });
  // };

  // //Уменьшение товара в корзине useState
  // const handleClickDown = (id: number) => {
  //   onSetCartProducts((preState) => {
  //     preState.items.map((el) => {
  //       if (el.id == id) {
  //         el.count--;
  //         preState.totalPrice = preState.totalPrice - el.price;
  //       }
  //     });
  //   });
  // };

  //Итог корзина
  let summPrice = 0;
  cart.items.map(
    (product) => (summPrice = summPrice + product.count * product.price),
  );

  return (
    <div>
      <h3>Корзина</h3>

      {cart.items.map((product) => {
        return (
          product.count > 0 && (
            <div key={product.id} className={classes.cart}>
              <div className={classes.cart__name}>{product.name}</div>
              <div className={classes.cart__priceCount}>
                <div className={classes.cart__price}>{product.price} ₽</div>
                <div className={classes.cart__count}>
                  <button
                    className={classes.cart__count__button}
                    onClick={() => handleIncrementClick(product.id)}
                  >
                    +
                  </button>
                  <input type="number" onChange={handleChange} />

                  <span>
                    {cart.items.find((el) => el.id == product.id)?.count}
                  </span>
                  <button
                    className={classes.cart__count__button}
                    onClick={() => handleDecrementClick(product.id)}
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
