import * as React from 'react';
import { Location } from '@reach/router';
import TransitionLink from 'gatsby-plugin-transition-link'
import LinkLeftArrow from 'assets/svg/link_left_arrow.svg'

interface ILinkProps {
  children: React.ReactNode;
  to: string;
}

export const LeftLink = ({ children, state, to, className, arrow, button, bakery, bakers, crowders, gray, onClick  }: ILinkProps) => {

  return (

    <Location>
      {({ location }) => (      	
          <TransitionLink state={{ prevUrlPath: location.pathname, ...state }}  
          exit={{ length: 2}} 
          entry={{ length: 2}}
          to={to}
          onClick={onClick} 
          className={`${'the_left_link'} ${ arrow ? 'the_arrow_link' 
          : ''} ${ button ? 'the_button_link' 
          : ''} ${ bakery ? 'bakery_color' 
          : ''} ${ bakers ? 'bakers_color' 
          : ''} ${ crowders ? 'crowders_color' 
          : ''} ${ gray ? 'gray_color'           
          : ''} ${ className ? className 
            : '' }`}>        
            { arrow ? <LinkLeftArrow 
              className={`${'the_left_arrow'} ${ bakery ? 'bakery_arrow' 
              : ''} ${ bakers ? 'bakers_arrow' 
              : ''} ${ crowders ? 'crowders_arrow' 
              : ''} ${ gray ? 'gray_arrow'               
              : ''}`}/> : null }
              <div className="the_link_text">{children}</div>
          </TransitionLink>  
        )}
    </Location>  

  );
};
