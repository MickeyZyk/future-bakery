import * as React from 'react';
import TransitionLink from 'gatsby-plugin-transition-link'

import s from './Footer.scss';

interface IFooterProps {
  children: React.ReactNode;
}

export const Footer = ({ className, delay }: IFooterProps) => (
  <div className={s.footer}>
    <div className={s.footer__col1}>
      <TransitionLink  to="/" className={s.footer__link} exit={{ length: 1 }} entry={{ delay: 0 }}>
      	<h2 className={`${s.footer__h2} ${className}`}>Future Bakery</h2>
      </TransitionLink>
      <TransitionLink  to="/" className={s.footer__link} exit={{ length: 1 }} entry={{ delay: 0 }}>
      	<p className={`${s.footer__p} ${className}`}>Work</p>
      </TransitionLink>
      <TransitionLink  to="/" className={s.footer__link} exit={{ length: 1 }} entry={{ delay: 0 }}>
      	<p className={`${s.footer__p} ${className}`}>About us</p>
      </TransitionLink>
      <TransitionLink  to="/" className={s.footer__link} exit={{ length: 1 }} entry={{ delay: 0 }}>
      	<p className={`${s.footer__p} ${className}`}>Whom we bake with</p>
      </TransitionLink>       
      <TransitionLink  to="/" className={s.footer__link__padd} exit={{ length: 1 }} entry={{ delay: 0 }}>
      	<p className={`${s.footer__p} ${className}`}>Future Bakery Family</p>
      </TransitionLink>
      <TransitionLink  to="/" className={s.footer__link} exit={{ length: 1 }} entry={{ delay: 0 }}>
      	<p className={`${s.footer__p} ${className}`}>Contact</p>
      </TransitionLink>
      <TransitionLink  to="/" className={s.footer__link} exit={{ length: 1 }} entry={{ delay: 0 }}>
      	<p className={`${s.footer__p} ${className}`}>Privacy Policy</p>
      </TransitionLink> 
    </div>
    <div className={s.footer__col2}>      
      <TransitionLink  to="/" className={s.footer__link} exit={{ length: 1 }} entry={{ delay: 0 }}>
      	<h2 className={`${s.footer__h2} ${className}`}>Future Bakers</h2>
      </TransitionLink>
      <TransitionLink  to="/" className={s.footer__link} exit={{ length: 1 }} entry={{ delay: 0 }}>
      	<p className={`${s.footer__p} ${className}`}>Work</p>
      </TransitionLink>
      <TransitionLink  to="/" className={s.footer__link} exit={{ length: 1 }} entry={{ delay: 0 }}>
      	<p className={`${s.footer__p} ${className}`}>Who we are</p>
      </TransitionLink>
      <TransitionLink  to="/" className={s.footer__link} exit={{ length: 1 }} entry={{ delay: 0 }}>
      	<p className={`${s.footer__p} ${className}`}>How we work</p>
      </TransitionLink>
    </div>
    <div className={s.footer__col3}>      
      <TransitionLink  to="/" className={s.footer__link} exit={{ length: 1 }} entry={{ delay: 0 }}>
      	<h2 className={`${s.footer__h2} ${className}`}>Future Crowders</h2>
      </TransitionLink>	
      <TransitionLink  to="/" className={s.footer__link} exit={{ length: 1 }} entry={{ delay: 0 }}>
      	<p className={`${s.footer__p} ${className}`}>About us</p>
      </TransitionLink>
      <TransitionLink  to="/" className={s.footer__link} exit={{ length: 1 }} entry={{ delay: 0 }}>
      	<p className={`${s.footer__p} ${className}`}>What we do</p>
      </TransitionLink>
      <TransitionLink  to="/" className={s.footer__link} exit={{ length: 1 }} entry={{ delay: 0 }}>
      	<p className={`${s.footer__p} ${className}`}>Projects</p>
      </TransitionLink>
    </div>
  </div>
);
