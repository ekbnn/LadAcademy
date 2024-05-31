// описываем типы Reducer
///пропишем интерфейс нашщего сорстояния
export interface CounterType {
  count: number;
}
///Пропишем для типов action перечесление чтоб далее не ошибится
export enum ActionType {
  INCREMENT = 'increment',
  DECREMENT = 'decrement',
}
///пропишим типы action
export type CounterAction =
  | { type: ActionType.INCREMENT; payload: number }
  | { type: ActionType.DECREMENT; payload: number };
