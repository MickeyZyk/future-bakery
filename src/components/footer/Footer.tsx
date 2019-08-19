import * as React from 'react';
import { TransitionState } from 'gatsby-plugin-transition-link';
import TransitionLink from 'gatsby-plugin-transition-link'
import { Location } from "@reach/router"

import s from './Footer.scss';

interface IFooterProps {
  children: React.ReactNode;
}

export const Footer = ({ className, delay }: IFooterProps) => (

       <Location>
          {({ location }) => (   

             

            <div className={s.row} style={ 
                location.pathname.includes('bakery') ? { backgroundImage: 'url(/svg/footer_bakery.svg)'} 
              : location.pathname.includes('bakers') ? { backgroundImage: 'url(/svg/footer_bakers.svg)'} 
              : location.pathname.includes('crowders') ? { backgroundImage: 'url(/svg/footer_crowders.svg)'}
              : { backgroundImage: 'url(/svg/footer_bakery.svg)'}
            }>
              <div className={s.row__one}>
                <div className={s.footer}>
                  <div className={s.footer__col1}>
                    <TransitionLink  to="/bakery" className={s.footer__link} exit={{ length: 1 }} entry={{ delay: 0 }}>
                    	<h2 className={`${s.footer__h2} ${className}`}>Future Bakery</h2>
                    </TransitionLink>
                    <TransitionLink  to="/bakery-about" className={s.footer__link} exit={{ length: 1 }} entry={{ delay: 0 }}>
                      <p className={`${s.footer__p} ${className}`}>About us</p>
                    </TransitionLink>
                    <TransitionLink  to="/bakery-work" className={s.footer__link} exit={{ length: 1 }} entry={{ delay: 0 }}>
                    	<p className={`${s.footer__p} ${className}`}>Work</p>
                    </TransitionLink> 
                    <TransitionLink  to="/bakery-work" className={s.footer__link} exit={{ length: 1 }} entry={{ delay: 0 }}>
                      <p className={`${s.footer__p} ${className}`}>Whom we bake with</p>
                    </TransitionLink> 
                  </div>
                  <div className={s.footer__col2}>      
                    <TransitionLink  to="/bakers" className={s.footer__link} exit={{ length: 1 }} entry={{ delay: 0 }}>
                    	<h2 className={`${s.footer__h2} ${className}`}>Future Bakers</h2>
                    </TransitionLink>
                    <TransitionLink  to="/bakers-about" className={s.footer__link} exit={{ length: 1 }} entry={{ delay: 0 }}>
                    	<p className={`${s.footer__p} ${className}`}>About us</p>
                    </TransitionLink>
                    <TransitionLink  to="/bakers-work" className={s.footer__link} exit={{ length: 1 }} entry={{ delay: 0 }}>
                    	<p className={`${s.footer__p} ${className}`}>Work</p>
                    </TransitionLink>
                    <TransitionLink  to="/" className={s.footer__link} exit={{ length: 1 }} entry={{ delay: 0 }}>
                    	<p className={`${s.footer__p} ${className}`}>How we work</p>
                    </TransitionLink>
                  </div>
                  <div className={s.footer__col3}>      
                    <TransitionLink  to="/crowders" className={s.footer__link} exit={{ length: 1 }} entry={{ delay: 0 }}>
                    	<h2 className={`${s.footer__h2} ${className}`}>Future Crowders</h2>
                    </TransitionLink>	
                    <TransitionLink  to="/crowders-about" className={s.footer__link} exit={{ length: 1 }} entry={{ delay: 0 }}>
                      <p className={`${s.footer__p} ${className}`}>About us</p>
                    </TransitionLink>                     
                    <TransitionLink  to="/crowders-work" className={s.footer__link} exit={{ length: 1 }} entry={{ delay: 0 }}>
                    	<p className={`${s.footer__p} ${className}`}>Work</p>
                    </TransitionLink>                
                    <TransitionLink  to="/crowders-work" className={s.footer__link} exit={{ length: 1 }} entry={{ delay: 0 }}>
                    	<p className={`${s.footer__p} ${className}`}>What we do</p>
                    </TransitionLink>
                  </div>
                </div>
              </div>
              <div className={s.row__two}>
                <div className={s.footer}>
                  <div className={s.footer__col4}>
                    <TransitionLink  to="/family" className={s.footer__link} exit={{ length: 1 }} entry={{ delay: 0 }}>
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
                      <p className={`${s.footer__s} ${className}`}>Crafted by MATBOLD</p>
                  </div>
                </div>
              </div>
            </div>



        )}
      </Location> 



);
