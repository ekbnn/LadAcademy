import { ImmerReducer } from 'use-immer';
import { CartType, CartAction, ActionType } from './typesCart';

//описываем функцию reducer
export const reducerCart: ImmerReducer<CartType, CartAction> = (
  draftState,
  action,
) => {
  switch (action.type) {
    case ActionType.ADDITEM:
      draftState.items.push({
        ...action.payload.item,
        count: action.payload.item.count + 1,
      });
      break;
    case ActionType.INCREMENT:
      if (draftState.items.find((el) => el.id == action.payload.id)) {
        draftState.items.find((el) => {
          if (el.id == action.payload.id) {
            el.count += action.payload.count;
          }
        });
      }
      break;
    case ActionType.DECREMENT:
      draftState.items.map((el) => {
        if (el.id == action.payload.id) {
          el.count -= action.payload.count;
        }
      });
      break;
    default:
      break;
  }
};
