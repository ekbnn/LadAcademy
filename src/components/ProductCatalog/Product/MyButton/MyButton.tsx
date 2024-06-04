import { FC, ReactNode } from 'react';
import classes from './MyButton.module.scss';

interface MyButtonProps {
  onClickAction: () => void;
  children: ReactNode;
  color?: 'red' | 'green' | 'yellow';
}

const MyButton: FC<MyButtonProps> = (props) => {
  const { onClickAction, children, color } = props;
  const { button__yellow, button__green, button__red } = classes;
  const colorButton =
    color == 'red'
      ? button__red
      : color == 'yellow'
        ? button__yellow
        : button__green;
  return (
    <button
      className={`${classes.button} ${colorButton}`}
      onClick={onClickAction}
    >
      {children}
    </button>
  );
};

//TODO::Сделать children и type

export default MyButton;
