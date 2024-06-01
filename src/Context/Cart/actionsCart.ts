import { PositionCount } from '@/types';
import { ActionType } from './typesCart';

export const incrementCart = (id: number, value: number) => {
  return {
    type: ActionType.INCREMENT,
    payload: { id: id, count: value },
  };
};
export const decrementCart = (id: number, value: number) => {
  return {
    type: ActionType.DECREMENT,
    payload: { id: id, count: value },
  };
};

export const addItem = (item: PositionCount) => ({
  type: ActionType.ADDITEM,
  payload: { item },
});
