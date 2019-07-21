import * as React from 'react';
import { Location } from '@reach/router';
import TransitionLink from 'gatsby-plugin-transition-link'
import AniLink from "gatsby-plugin-transition-link/AniLink";

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
        }} entry={{ length: 1,
        }} {...props} >        
          {children}
        </TransitionLink>  


        )}
    </Location>  

  );
};

/*

        <AniLink cover direction="up" bg="#663399" state={{ prevUrlPath: location.pathname, ...state }} exit={{ length: 2, }} entry={{ length: 2, }} {...props} >        
          {children}
        </AniLink>  

        */