import { FC, createContext, useState } from 'react';

export type ThemeVariable = 'light' | 'dark';

//Функция контекста и указание начальных значений
interface ThemeContextState {
  theme: ThemeVariable;
  setTheme: React.Dispatch<React.SetStateAction<ThemeVariable>>;
}

const initialState: ThemeContextState = {
  theme: 'light',
  setTheme: () => {},
};
export const ThemeContext = createContext<ThemeContextState>(initialState);

interface ThemeProviderProps {
  children: React.ReactNode;
}
const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<ThemeVariable>('light');
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
