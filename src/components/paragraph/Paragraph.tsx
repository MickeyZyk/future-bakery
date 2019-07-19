import * as React from 'react';
import { Power2 } from "gsap/TweenMax";
import { Tween } from 'react-gsap';
import { TransitionState } from "gatsby-plugin-transition-link";

import s from './Paragraph.scss';

interface IIntroProps {
  children: React.ReactNode;
}

export const Paragraph = ({ children, className }: IIntroProps) => {
  return (

    <TransitionState>
      {({ transitionStatus }) => {
        return (

	        <Tween delay={.75} duration={1} 
          from={ ['entering'].includes(transitionStatus) ? false : { opacity: 0, yPercent: 150, ease: 'Power2.easeOut' } } 
          to={ ['exiting'].includes(transitionStatus) ? { opacity: 0, yPercent: 150, ease: 'Power2.easeIn'} : false } >
	    	  	<p className={`${s.paragraph } ${className}`}>{children}</p>
	    	  </Tween>

        )
      }}
    </TransitionState>

  );
};
