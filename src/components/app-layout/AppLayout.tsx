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
import SmoothScrollbar from 'smooth-scrollbar';
import Scrollbar from 'react-smooth-scrollbar';
import Circle from 'assets/svg/circle.svg';
import WhiteCircle from 'assets/svg/white_circle.svg';
import { If, Then, Else } from 'react-if'
import { Controller, Scene } from 'react-scrollmagic';
import { Tween, Controls } from 'react-gsap'
import { Power2 } from "gsap/TweenMax";

import s from './AppLayout.scss';

 
interface IAppLayoutProps {
  children: React.ReactNode;
}


/*
globalHistory.listen(({ location }) => {
  if (location.pathname.includes('Bakery') || location.pathname.includes('bakery')){

    console.log("BAKERYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYY")
  }; 
})
*/
/* remove in production */
//const isDev = process.env.NODE_ENV === 'development';
const isDev = true;

function callback(){
  console.log('BOTTOM');
}


export default ({ children, data, set, state, location, ...props }: IAppLayoutProps) => ( 

  <>

    <div className={s.layout}>

      <Helmet {...helmet} />

      <ContextProviderComponent>

        <Header>

          <Location>
            {({ location }) => (
              <ContextConsumer>
                {({ data, set  }) => (
                  <HeaderLink className={ location.pathname.includes('Menu') ? 'hidden' : location.pathname.includes('bakery') || location.pathname == '/' ? 'active' : ''} onClick={() => set({ logo: 'bakery' })} name="FUTURE BAKERY" to="/bakery">FUTURE BAKERY</HeaderLink>
                )}
              </ContextConsumer>
            )}
          </Location>          

          <Location>
            {({ location }) => (
              <ContextConsumer>
                {({ data, set }) => (
                  <HeaderLink className={ location.pathname.includes('Menu') ? 'hidden' : location.pathname.includes('bakers') ? 'active' : '' } onClick={() => set({ logo: 'bakers' })} name="FUTURE BAKERS" to="/bakers">FUTURE BAKERS</HeaderLink>
                )}
              </ContextConsumer>
            )}
          </Location>                  

          <Location>
            {({ location }) => (
              <ContextConsumer>
                {({ data, set }) => (
                  <HeaderLink className={ location.pathname.includes('Menu') ? 'hidden' : location.pathname.includes('crowders') ? 'active' : '' } onClick={() => set({ logo: 'crowders' })} name="FUTURE CROWDERS" to="/crowders" >FUTURE CROWDERS</HeaderLink>
                )}
              </ContextConsumer>
            )}
          </Location>                  


          <Location>
            {({ location }) => (
              <ContextConsumer>
                {({ data, set }) => (
                  <HeaderLink className={ location.pathname.includes('menu') ? `white_text white_circle` : '' } name="MENU" 
                  to={ location.pathname == '/' ?  '/bakerymenu'  
                  : location.pathname == '/family/' ?   ( location.state != null  ? location.state.prevUrlPath : '/bakerymenu'  )
                  :  location.pathname == '/bakerymenu'  || location.pathname == '/bakersmenu'  || location.pathname == '/crowdersmenu'   ? ( location.state != null  ? location.state.prevUrlPath : '/bakerymenu'  )
                  :  location.pathname.includes('bakery') && !( location.pathname == '/bakerymenu'  || location.pathname == '/bakersmenu'  || location.pathname == '/crowdersmenu') ? '/bakerymenu'  
                  :  location.pathname.includes('bakers') && !( location.pathname == '/bakerymenu'  || location.pathname == '/bakersmenu'  || location.pathname == '/crowdersmenu') ? '/bakersmenu' 
                  :  location.pathname.includes('crowders') && !( location.pathname == '/bakerymenu'  || location.pathname == '/bakersmenu'  || location.pathname == '/crowdersmenu') ? '/crowdersmenu' 
                  :  ( location.state != null  ? location.state.prevUrlPath : '/bakerymenu'  ) } 
                  icon={ ( location.pathname == '/bakerymenu'  || location.pathname == '/bakersmenu' || location.pathname == '/crowdersmenu') ? <WhiteCircle/> : <Circle />} permanent={true}>                
                    {location.pathname.includes('menu') ? `CLOSE` : `MENU`}
                  </HeaderLink>
                )}
              </ContextConsumer> 
            )}
          </Location>

        </Header>

      </ContextProviderComponent> 

      <div className='fb_linkedin'>
        <a href='https://facebook.com' target='_blank'>FACEBOOK</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href='https://linkedin.com' target='_blank'>LINKEDIN</a>
      </div>

      <Location>
        {({ location }) => (        
          <If condition={ 
            location.pathname != '/bakery' && 
            location.pathname != '/bakery/' &&
            location.pathname != '/bakers' && 
            location.pathname != '/bakers/' &&
            location.pathname != '/crowders' && 
            location.pathname != '/crowders/' &&
            location.pathname != '/family' && 
            location.pathname != '/family/' &&
            location.pathname != '/bakerymenu'  && 
            location.pathname != '/bakerymenu/' &&
            location.pathname != '/bakersmenu' && 
            location.pathname != '/bakersmenu/' &&
            location.pathname != '/crowdersmenu' &&  
            location.pathname != '/crowdersmenu/' &&
            location.pathname != '/'
             
          }>
            <Then>
              <Scrollbar className={s.scrollbar} damping={0.1} renderByPixels={true} alwaysShowTracks={false} syncCallbacks={true}>      
                {children}
              </Scrollbar>
              <Controller refreshInterval={1}>
                <Scene duration={'100%'} triggerHook={'onEnter'}>
                  <Tween from={{css: {zIndex: 0} }} to={{css: {zIndex: 1} }}>
                    <div><Footer/></div>
                  </Tween>
                </Scene>
              </Controller>
            </Then>
            <Else>
              {children}          
            </Else>
          </If>
        )}
      </Location>

      {isDev && <Devtools />}

    </div>

  </>  

);
