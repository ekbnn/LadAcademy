import { Dispatch, FC, ReactNode, createContext } from 'react';
import { initialState } from './InitialState';
import { CounterAction, CounterType } from './types';
import { useImmerReducer } from 'use-immer';
import { reducer } from './reducer';

interface CounterProviderProps {
  children: ReactNode;
}

export const CounterContext = createContext<{
  state: CounterType;
  dispatch: Dispatch<CounterAction>;
}>({
  state: initialState,
  dispatch: () => {},
});

const CounterProvider: FC<CounterProviderProps> = ({ children }) => {
  const [state, dispatch] = useImmerReducer(reducer, initialState);

  return (
    <CounterContext.Provider value={{ state, dispatch }}>
      {children}
    </CounterContext.Provider>
  );
};

export default CounterProvider;
