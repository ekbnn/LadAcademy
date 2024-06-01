import { PositionCount } from '@/types';

export interface CartType {
  items: PositionCount[];
  totalPrice: number;
}

///Пропишем для типов action перечесление чтоб далее не ошибится
export enum ActionType {
  INCREMENT = 'increment',
  DECREMENT = 'decrement',
  DELLALL = 'dellall',
  DELLITEM = 'dellitem',
  ADDITEM = 'additem',
}

//export type ActionType = 'increment' | 'decrement' | 'additem';

///пропишим типы action
export type CartAction =
  | { type: ActionType.INCREMENT; payload: { id: number; count: number } }
  | { type: ActionType.DECREMENT; payload: { id: number; count: number } }
  | { type: ActionType.ADDITEM; payload: { item: PositionCount } };
