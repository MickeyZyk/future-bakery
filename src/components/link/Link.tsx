import * as React from 'react';
import { Location } from '@reach/router';
import TransitionLink from 'gatsby-plugin-transition-link'
import AniLink from "gatsby-plugin-transition-link/AniLink";

interface ILinkProps {
  children: React.ReactNode;
  to: string;
  [key: string]: any;
}

export const Link = ({ children, state, to, className }: ILinkProps) => {

  return (

    <Location>
      {({ location }) => (      	
          <TransitionLink state={{ prevUrlPath: location.pathname, ...state }}  exit={{ length: 2,
          }} entry={{ length: 2,
          }} to={to} className={className}>        
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