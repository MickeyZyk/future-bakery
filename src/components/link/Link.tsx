import * as React from 'react';
import { Location } from '@reach/router';
import TransitionLink from 'gatsby-plugin-transition-link'
import LinkArrow from 'assets/svg/link_arrow.svg'

interface ILinkProps {
  children: React.ReactNode;
  to: string;
}

export const Link = ({ children, state, to, className, arrow, button, bakery, bakers, crowders  }: ILinkProps) => {

  return (

    <Location>
      {({ location }) => (      	
          <TransitionLink state={{ prevUrlPath: location.pathname, ...state }}  
          exit={{ length: 2}} 
          entry={{ length: 2}}
          to={to} 
          className={`${'the_link'} ${ arrow ? 'the_arrow_link' : ''} ${ button ? 'the_button_link' : ''} ${ bakery ? 'bakery_color' : ''} ${ bakers ? 'bakers_color' : ''} ${ crowders ? 'crowders_color' : ''} ${ className ? className : '' }`}>        
            <div className="the_link_text">{children}</div>{ arrow ? <LinkArrow className={`${'the_arrow'} ${ bakery ? 'bakery_arrow' : ''} ${ bakers ? 'bakers_arrow' : ''} ${ crowders ? 'crowders_arrow' : ''}`}/> : null }
          </TransitionLink>  
        )}
    </Location>  

  );
};
