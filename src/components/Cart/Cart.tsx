import { FC, useContext } from 'react';
import classes from './Cart.module.scss';
import { CartContext, setCountCart } from '@/Context/Cart';

const Cart: FC = () => {
  const { cart, dispatch } = useContext(CartContext);

  /// Установка count продукта
  const handleSetCount = (id: number, count: number) => {
    dispatch(setCountCart(id, count));
  };

  /// Увеличение/уменьшение count продукта
  //prettier-ignore
  const handleChangeCount = (id: number, count = 1) => {
    dispatch( setCountCart( id, (cart.items.find((el) => el.id == id)?.count || 1) + count));
  };
  /// Удаление продукта из корзины
  const handleDellItemClick = (id: number) => {
    dispatch(setCountCart(id, 0));
  };

  return (
    <div>
      <h3>Корзина</h3>

      {cart.items.length > 0 && (
        <button
          onClick={() =>
            cart.items.map((product) => {
              handleSetCount(product.id, 0);
            })
          }
        >
          Очистить корзину{' '}
          <img
            className={classes.cart__deleteItem}
            src="./DeleteAll.svg"
            alt="d"
          />
        </button>
      )}

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
                    onClick={() => handleChangeCount(product.id, -1)}
                  >
                    -
                  </button>
                  <input
                    className={classes.cart__input}
                    type="tell"
                    value={cart.items.find((el) => el.id == product.id)?.count}
                    onChange={(event) => {
                      handleSetCount(product.id, +event.target.value);
                    }}
                  />
                  <button
                    className={classes.cart__count__button}
                    onClick={() => handleChangeCount(product.id)}
                  >
                    +
                  </button>
                  <button onClick={() => handleDellItemClick(product.id)}>
                    <img
                      className={classes.cart__deleteItem}
                      src="./DeleteItem.svg"
                      alt="d"
                    />
                  </button>
                </div>
              </div>
            </div>
          )
        );
      })}

      <div>Итог: {cart.totalPrice} ₽</div>
    </div>
  );
};

export default Cart;
