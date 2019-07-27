import * as React from 'react';
import ContextConsumer from "utils/Context";
import { Switch, Case, Default } from 'react-if';
import { globalHistory, Location } from "@reach/router"
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

export const Header = ({ children, logo, data, set }: IHeaderProps) => (

  <header className={s.header}>

      <div className={s.header__content}>  

        <ContextConsumer>
          {({ data, set }) => (   

            <TransitionLink to={ location.pathname == '/' ?  '/Bakery'
                  :  location.pathname.includes('Bakery') ? '/Bakery' 
                  :  location.pathname.includes('Bakers') ? '/Bakers' 
                  :  location.pathname.includes('Crowders') ? '/Crowders' 
                  :  '/Bakery' }  onClick={() => set({ menuOpen: !data.menuOpen })} className={s.header__logo} exit={{ length: 1 }} entry={{ delay: 0 }}>

              <Location>
                {({ location }) => (          

                  data.logo == 'bakery' || location.pathname.includes('Bakery') ? <BakeryLogo className={s.header__logo}/>

                  : data.logo == 'bakers' || location.pathname.includes('Bakers') ? <BakersLogo className={s.header__logo}/>

                  : data.logo == 'crowders' || location.pathname.includes('Crowders') ? <CrowdersLogo className={s.header__logo}/>

                  : <BakeryLogo className={s.header__logo}/>
                )}
              </Location>         
              
            </TransitionLink>

          )}   
        </ContextConsumer>   

          <div className={s.header__navigation}>

            {children}

          </div>         

      </div>

  </header>


);
