import * as React from 'react';
import { Location } from '@reach/router';
import TransitionLink from 'gatsby-plugin-transition-link'
import LinkLeftArrow from 'assets/svg/link_left_arrow.svg'

interface ILinkProps {
  children: React.ReactNode;
  to: string;
}

export const LeftLink = ({ children, state, to, className, arrow, button, bakery, bakers, crowders, gray  }: ILinkProps) => {

  return (

    <Location>
      {({ location }) => (      	
          <TransitionLink state={{ prevUrlPath: location.pathname, ...state }}  
          exit={{ length: 2}} 
          entry={{ length: 2}}
          to={to} 
          className={`${'the_left_link'} ${ arrow ? 'the_arrow_left_link' : ''} ${ className ? className : '' }`}>        
            { arrow ? <LinkLeftArrow className={`${'the_left_arrow'}`}/> : null }<div className="the_link_text">{children}</div>
          </TransitionLink>  
        )}
    </Location>  

  );
};
