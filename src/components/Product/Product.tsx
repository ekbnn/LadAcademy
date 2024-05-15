import { FC } from 'react';
import classes from './Product.module.scss';
import { Position } from '../../types/position';

interface PositionProps {
  position: Position;
}

const Product: FC<PositionProps> = (props) => {
  const { position } = props;
  return (
    <div className={classes.product}>
      <img
        className={classes.product__imgPosition}
        src={position.imageUrl}
        alt="dissconnect"
      />
      <div>
        <span>{position.name}</span>
        <ul>
          <li>id: {position.id}</li>
          <li>Цена: {position.price} ₽</li>
          <li>Скидка: {position.discount}%</li>
          <li>Рейтинг: {position.rating}</li>
          <li>
            Избранное:
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
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Product;
