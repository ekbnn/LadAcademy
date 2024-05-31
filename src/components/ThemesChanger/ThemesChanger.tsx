import { ThemeContext, ThemeVariable } from '@/Context';
import { ChangeEventHandler, useContext } from 'react';

const ThemesChanger = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const handleSetTheme: ChangeEventHandler<HTMLInputElement> = (event) => {
    setTheme(event.target.value as ThemeVariable);
  };
  return (
    <div>
      <p>Сейчас установлена {theme}</p>
      <label>
        <input
          type="radio"
          name="theme"
          id="theme-light"
          value="lithe"
          onChange={handleSetTheme}
        />{' '}
        Светлая тема
      </label>
      <label>
        <input
          type="radio"
          name="theme"
          id="theme-dark"
          value="dark"
          onChange={handleSetTheme}
        />{' '}
        Темная тема
      </label>
    </div>
  );
};

export default ThemesChanger;
