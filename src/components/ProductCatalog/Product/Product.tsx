//import { FC, useState, Dispatch, SetStateAction } from 'react';
import { FC, useState } from 'react';
import classes from './Product.module.scss';
import { PositionCount } from '../../../types/position';
import MyButton from './MyButton/MyButton';
import ChangeCount from './ChangeCount/ChangeCount';
import { CartType } from '../../../types/cart';
import { Updater } from 'use-immer';

interface PositionProps {
  position: PositionCount;
  // onSetCartProducts: Dispatch<SetStateAction<CartType>>;
  onSetCartProducts: Updater<CartType>;
  cartProducts?: CartType;
}

const Product: FC<PositionProps> = (props) => {
  const { position, onSetCartProducts, cartProducts } = props;

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

  //Увеличение товара в корзине useImmer
  const handleClickUp = () => {
    onSetCartProducts((preState) => {
      if (preState.items.find((el) => el.id == position.id)) {
        preState.items.find((el) => {
          if (el.id == position.id) {
            el.count++;
          }
        });
      } else {
        preState.items.push({ ...position, count: position.count + 1 });
      }
      preState.totalPrice = preState.totalPrice + position.price;
    });
  };

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

  //Уменьшение товара в корзине useImmer
  const handleClickDown = () => {
    onSetCartProducts((preState) => {
      if (preState.items.find((el) => el.id == position.id)) {
        preState.items.find((el) => {
          if (el.id == position.id) {
            el.count--;
          }
        });
      }
      preState.totalPrice = preState.totalPrice - position.price;
    });
  };

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
          {cartProducts?.items.find((el) => el.id == position.id)?.count ? (
            <ChangeCount
              count={
                cartProducts.items.find((el) => el.id == position.id)?.count
              }
              onClickAtionUp={handleClickUp}
              onClickAtionDown={handleClickDown}
            />
          ) : (
            <MyButton onClickAtion={handleClickUp} color="green">
              Купить
            </MyButton>
          )}
        </div>
      </div>
    </div>
  );
};

export default Product;
