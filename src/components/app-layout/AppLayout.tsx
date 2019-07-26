import * as React from 'react';
import { ContextProviderComponent } from "utils/Context";
import { globalHistory } from "@reach/router"
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
import { Location } from '@reach/router';


import s from './AppLayout.scss';
 
interface IAppLayoutProps {
  children: React.ReactNode;
}

globalHistory.listen(({ location }) => {
  if (location.pathname.includes('Bakery') || location.pathname.includes('bakery')){

    console.log("BAKERYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYY")
  }; 
})

/* remove in production */
//const isDev = process.env.NODE_ENV === 'development';
const isDev = true;

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
                  <HeaderLink className={ location.pathname == '/BakeryMenu' ? `hidden` : '' } onClick={() => set({ logo: 'bakery' })} name="FUTURE BAKERY" to="/">FUTURE BAKERY</HeaderLink>
                )}
              </ContextConsumer>
            )}
          </Location>          

          <Location>
            {({ location }) => (
              <ContextConsumer>
                {({ data, set }) => (
                  <HeaderLink className={ location.pathname == '/BakeryMenu' ? `hidden` : '' } onClick={() => set({ logo: 'bakers' })} name="FUTURE BAKERS" to="/bakers">FUTURE BAKERS</HeaderLink>
                )}
              </ContextConsumer>
            )}
          </Location>                  

          <Location>
            {({ location }) => (
              <ContextConsumer>
                {({ data, set }) => (
                  <HeaderLink className={ location.pathname == '/BakeryMenu' ? `hidden` : '' } onClick={() => set({ logo: 'crowders' })} name="FUTURE CROWDERS" to="/crowders" >FUTURE CROWDERS</HeaderLink>
                )}
              </ContextConsumer>
            )}
          </Location>                  


          <Location>
            {({ location }) => (
              <ContextConsumer>
                {({ data, set }) => (
                  <HeaderLink className={ location.pathname == '/BakeryMenu' ? `white_text white_circle` : '' } name="MENU" to={location.pathname == '/BakeryMenu' ? location.state.prevUrlPath : `/BakeryMenu`} icon={location.pathname == '/BakeryMenu' || location.pathname == '/BakersMenu' || location.pathname == '/CrowdersMenu'? <WhiteCircle/> : <Circle />} permanent={true}>                
                    {location.pathname == '/BakeryMenu' ? ` CLOSE` : `MENU`}
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

      <Scrollbar className={s.scrollbar} damping={0.05} renderByPixels={true} alwaysShowTracks={false} >      
        {children}
      </Scrollbar>

      {isDev && <Devtools />}

    </div>


  </>  

);
