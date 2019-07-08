import * as React from 'react';
import { Power2 } from "gsap/TweenMax";
import { Tween } from 'react-gsap';
import { TransitionState } from "gatsby-plugin-transition-link";

import s from './HeadingTwo.scss';

interface IIntroProps {
  children: React.ReactNode;
}


export const HeadingTwo = ({ children, className }: IIntroProps) => {

  return (

    <TransitionState>
      {({ transitionStatus }) => {
  //console.log(['entering'].includes(transitionStatus));        
        return (

	        <Tween delay={.5} duration={1} from={ ['entering'].includes(transitionStatus) ? false : { opacity: 0, yPercent: 100, rotationX: 45, ease: Power2.easeOut } } to={ ['exiting'].includes(transitionStatus) ? { opacity: 0, yPercent: 100, rotationX: 45, ease: Power2.easeIn} : false } >
	    	  	<h2 className={`${s.heading } ${className}`}>{children}</h2>
	    	  </Tween>

        )
      }}
    </TransitionState>

  );
};
