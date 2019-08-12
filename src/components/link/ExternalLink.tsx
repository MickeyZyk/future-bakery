import * as React from 'react';
import { Location } from '@reach/router';
import TransitionLink from 'gatsby-plugin-transition-link'
import LinkArrow from 'assets/svg/link_arrow.svg'

interface ILinkProps {
  children: React.ReactNode;
  to: string;
}

export const ExternalLink = ({ children, state, to, className, arrow, button, bakery, bakers, crowders, gray, white, onClick  }: ILinkProps) => {

  return (

    <Location>
      {({ location }) => (      	
          <div 
          onClick={onClick} 
          className={`${'the_link'} ${ arrow ? 'the_arrow_link' 
          : ''} ${ button ? 'the_button_link' 
          : ''} ${ bakery ? 'bakery_color' 
          : ''} ${ bakers ? 'bakers_color' 
          : ''} ${ crowders ? 'crowders_color' 
          : ''} ${ gray ? 'gray_color'           
          : ''} ${ white ? 'white_color'             
          : ''} ${ className ? className 
            : '' }`}>       
            <div className="the_link_text"><a target="blank" href={to}>{children}</a></div>{ arrow ? <LinkArrow 
              className={`${'the_arrow'} ${ bakery ? 'bakery_arrow' 
              : ''} ${ bakers ? 'bakers_arrow' 
              : ''} ${ crowders ? 'crowders_arrow' 
              : ''} ${ gray ? 'gray_arrow'               
              : ''} ${ white ? 'white_arrow'                
              : ''}`}/> : null }
          </div>  
        )}
    </Location>  

  );
};
