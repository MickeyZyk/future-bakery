import * as React from 'react';

import s from './Footer.scss';

interface IFooterProps {
  logo: React.ReactNode;
}

export const Footer = ({ logo }: IFooterProps) => (
  <div className={s.footer}>
    <div className={s.footer__logo}>
      {logo} 
    </div>
  </div>
);
