import * as React from 'react';
import TransitionLink from 'gatsby-plugin-transition-link'

import s from './Footer.scss';

interface IFooterProps {
  children: React.ReactNode;
}

export const Footer = ({ children, className, delay }: IFooterProps) => (
  <div className={s.footer}>
    <div className={s.footer__col1}>
      <TransitionLink  to="/" className={s.footer__col1} exit={{ length: 1 }} entry={{ delay: 0 }}>
      	<h2 className={`${s.footer__col1} ${className}`}>{children}</h2>
      </TransitionLink>
    </div>
    <div className={s.footer__col2}>      
      <TransitionLink  to="/" className={s.footer__col2} exit={{ length: 1 }} entry={{ delay: 0 }}>
      	<h2 className={`${s.footer__col2} ${className}`}>{children}</h2>
      </TransitionLink>
    </div>
    <div className={s.footer__col3}>      
      <TransitionLink  to="/" className={s.footer__col3} exit={{ length: 1 }} entry={{ delay: 0 }}>
      	<h2 className={`${s.footer__col3} ${className}`}>{children}</h2>
      </TransitionLink>
    </div>
  </div>
);
