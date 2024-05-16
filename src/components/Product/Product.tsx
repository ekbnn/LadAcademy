import { FC } from 'react';
import classes from './Product.module.scss';
import { Position } from '../../types/position';
import MyButton from '../MyButton/MyButton';

interface PositionProps {
  position: Position;
}

const Product: FC<PositionProps> = (props) => {
  const { position } = props;
  const handleClickBuy = () => {
    alert('Товар добавлен в корзину');
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
          <div className={classes.product__pricesImg}>
            {position.isFavorite ? (
              <img
                className={classes.product__img}
                src="/like.svg"
                alt="like"
              />
            ) : (
              <img
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
          <MyButton onClickaAtion={handleClickBuy} color="green">
            Купить
          </MyButton>
        </div>
      </div>
    </div>
  );
};

export default Product;
