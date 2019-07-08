import * as React from 'react';
import { Power1 } from "gsap/TweenMax";
import { Tween } from 'react-gsap';
import { TransitionState } from "gatsby-plugin-transition-link";

import s from './MenuBackground.scss';

export const MenuBackground = () => {	

	return (

		<>
			<TransitionState>

			  {({ transitionStatus }) => {	

					return (

						<div>
							  <Tween delay={0} duration={1} 
							    from={ 
							    	['entering'].includes(transitionStatus) ?
							    	false :
							    	{ opacity: 0, scaleX:0.005, scaleY:0.005, ease: Power1.easeInOut, transformOrigin:'68% 32%'} 
							    } 
							    to={ 
							    	['exiting'].includes(transitionStatus) ?
							    	{ opacity: 0, scaleX:0.005, scaleY:0.005, ease: Power1.easeInOut, transformOrigin:'68% 32%'} :
							    	false 
							    } 
							  > 

							  	<div className={s.background}></div>

								</Tween>

						</div>		

					)

			  }}

			</TransitionState>

		</>

	)

}
