import * as React from 'react';
import { Power3 } from "gsap/TweenMax";
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
							    	{ scaleX:0.0035, scaleY:0.0035, ease: Power3.easeIn, transformOrigin:'64.75% 35.2%'} 
							    } 
							    to={ 
							    	['exiting'].includes(transitionStatus) ?
							    	{ scaleX:0.0035, scaleY:0.0035, ease: Power3.easeOut, transformOrigin:'64.75% 35.2%'} :
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
