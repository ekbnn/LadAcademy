import { ImmerReducer } from 'use-immer';
import { CartType, CartAction, ActionType } from './typesCart';

//описываем функцию reducer
export const reducerCart: ImmerReducer<CartType, CartAction> = (
  draftState,
  action,
) => {
  switch (action.type) {
    /// case добавление первого элемента
    case ActionType.ADDITEM:
      if (!draftState.items.find((el) => el.id == action.payload.item.id)) {
        draftState.items.push({
          ...action.payload.item,
          count: action.payload.item.count + 1,
        });
        draftState.totalPrice += action.payload.item.price;
      }
      break;

    /// case изменение count
    case ActionType.SET:
      draftState.items.map((el) => {
        if (el.id == action.payload.id) {
          el.count = action.payload.count;
        }
      });
      // Удаление элемента из корзины если count=0
      if (action.payload.count < 1) {
        draftState.items = draftState.items.filter(
          (el) => el.id != action.payload.id,
        );
      }
      // Итог корзины
      draftState.totalPrice = 0;
      draftState.items.map(
        (el) =>
          (draftState.totalPrice = draftState.totalPrice + el.count * el.price),
      );
      break;

    default:
      break;
  }
};
