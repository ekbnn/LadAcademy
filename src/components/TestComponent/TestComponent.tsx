import { ChangeEventHandler, Reducer, useReducer, useState } from 'react';

// описываем типы Reducer
///пропишем интерфейс нашего сорстояния
interface CounterType {
  count: number;
}
///Пропишем для типов action перечесление чтоб далее не ошибится
enum ActionType {
  INCREMENT = 'increment',
  DECREMENT = 'decrement',
}
///пропишим типы action
type CounterAction =
  | { type: ActionType.INCREMENT; payload: number }
  | { type: ActionType.DECREMENT; payload: number };

//описываем функцию reducer
const reducer: Reducer<CounterType, CounterAction> = (state, action) => {
  switch (action.type) {
    case ActionType.INCREMENT:
      return { count: state.count + action.payload };
    case ActionType.DECREMENT:
      return { count: state.count - action.payload };
    default:
      return state; //зачем мы указали дефолтное значение текущее состояние ? перерендера же не будет
  }
};

//вынесем начальное состояние в переменную
const initialState: CounterType = { count: 0 };

//Создаем вспомогательные функции для формирования объекта и передачи в dispatch
const increment = (value: number) => ({
  type: ActionType.INCREMENT,
  payload: value,
});
const decrement = (value: number) => ({
  type: ActionType.DECREMENT,
  payload: value,
});

const TestComponent = () => {
  const [value, setValue] = useState<number>(0);
  const [state, dispatch] = useReducer(reducer, initialState);
  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) =>
    setValue(+event.target.value);
  const handleIncrementClick = () => {
    dispatch(increment(value));
  };
  const handleDecrementClick = () => {
    dispatch(decrement(value));
  };

  return (
    <div>
      <p>{state.count}</p>
      <input type="number" onChange={handleChange} />
      <button onClick={handleIncrementClick}>+</button>
      <button onClick={handleDecrementClick}>-</button>
    </div>
  );
};

export default TestComponent;
