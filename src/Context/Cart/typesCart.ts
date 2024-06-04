import { PositionCount } from '@/types';

export interface CartType {
  items: PositionCount[];
  totalPrice: number;
}

///Пропишем для типов action перечесление чтоб далее не ошибится
export enum ActionType {
  ADDITEM = 'additem',
  SET = 'set',
}

//export type ActionType = 'increment' | 'decrement' | 'additem';

///пропишим типы action
export type CartAction =
  | { type: ActionType.ADDITEM; payload: { item: PositionCount } }
  | { type: ActionType.SET; payload: { id: number; count: number } };
