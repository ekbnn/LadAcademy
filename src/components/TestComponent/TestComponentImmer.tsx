import { CounterContext, decrement, increment } from '@/Context/Counter';
import { ChangeEventHandler, useContext, useState } from 'react';

const TestComponentImmer = () => {
  const [value, setValue] = useState<number>(0);
  //после создания контекста необходимо использовать хук useContext
  const { state, dispatch } = useContext(CounterContext);
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

export default TestComponentImmer;
