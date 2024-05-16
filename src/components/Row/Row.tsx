import { FC, ReactNode } from 'react';
import classes from './Row.module.scss';

interface RowProps {
  children: ReactNode; //Тип описаный ранее для использования любого props
}
const Row: FC<RowProps> = ({ children }) => {
  return <div className={classes.page}>{children}</div>;
};

export default Row;
