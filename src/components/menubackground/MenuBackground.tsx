import * as React from 'react';
import { Tween } from 'react-gsap';
import { Power3 } from "gsap/TweenMax";
import { TransitionState } from "gatsby-plugin-transition-link";
import { If } from 'react-if'


import s from './MenuBackground.scss';

export const MenuBackground = () => {	

	return (
		<>	

			<div className={s.background}>
				<img className={s.background_logo} src="../images/bakery_menu_logo.png"/>					
			</div>

		</>
	)

}
