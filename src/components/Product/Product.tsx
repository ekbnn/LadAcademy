import { FC, useState, Dispatch, SetStateAction } from 'react';
import classes from './Product.module.scss';
import { Position } from '../../types/position';
import MyButton from '../MyButton/MyButton';
import ChangeCount from '../ChangeCount/ChangeCount';
import { CartType } from '../../types/cart';

interface PositionProps {
  position: Position;
  onSetCartProducts: Dispatch<SetStateAction<CartType>>;
  cartProducts: CartType;
}

const Product: FC<PositionProps> = (props) => {
  const { position, onSetCartProducts, cartProducts } = props;

  //Кол-во товара в корзине
  const [count, setCount] = useState(0);
  const handleClickUp = () => {
    let countNext = count;
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

  const handleClickDown = () => {
    let countNext = count;
    setCount((countNext = count - 1));

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

  //Изменение избранного
  const [like, setLike] = useState(false);
  const handleLike = () => {
    setLike(!like);
  };

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
        <div className={classes.product__discount}>-{position.discount} %</div>
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
          {count > 0 ? (
            <ChangeCount
              count={count}
              handleClickUp={handleClickUp}
              handleClickDown={handleClickDown}
            />
          ) : (
            <MyButton onClickaAtion={handleClickUp} color="green">
              Купить
            </MyButton>
          )}
          {/* <button onClick={handleClickUp}>купить</button> */}
        </div>
      </div>
    </div>
  );
};

export default Product;
