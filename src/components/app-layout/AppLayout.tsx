import * as React from 'react';
import { ContextProviderComponent } from "utils/Context";
import ContextConsumer from "utils/Context";
import Helmet from 'react-helmet';
import { helmet } from 'utils/helmet';
import { Header } from 'components/header/Header';
import { Footer } from 'components/footer/Footer';
import { Link as HeaderLink } from 'components/header/Link';
import { Devtools } from 'components/devtools/Devtools';
import ReactDOM from 'react-dom';
import { globalHistory, Location } from "@reach/router"
import { If, Then, Else, Switch, Case, Default } from 'react-if'
import Circle from 'assets/svg/circle.svg';
import WhiteCircle from 'assets/svg/white_circle.svg';
import { Controller, Scene } from 'react-scrollmagic';
import { Tween, Controls } from 'react-gsap'
import { Power2 } from "gsap/TweenMax";

import FontUrl01 from "/fonts/bradley_hand_itc_tt_bold-webfont.woff2"
import FontUrl02 from "/fonts/proxima_nova_black-webfont.woff2"
import FontUrl03 from "/fonts/proxima_nova_bold-webfont.woff2"
import FontUrl04 from "/fonts/proxima_nova_light-webfont.woff2"


import s from './AppLayout.scss';

 
interface IAppLayoutProps {
  children: React.ReactNode;
}


export default ({ children, data, set, state, location, ...props }: IAppLayoutProps) => ( 

  <>




    <div className={s.layout}>


      <Helmet {...helmet}>
        <link rel="preload" href="/fonts/bradley_webfontkit.css" as="style" />
        <link rel="preload" href="/fonts/proxima-nova-webfontkit.css" as="style" />
        <link rel="preload"
              as="font"
              href="/fonts/bradley_hand_itc_tt_bold-webfont.woff2"
              type="font/woff2"
              crossOrigin="anonymous" />
        <link rel="preload"
              as="font"
              href="/fonts/proxima_nova_black-webfont.woff2"
              type="font/woff2"
              crossOrigin="anonymous" />
        <link rel="preload"
              as="font"
              href="/fonts/proxima_nova_bold-webfont.woff2"
              type="font/woff2"
              crossOrigin="anonymous" />
        <link rel="preload"
              as="font"
              href="/fonts/proxima_nova_light-webfont.woff2"
              type="font/woff2"
              crossOrigin="anonymous" />
 
      </Helmet>

      <ContextProviderComponent>

 
         <Location>
            {({ location }) => (   
                <>

              <If condition={location.pathname.includes('bakers') && !location.pathname.includes('cz')}>

                <Then>

                <ContextConsumer>
                  {({ data, set  }) => (
                    <HeaderLink 
                    className={ 'submenu_link switcher_link'} style={ location.pathname.includes('menu') ? {color:'#fff'} : {color:'#231f20'}} 
                    onClick={() => set({ logo: 'bakers' })} name="FUTURE BAKERY" to="/czbakers">CZ / <span className="bold">EN</span></HeaderLink>
                  )}
                </ContextConsumer>

                </Then>

              </If>

              <If condition={location.pathname.includes('czbakers')}>

                <Then>

                <ContextConsumer>
                  {({ data, set  }) => (
                    <HeaderLink 
                    className={ 'submenu_link switcher_link'} style={ location.pathname.includes('menu') ? {color:'#fff'} : {color:'#231f20'}} 
                    onClick={() => set({ logo: 'bakers' })} name="FUTURE BAKERY" to="/bakers"><span className="bold">CZ</span> / EN</HeaderLink>
                  )}
                </ContextConsumer>

                </Then>

              </If>              

              </>
            )}
          </Location> 

      </ContextProviderComponent>
        <Header>

      <ContextProviderComponent>
           <Location>
            {({ location }) => (          

              <ContextConsumer>
                {({ data, set  }) => (
                  <HeaderLink 
                  className={ 
                    location.pathname.includes('menu') ? 'hidden' 
                    : location.pathname.includes('bakery') || location.pathname == '/' ? 'active bakery_header_menu_link submenu_link' 
                    : location.pathname.includes('bakers') ? 'bakers_header_menu_link submenu_link' 
                    : location.pathname.includes('crowders') ? 'crowders_header_menu_link submenu_link'  
                    : 'submenu_link'
                  } 
                  onClick={() => set({ logo: 'bakery' })} name="FUTURE BAKERY" to="/bakery">FUTURE BAKERY</HeaderLink>
                )}
              </ContextConsumer>

            )}
          </Location>  
          
          <Location>
            {({ location }) => (    
  
              <ContextConsumer>
                {({ data, set }) => (
                  <HeaderLink
                    className={ 
                    location.pathname.includes('menu') ? 'hidden' 
                    : location.pathname.includes('bakers') ? 'active bakers_header_menu_link submenu_link' 
                    : location.pathname.includes('bakery') ? 'bakery_header_menu_link submenu_link' 
                    : location.pathname.includes('crowders') ? 'crowders_header_menu_link submenu_link'  
                    : 'submenu_link'
                  } 
                  onClick={() => set({ logo: 'bakers' })} name="FUTURE BAKERS" to={ location.pathname.includes('cz') ? "/czbakers" : "/bakers" }>FUTURE BAKERS</HeaderLink>
                )}
              </ContextConsumer>


            )}
          </Location>  
          
          <Location>
            {({ location }) => (                

              <ContextConsumer>
                {({ data, set }) => (
                  <HeaderLink 
                    className={ 
                    location.pathname.includes('menu') ? 'hidden' 
                    : location.pathname.includes('crowders') ? 'active crowders_header_menu_link submenu_link' 
                    : location.pathname.includes('bakery') ? 'bakery_header_menu_link submenu_link' 
                    : location.pathname.includes('bakers') ? 'bakers_header_menu_link submenu_link'  
                    : 'submenu_link'
                  }                   
                  onClick={() => set({ logo: 'crowders' })} name="FUTURE CROWDERS" to="/crowders" >FUTURE CROWDERS</HeaderLink>
                )}
              </ContextConsumer>


            )}
          </Location>  
          
      </ContextProviderComponent> 

          <Location>
            {({ location, state }) => (                


                  <HeaderLink className={ location.pathname.includes('menu') || location.pathname.includes('family') ? `white_text white_circle` : '' } name="MENU" 
                 
                  to={ 

                    location.pathname === '/' ?  '/menu'  
                    : ( location.pathname.includes('czbakers') && !location.pathname.includes('menu')) ? '/czbakersmenu'                   
                    : location.state != null  ? location.state.prevUrlPath 
                    : '/menu'

                  } 

                  icon={ location.pathname.includes('menu') ? <WhiteCircle className="menu_white_svg"/> : <Circle/>} permanent={true}>                
                    {location.pathname.includes('menu') ? `CLOSE` : `MENU`}
                  </HeaderLink>


            )}
          </Location>               


        </Header>



      <div className='fb_linkedin'>
        <a href='https://facebook.com' target='_blank'>FACEBOOK</a><a href='https://linkedin.com' target='_blank'>LINKEDIN</a>
      </div>    
     
      {children}



    </div>





  </>  

);
