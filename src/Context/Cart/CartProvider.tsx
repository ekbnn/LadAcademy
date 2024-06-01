import { CartType } from '@/types';
import { Dispatch, FC, ReactNode, createContext } from 'react';
import { CartAction } from './typesCart';
import { initialStateCart } from './InitialStateCart';
import { reducerCart } from './reducerCart';
import { useImmerReducer } from 'use-immer';

interface CartProviderProps {
  children: ReactNode;
}

export const CartContext = createContext<{
  cart: CartType;
  dispatch: Dispatch<CartAction>;
}>({
  cart: initialStateCart,
  dispatch: () => {},
});

const CartProvider: FC<CartProviderProps> = ({ children }) => {
  const [cart, dispatch] = useImmerReducer(reducerCart, initialStateCart);

  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
