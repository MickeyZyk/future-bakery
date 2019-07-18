import * as React from 'react';
import { ContextProviderComponent } from "utils/Context";
import ContextConsumer from "utils/Context";
import Helmet from 'react-helmet';
import { helmet } from 'utils/helmet';
import { Header } from 'components/header/Header';
import { Link as HeaderLink } from 'components/header/Link';
import { Devtools } from 'components/devtools/Devtools';
import ReactDOM from 'react-dom';
import SmoothScrollbar from 'smooth-scrollbar';
import Scrollbar from 'react-smooth-scrollbar';
import Circle from 'assets/svg/circle.svg';
import WhiteCircle from 'assets/svg/white_circle.svg';
import { Location } from '@reach/router';
import { Footer } from 'components/footer/Footer';

import s from './AppLayout.scss';
 
interface IAppLayoutProps {
  children: React.ReactNode;
}

/* remove in production */
//const isDev = process.env.NODE_ENV === 'development';
const isDev = true;

export default ({ children, data, set, state, location, ...props }: IAppLayoutProps) => ( 

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
                  <HeaderLink className={ location.pathname == '/BakeryMenu' ? `white_text` : '' } name="MENU" to={location.pathname == '/BakeryMenu' ? location.state.prevUrlPath : `/BakeryMenu`} icon={location.pathname == '/BakeryMenu' ? <WhiteCircle /> : <Circle />} permanent={true}>                
                    {location.pathname == '/BakeryMenu' ? ` CLOSE` : `MENU`}
                  </HeaderLink>
                )}
              </ContextConsumer> 
            )}
          </Location>

        </Header>

      </ContextProviderComponent> 

      <Scrollbar className={s.scrollbar} damping={0.05} renderByPixels={true} alwaysShowTracks={true}>      
        {children}

      </Scrollbar>

      {isDev && <Devtools />}



    </div>


);
