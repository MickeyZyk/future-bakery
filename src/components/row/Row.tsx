import * as React from 'react';

import s from './Row.scss';

interface IRowProps {
  children: React.ReactNode;
  className: string;
}

export const Row = ({ children, className, ...props }: IRowProps) => (
  <div className={`${s.row} ${props.className ? props.className : ''}`}>
    {children}
  </div>
);
