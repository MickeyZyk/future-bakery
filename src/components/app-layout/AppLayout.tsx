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
                  <HeaderLink className={ location.pathname.includes('Menu') ? `hidden` : '' } onClick={() => set({ logo: 'bakery' })} name="FUTURE BAKERY" to="/Bakery">FUTURE BAKERY</HeaderLink>
                )}
              </ContextConsumer>
            )}
          </Location>          

          <Location>
            {({ location }) => (
              <ContextConsumer>
                {({ data, set }) => (
                  <HeaderLink className={ location.pathname.includes('Menu') ? `hidden` : '' } onClick={() => set({ logo: 'bakers' })} name="FUTURE BAKERS" to="/Bakers">FUTURE BAKERS</HeaderLink>
                )}
              </ContextConsumer>
            )}
          </Location>                  

          <Location>
            {({ location }) => (
              <ContextConsumer>
                {({ data, set }) => (
                  <HeaderLink className={ location.pathname.includes('Menu') ? `hidden` : '' } onClick={() => set({ logo: 'crowders' })} name="FUTURE CROWDERS" to="/Crowders" >FUTURE CROWDERS</HeaderLink>
                )}
              </ContextConsumer>
            )}
          </Location>                  


          <Location>
            {({ location }) => (
              <ContextConsumer>
                {({ data, set }) => (
                  <HeaderLink className={ location.pathname.includes('Menu') ? `white_text white_circle` : '' } name="MENU" 
                  to={ location.pathname == '/' ?  '/BakeryMenu' 
                  : location.pathname == '/Family/' ?   ( location.state != null  ? location.state.prevUrlPath : '/BakeryMenu' )
                  :  location.pathname == '/BakeryMenu' || location.pathname == '/BakersMenu'  || location.pathname == '/CrowdersMenu'   ? ( location.state != null  ? location.state.prevUrlPath : '/BakeryMenu' )
                  :  location.pathname.includes('Bakery') && !( location.pathname == '/BakeryMenu' || location.pathname == '/BakersMenu'  || location.pathname == '/CrowdersMenu') ? '/BakeryMenu' 
                  :  location.pathname.includes('Bakers') && !( location.pathname == '/BakeryMenu' || location.pathname == '/BakersMenu'  || location.pathname == '/CrowdersMenu') ? '/BakersMenu' 
                  :  location.pathname.includes('Crowders') && !( location.pathname == '/BakeryMenu' || location.pathname == '/BakersMenu'  || location.pathname == '/CrowdersMenu') ? '/CrowdersMenu' 
                  :  ( location.state != null  ? location.state.prevUrlPath : '/BakeryMenu' ) } 
                  icon={ ( location.pathname == '/BakeryMenu' || location.pathname == '/BakersMenu' || location.pathname == '/CrowdersMenu') ? <WhiteCircle/> : <Circle />} permanent={true}>                
                    {location.pathname.includes('Menu') ? `CLOSE` : `MENU`}
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
            location.pathname != '/Bakery' && 
            location.pathname != '/Bakery/' &&
            location.pathname != '/Bakers' && 
            location.pathname != '/Bakers/' &&
            location.pathname != '/Crowders' && 
            location.pathname != '/Crowders/' &&
            location.pathname != '/Family' && 
            location.pathname != '/Family/' &&
            location.pathname != '/BakeryMenu' && 
            location.pathname != '/BakeryMenu/' &&
            location.pathname != '/BakersMenu' && 
            location.pathname != '/BakersMenu/' &&
            location.pathname != '/CrowdersMenu' &&  
            location.pathname != '/CrowdersMenu/' &&
            location.pathname != '/'
             
          }>
            <Then>
              <Scrollbar className={s.scrollbar} damping={0.05} renderByPixels={true} alwaysShowTracks={false} syncCallbacks={true}>      
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
