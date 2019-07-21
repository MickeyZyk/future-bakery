import * as React from 'react';
import { Location } from '@reach/router';
import TransitionLink from 'gatsby-plugin-transition-link'

interface ILinkProps {
  children: React.ReactNode;
  to: string;
  [key: string]: any;
}

export const Link = ({ children, state, ...props }: ILinkProps) => {

  return (

    <Location>
      {({ location }) => (      	

			  <TransitionLink state={{ prevUrlPath: location.pathname, ...state }}  exit={{ length: 1,
        /*trigger: () =>
          document.querySelector('.scroll-content').style.transform = 'translate3d(0px,0px,0px)'*/
        }} entry={{ length: 1,
        /*trigger: () =>
          document.querySelector('.scroll-content').style.transform = 'translate3d(0px,0px,0px)'*/
        }} {...props} >        
			    {children}
			  </TransitionLink>  

        )}
    </Location>  

  );
};

