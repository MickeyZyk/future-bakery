import * as React from 'react';

import { Container } from 'components/container/Container';
import { Row } from 'components/row/Row';

import { Power2 } from "gsap/TweenMax";
import { Tween } from 'react-gsap';
import { TransitionState } from "gatsby-plugin-transition-link";

import s from './Heading.scss';

interface IIntroProps {
  children: React.ReactNode;
}



export const Heading = ({ children, className }: IIntroProps) => {
  return (

    <TransitionState>
      {({ transitionStatus }) => {
        return (

	        <Tween delay={.5} duration={1} from={ ['entering'].includes(transitionStatus) ? false : { opacity: 0, yPercent: 200, ease: Power2.easeOut } } to={ ['exiting'].includes(transitionStatus) ? { opacity: 0, yPercent: 200, ease: Power2.easeIn} : false } >
	    	  	<h2 className={`${s.heading } ${className}`}>{children}</h2>
	    	  </Tween>

        )
      }}
    </TransitionState>

  );
};
