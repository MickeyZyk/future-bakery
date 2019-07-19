import * as React from 'react';
import { Power3 } from "gsap/TweenMax";
import { Tween } from 'react-gsap';
import { TransitionState } from "gatsby-plugin-transition-link";

import s from './Heading.scss';

interface IIntroProps {
  children: React.ReactNode;
}

export const Heading = ({ children, className, delay }: IIntroProps) => {

  return (

    <TransitionState>
      {({ transitionStatus }) => {
  //console.log(['entering'].includes(transitionStatus));        
        return (

	        <Tween delay={ delay ? delay : .5} duration={1} 
          from={ ['entering'].includes(transitionStatus) ? false : { opacity: 0, yPercent: 100, rotationX: 45, ease: 'Power3.easeInOut' } } 
          to={ ['exiting'].includes(transitionStatus) ? { opacity: 0, yPercent: 100, rotationX: 45, ease: 'Power3.easeInOut'} : false } >
	    	  	<h2 className={`${s.heading} ${className}`}>{children}</h2>
	    	  </Tween>

        )
      }}
    </TransitionState>

  );
};
