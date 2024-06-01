//import { FC, useState, Dispatch, SetStateAction } from 'react';
import { FC, useContext, useState } from 'react';
import { Updater } from 'use-immer';
import classes from './Product.module.scss';
import { CartType, PositionCount } from '@/types';
import {
  CartContext,
  addItem,
  decrementCart,
  incrementCart,
  debuggger 
} from '@/Context/Cart';
import ChangeCount from './ChangeCount/ChangeCount';
import MyButton from './MyButton/MyButton';

interface PositionProps {
  position: PositionCount;
  // onSetCartProducts: Dispatch<SetStateAction<CartType>>;
  onSetCartProducts: Updater<CartType>;
  cartProducts?: CartType;
}

const Product: FC<PositionProps> = (props) => {
  const { position } = props;
  // const { theme } = useContext(ThemeContext);

  // const [value, setValue] = useState<number>(0);
  // const [state, dispatch] = useImmerReducer(reducerCart, initialStateCart);
  //console.log(state);

  // const handleChange: ChangeEventHandler<HTMLInputElement> = (event) =>
  //   setValue(+event.target.value);

  const { cart, dispatch } = useContext(CartContext);

  const handleAddItem = () => {
    dispatch(addItem(position));
  };

  const handleIncrementClick = () => {
    dispatch(incrementCart(position.id, 1));
  };
  console.log(incrementCart(position.id, 1));

  const handleDecrementClick = () => {
    dispatch(decrementCart(position.id, 1));
  };

  // //Увеличение товара в корзине useState
  // let count = 0;
  // const handleClickUp = () => {
  //   onSetCartProducts((preState) => {
  //     if (preState.items.find((el) => el.id == position.id)) {
  //       preState.items.find((el) => {
  //         if (el.id == position.id) {
  //           count = el.count + 1;
  //         }
  //       });

  //       return {
  //         items: [
  //           ...preState.items.filter((el) => el.id != position.id),
  //           { ...position, count: count },
  //         ],
  //         totalPrice: totalPrice + position.price,
  //       };
  //     } else {
  //       return {
  //         items: [
  //           ...preState.items,
  //           { ...position, count: position.count + 1 },
  //         ],
  //         totalPrice: totalPrice + position.price,
  //       };
  //     }
  //   });
  // };

  // //Увеличение товара в корзине useImmer
  // const handleClickUp = () => {
  //   onSetCartProducts((preState) => {
  //     if (preState.items.find((el) => el.id == position.id)) {
  //       preState.items.find((el) => {
  //         if (el.id == position.id) {
  //           el.count++;
  //         }
  //       });
  //     } else {
  //       preState.items.push({ ...position, count: position.count + 1 });
  //     }
  //     preState.totalPrice = preState.totalPrice + position.price;
  //   });
  // };

  // //Уменьшение товара в корзине useStaet
  // const handleClickDown = () => {
  //   if (items.find((el) => el.id == position.id)) {
  //     items.find((el) => {
  //       if (el.id == position.id) {
  //         el.count = el.count - 1;
  //       }
  //     });
  //     onSetCartProducts({
  //       items: [...items],
  //       totalPrice: totalPrice - position.price,
  //     });
  //   }
  // };

  // //Уменьшение товара в корзине useImmer
  // const handleClickDown = () => {
  //   onSetCartProducts((preState) => {
  //     if (preState.items.find((el) => el.id == position.id)) {
  //       preState.items.find((el) => {
  //         if (el.id == position.id) {
  //           el.count--;
  //         }
  //       });
  //     }
  //     preState.totalPrice = preState.totalPrice - position.price;
  //   });
  // };

  //Изменение избранного
  const [like, setLike] = useState(false);
  const handleLike = () => {
    setLike(!like);
  };

  const discount = position.discount && (
    <div className={classes.product__discount}>
      -{position.discount?.value} %
    </div>
  );

  return (
    // Карточка товара
    <div className={classes.product}>
      {/* <div>Сейчас используем {theme}</div> */}
      {/* Изрбражение товара */}
      <div className={classes.product__top}>
        <img
          className={classes.product__imgPosition}
          src={position.imageUrl}
          alt="dissconnect"
        />
        {discount}
      </div>
      {/* Информация о товаре */}
      <div className={classes.product__property}>
        {/* Информация о цене */}
        <div className={classes.product__prices}>
          <div>
            <div className={classes.product__rating}>
              Рейтинг: {position.rating}
            </div>
            <div className={classes.product__cost}>{position.price} ₽</div>
          </div>
          {/* картинка избранного */}
          <div className={classes.product__pricesImg}>
            {like ? (
              <img
                onClick={handleLike}
                className={classes.product__img}
                src="/like.svg"
                alt="like"
              />
            ) : (
              <img
                onClick={handleLike}
                className={classes.product__img}
                src="/unLike.svg"
                alt="like"
              />
            )}
          </div>
        </div>
        {/* Название продукта */}
        <div>
          <a href="#" className={classes.product__name}>
            {position.name}
          </a>
        </div>
        {/* Кнопка покупки */}
        <div>
          {cart?.items.find((el) => el.id == position.id)?.count ? (
            <ChangeCount
              count={cart.items.find((el) => el.id == position.id)?.count}
              onClickAtionUp={handleIncrementClick}
              onClickAtionDown={handleDecrementClick}
            />
          ) : (
            <MyButton onClickAtion={handleAddItem} color="green">
              Купить
            </MyButton>
          )}
        </div>
      </div>
    </div>
  );
};

export default Product;
