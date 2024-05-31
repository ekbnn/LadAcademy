import { ImmerReducer } from 'use-immer';
import { CounterType, CounterAction, ActionType } from './types';

//описываем функцию reducer
export const reducer: ImmerReducer<CounterType, CounterAction> = (
  draftState,
  action,
) => {
  switch (action.type) {
    case ActionType.INCREMENT:
      draftState.count += action.payload;
      break;
    case ActionType.DECREMENT:
      draftState.count -= action.payload;
      break;
    default:
      break;
  }
};
