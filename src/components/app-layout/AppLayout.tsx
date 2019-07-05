import * as React from 'react';
import { ContextProviderComponent } from "utils/Context";
import ContextConsumer from "utils/Context";
import Helmet from 'react-helmet';
import { helmet } from 'utils/helmet';
import { Header } from 'components/header/Header';
import { Link as HeaderLink } from 'components/header/Link';
import { Footer } from 'components/footer/Footer';
import { Devtools } from 'components/devtools/Devtools';
import ReactDOM from 'react-dom';
import SmoothScrollbar from 'smooth-scrollbar';
import Scrollbar from 'react-smooth-scrollbar';
import Circle from 'assets/svg/circle.svg';
import s from './AppLayout.scss';
 
interface IAppLayoutProps {
  children: React.ReactNode;
}

/* remove in production */
//const isDev = process.env.NODE_ENV === 'development';
const isDev = true;

export default ({ children }: IAppLayoutProps) => ( 

    <div className={s.layout}>

      <Helmet {...helmet} />

      <ContextProviderComponent>

        <Header>

          <ContextConsumer>
            {({ data, set }) => (
              <HeaderLink name="FUTURE BAKERY" to="/" >
                <div onClick={() => set({ logo: 'bakery' })}>FUTURE BAKERY</div>
              </HeaderLink>
            )}
          </ContextConsumer>
          <ContextConsumer>
            {({ data, set }) => (
              <HeaderLink name="FUTURE BAKERS" to="/bakers" >
                <div onClick={() => set({ logo: 'bakers' })}>FUTURE BAKERS</div>
              </HeaderLink>
            )}
          </ContextConsumer>
          <ContextConsumer>
            {({ data, set }) => (
              <HeaderLink name="FUTURE CROWDERS" to="/crowders" >
                <div onClick={() => set({ logo: 'crowders' })}>FUTURE CROWDERS</div>
              </HeaderLink>
            )}
          </ContextConsumer>

          <HeaderLink name="MENU" to="/" icon={<Circle />} permanent={true}>MENU</HeaderLink>      

        </Header>

      </ContextProviderComponent> 

      <Scrollbar className={s.scrollbar} damping={0.05} renderByPixels={true} alwaysShowTracks={true}>      
        {children}
      </Scrollbar>

      {isDev && <Devtools />}

    </div>


);
