import * as React from 'react';
import { TransitionState } from 'gatsby-plugin-transition-link';
import TransitionLink from 'gatsby-plugin-transition-link'
import { Controller, Scene } from 'react-scrollmagic';

import s from './Footer.scss';

interface IFooterProps {
  children: React.ReactNode;
}

export const Footer = ({ className, delay }: IFooterProps) => (


        <Controller refreshInterval={1}>
          <Scene duration={'300%'} triggerHook={'onEnter'}>

            <div className={s.row}>
              <div className={s.row__one}>
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
              </div>
              <div className={s.row__two}>
                <div className={s.footer}>
                  <div className={s.footer__col4}>
                    <TransitionLink  to="/" className={s.footer__link} exit={{ length: 1 }} entry={{ delay: 0 }}>
                      <p className={`${s.footer__p} ${className}`}>Future Bakery Family</p>
                    </TransitionLink>
                    <TransitionLink  to="/" className={s.footer__link} exit={{ length: 1 }} entry={{ delay: 0 }}>
                      <p className={`${s.footer__p} ${className}`}>Contact</p>
                    </TransitionLink>
                    <TransitionLink  to="/" className={s.footer__link} exit={{ length: 1 }} entry={{ delay: 0 }}>
                      <p className={`${s.footer__p} ${className}`}>Privacy Policy</p>
                    </TransitionLink> 
                  </div>
                </div>
              </div>
              <div className={s.row__three}>
                <div className={s.footer}>
                  <div className={s.footer__col5}>
                      <p className={`${s.footer__s} ${className}`}>&copy; 2019 Future Bakery. All rights reserved.</p>
                  </div>
                  <div className={s.footer__col6}>
                      <p className={`${s.footer__s} ${className}`}>Crafted by Kitchen</p>
                  </div>
                </div>
              </div>
            </div>

          </Scene>
        </Controller>        



);
