import { PositionCount } from '@/types';
import { ActionType, CartAction } from './typesCart';

export const addItem = (item: PositionCount): CartAction => ({
  type: ActionType.ADDITEM,
  payload: { item },
});

export const setCountCart = (id: number, value: number): CartAction => {
  return {
    type: ActionType.SET,
    payload: { id: id, count: value },
  };
};
