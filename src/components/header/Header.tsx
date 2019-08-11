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

export const Header = ({ children, logo, data, set, location, ...props }: IHeaderProps) => (

  <header className={s.header}>

      <div className={s.header__content}>  

        <ContextConsumer>
          {({ data, set }) => (   


              <Location>
                {({ location }) => (              

            <TransitionLink to={ location.pathname == '/' ?  '/bakery'
                  :  location.pathname.includes('bakery') ? '/bakery' 
                  :  location.pathname.includes('bakers') ? '/bakers' 
                  :  location.pathname.includes('crowders') ? '/crowders' 
                  :  '/bakery' }  onClick={() => set({ menuOpen: !data.menuOpen })} className={s.header__logo} exit={{ length: 1 }} entry={{ length: 1 }}>

   

                 { data.logo == 'bakery' || location.pathname.includes('bakery') || location.pathname == '/' ? <BakeryLogo className={s.header__logo}/>

                  : data.logo == 'bakers' || location.pathname.includes('bakers') ? <BakersLogo className={s.header__logo}/>

                  : data.logo == 'crowders' || location.pathname.includes('crowders') ? <CrowdersLogo className={s.header__logo}/>

                  : <BakeryLogo className={s.header__logo}/>}
       
              
            </TransitionLink>


                )}
              </Location>  
            

          )}   
        </ContextConsumer>   

          <div className={s.header__navigation}>

            {children}

          </div>         

      </div>

  </header>


);
