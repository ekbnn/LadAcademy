import { FC } from 'react';
import classes from './ChangeCount.module.scss';

interface ChangeCountProps {
  count: number | undefined;
  onClickAtionUp: () => void;
  onClickAtionDown?: () => void;
  color?: 'red' | 'green' | 'yellow';
}

const ChangeCount: FC<ChangeCountProps> = (props) => {
  const { count, onClickAtionUp, onClickAtionDown, color } = props;
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
        onClick={onClickAtionUp}
      >
        +
      </button>
      <span>{count}</span>
      <button
        className={`${classes.buttonUpDown} ${colorButton}`}
        onClick={onClickAtionDown}
      >
        -
      </button>
    </div>
  );
};

export default ChangeCount;
