import { FC, useState, Dispatch, SetStateAction } from 'react';
import classes from './Product.module.scss';
import { PositionCount } from '../../../types/position';
import MyButton from './MyButton/MyButton';
import ChangeCount from './ChangeCount/ChangeCount';
import { CartType } from '../../../types/cart';

interface PositionProps {
  position: PositionCount;
  onSetCartProducts: Dispatch<SetStateAction<CartType>>;
  cartProducts: CartType;
}

const Product: FC<PositionProps> = (props) => {
  const { position, onSetCartProducts, cartProducts } = props;

  //Увеличение товара в корзине
  const handleClickUp = () => {
    if (cartProducts.find((el) => el.id == position.id)) {
      cartProducts.find((el) => {
        if (el.id == position.id) {
          el.count = el.count + 1;
        }
      });
      onSetCartProducts([...cartProducts]);
    } else {
      onSetCartProducts([
        ...cartProducts,
        { ...position, count: position.count + 1 },
      ]);
    }
  };

  //Уменьшение товара в корзине
  const handleClickDown = () => {
    if (cartProducts.find((el) => el.id == position.id)) {
      cartProducts.find((el) => {
        if (el.id == position.id) {
          el.count = el.count - 1;
        }
      });
      onSetCartProducts([...cartProducts]);
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
          {cartProducts.find((el) => el.id == position.id)?.count ? (
            <ChangeCount
              count={cartProducts.find((el) => el.id == position.id)?.count}
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
