import { FC } from 'react';
import classes from './ChangeCount.module.scss';

interface ChangeCountProps {
  count: number;
  handleClickUp?: () => void;
  handleClickDown?: () => void;
  color?: 'red' | 'green' | 'yellow';
}

const ChangeCount: FC<ChangeCountProps> = (props) => {
  const { count, handleClickUp, handleClickDown, color } = props;
  const { buttonCount__yellow, buttonCount__green, buttonCount__red } = classes;
  const colorButton =
    color == 'red'
      ? buttonCount__red
      : color == 'yellow'
        ? buttonCount__yellow
        : buttonCount__green;
  return (
    <div className={`${classes.buttonCount} ${colorButton}`}>
      <button
        className={`${classes.buttonUpDown} ${colorButton}`}
        onClick={handleClickUp}
      >
        +
      </button>
      <span>{count}</span>
      <button
        className={`${classes.buttonUpDown} ${colorButton}`}
        onClick={handleClickDown}
      >
        -
      </button>
    </div>
  );
};

export default ChangeCount;
