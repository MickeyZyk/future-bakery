import * as React from 'react';
import { Tween } from 'react-gsap';
import { Power3 } from "gsap/TweenMax";
import { TransitionState } from "gatsby-plugin-transition-link";
import { If } from 'react-if'


import s from './MenuBackground.scss';

export const MenuBackground = () => {	

	return (

		<>
			<TransitionState>

			  {({ transitionStatus }) => {	

					return (

						<div className={s.menu_background_wrapper}>

					        <If condition={ ['entering','entered'].includes(transitionStatus) }>

					            <Tween delay={0} duration={1} to={{ scaleX:600, scaleY:600, ease: 'Power3.easeIn' }}>

							  		<div className={s.background}></div>

								</Tween>		

					        </If>	


					        <If condition={ ['exiting','exited'].includes(transitionStatus) }>

							    <Tween easing={'Power3.easeOut'} delay={0} duration={1} 
							    from={{ scaleX:600, scaleY:600 }} 
							    to={{ scaleX:0.001, scaleY:0.001 }}>

							  		<div className={s.background}></div>

								</Tween>
											            
					        </If>	


						</div>		

					)

			  }}

			</TransitionState>

		</>

	)

}
