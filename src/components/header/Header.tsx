import * as React from 'react';
import ContextConsumer from "utils/Context";
import { Switch, Case, Default } from 'react-if';
import { Link } from 'components/link/Link';
import BakeryLogo from 'assets/svg/bakery-logo.svg';
import BakersLogo from 'assets/svg/bakers-logo.svg';
import CrowdersLogo from 'assets/svg/crowders-logo.svg';
import TransitionLink from 'gatsby-plugin-transition-link';
import { Power2 } from "gsap/TweenMax";
import { Tween } from 'react-gsap';

import s from './Header.scss';

interface IHeaderProps {
  children: React.ReactNode;
}

export const Header = ({ children, logo, data, set}: IHeaderProps) => (



  <header className={s.header}>
      <div className={s.header__content}>

    


          <TransitionLink to="/" className={s.header__logo} exit={{ length: 1 }} entry={{ delay: 1 }}>

            <ContextConsumer>
              {({ data, set }) => (
                data.logo == 'bakery' ? 




                          <BakeryLogo className={s.header__logo}/>




                     
                : null
              )}   
            </ContextConsumer> 
            <ContextConsumer>
              {({ data, set }) => (
                data.logo == 'bakers' ? 
                <BakersLogo className={s.header__logo}/>
                : null
              )}   
            </ContextConsumer> 
            <ContextConsumer>
              {({ data, set }) => (
                data.logo == 'crowders' ?
                <CrowdersLogo className={s.header__logo}/>
                : null
              )}   
            </ContextConsumer> 
            <ContextConsumer>
              {({ data, set }) => (
                data.logo == '' ?
                <BakeryLogo className={s.header__logo}/>
                : null
              )}   
            </ContextConsumer>           
            
          </TransitionLink>

          <div className={s.header__navigation}>
            {children}
          </div>



          

      </div>
  </header>




);
