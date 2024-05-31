import { ActionType } from './types';

export const increment = (value: number) => ({
  type: ActionType.INCREMENT,
  payload: value,
});
export const decrement = (value: number) => ({
  type: ActionType.DECREMENT,
  payload: value,
});
