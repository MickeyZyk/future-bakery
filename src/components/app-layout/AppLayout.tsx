import * as React from 'react';
import { ContextProviderComponent } from "utils/Context";
import { globalHistory, Location } from "@reach/router"
import ContextConsumer from "utils/Context";
import Helmet from 'react-helmet';
import { helmet } from 'utils/helmet';
import { Header } from 'components/header/Header';
import { Footer } from 'components/footer/Footer';
import { Link as HeaderLink } from 'components/header/Link';
import { Devtools } from 'components/devtools/Devtools';
import ReactDOM from 'react-dom';

import Circle from 'assets/svg/circle.svg';
import WhiteCircle from 'assets/svg/white_circle.svg';
import { Controller, Scene } from 'react-scrollmagic';
import { Tween, Controls } from 'react-gsap'
import { Power2 } from "gsap/TweenMax";

import FontUrl01 from "../fonts/bradley_hand_itc_tt_bold-webfont.woff2"
import FontUrl02 from "../fonts/proxima_nova_black-webfont.woff2"
import FontUrl03 from "../fonts/proxima_nova_bold-webfont.woff2"
import FontUrl04 from "../fonts/proxima_nova_light-webfont.woff2"


import s from './AppLayout.scss';

 
interface IAppLayoutProps {
  children: React.ReactNode;
}


export default ({  children, data, set, state, location, ...props }: IAppLayoutProps) => ( 

  <>
      <Devtools />


    <div className={s.layout}>


      <Helmet {...helmet}>
        <link rel="preload" href="../fonts/bradley_webfontkit.css" as="style" />
        <link rel="preload" href="../fonts/proxima-nova-webfontkit.css" as="style" />
        <link rel="preload"
              as="font"
              href="../fonts/bradley_hand_itc_tt_bold-webfont.woff2"
              type="font/woff2"
              crossOrigin="anonymous" />
        <link rel="preload"
              as="font"
              href="../fonts/proxima_nova_black-webfont.woff2"
              type="font/woff2"
              crossOrigin="anonymous" />
        <link rel="preload"
              as="font"
              href="../fonts/proxima_nova_bold-webfont.woff2"
              type="font/woff2"
              crossOrigin="anonymous" />
        <link rel="preload"
              as="font"
              href="../fonts/proxima_nova_light-webfont.woff2"
              type="font/woff2"
              crossOrigin="anonymous" />
      </Helmet>

      <ContextProviderComponent>

        <Header>

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
                  onClick={() => set({ logo: 'bakers' })} name="FUTURE BAKERS" to="/bakers">FUTURE BAKERS</HeaderLink>
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
          
          <Location>
            {({ location }) => (                

              <ContextConsumer>
                {({ data, set }) => (
                  <HeaderLink className={ location.pathname.includes('menu') ? `white_text white_circle` : '' } name="MENU" 
                 
                  to={ 

                  location.pathname == '/' ?  '/bakerymenu'  
                  : location.pathname == '/family/' ?   ( location.state != null  ? location.state.prevUrlPath : '/bakerymenu'  )
                  : location.pathname == '/bakerymenu'  || location.pathname == '/bakersmenu'  || location.pathname == '/crowdersmenu' ? ( location.state != null  ? location.state.prevUrlPath : '/bakerymenu'  )
                  : location.pathname.includes('bakery') && !location.pathname.includes('menu') ? '/bakerymenu'  
                  : location.pathname.includes('bakers') && !location.pathname.includes('menu') ? '/bakersmenu' 
                  : location.pathname.includes('crowders') && !location.pathname.includes('menu') ? '/crowdersmenu' 
                  : ( location.state != null  ? location.state.prevUrlPath : '/bakerymenu' ) 



                  } 

                  icon={ ( location.pathname == '/bakerymenu'  || location.pathname == '/bakersmenu' || location.pathname == '/crowdersmenu') ? <WhiteCircle className="menu_white_svg"/> : <Circle/>} permanent={true}>                
                    {location.pathname.includes('menu') ? `CLOSE` : `MENU`}
                  </HeaderLink>
                )}
              </ContextConsumer> 

            )}
          </Location>               


        </Header>

      </ContextProviderComponent> 

      <div className='fb_linkedin'>
        <a href='https://facebook.com' target='_blank'>FACEBOOK</a><a href='https://linkedin.com' target='_blank'>LINKEDIN</a>
      </div>    
     
      {children}



    </div>





  </>  

);
