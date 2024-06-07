import { FC, useContext, useState } from 'react';
import classes from './Product.module.scss';
import { PositionCount } from '@/types';
import { CartContext, addItem, setCountCart } from '@/Context/Cart';
import ChangeCount from './ChangeCount/ChangeCount';
import MyButton from './MyButton/MyButton';

interface PositionProps {
  position: PositionCount;
}

const Product: FC<PositionProps> = (props) => {
  const { position } = props;

  const { cart, dispatch } = useContext(CartContext);

  //Добавление товара в корзину
  const handleAddItem = () => {
    dispatch(addItem(position));
  };

  //Увеличение товара в корзине
  //prettier-ignore
  const handleChangeCountUp = () => {
    dispatch( setCountCart( position.id, (cart.items.find((el) => el.id == position.id)?.count || 1) + 1));
  };
  //Уменьшение товара в корзине
  //prettier-ignore
  const handleChangeCountDown = () => {
    dispatch( setCountCart( position.id, (cart.items.find((el) => el.id == position.id)?.count || 1) - 1));
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
        {/* Отображение скидки если она есть */}
        {position.discount && (
          <div className={classes.product__discount}>
            -{position.discount?.value} %
          </div>
        )}
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
          {cart.items.find((el) => el.id == position.id)?.count ? (
            <ChangeCount
              count={cart.items.find((el) => el.id == position.id)?.count}
              onClickActionUp={handleChangeCountUp}
              onClickActionDown={handleChangeCountDown}
            />
          ) : (
            <MyButton onClickAction={handleAddItem} color="green">
              Купить
            </MyButton>
          )}
        </div>
      </div>
    </div>
  );
};

export default Product;
