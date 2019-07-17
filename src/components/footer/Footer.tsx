import * as React from 'react';

import s from './Footer.scss';

interface IFooterProps {
  logo: React.ReactNode;
}

export const Footer = ({ logo }: IFooterProps) => (
  <div className={s.footer}>
    <div className={s.footer__col1}>
      <h2>what</h2>
    </div>
    <div className={s.footer__col2}>
      <h2>what</h2> 
    </div>
    <div className={s.footer__col3}>
      <h2>what</h2> 
    </div>
  </div>
);
