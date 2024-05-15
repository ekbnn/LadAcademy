import { FC, ReactNode } from 'react';

interface RowProps {
  children: ReactNode; //Тип описаный ранее для использования любого props
}
const Row: FC<RowProps> = ({ children }) => {
  return <div style={{ display: 'flex' }}>{children}</div>;
};

export default Row;
