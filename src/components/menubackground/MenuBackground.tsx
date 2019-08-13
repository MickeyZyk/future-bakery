import * as React from 'react';
import { TweenMax, TimelineMax, Power3} from "gsap";
import { Tween } from 'react-gsap';
import { TransitionState } from "gatsby-plugin-transition-link";

import s from './MenuBackground.scss';

export class MenuBackground extends React.Component {

  constructor(props){
    super(props);
  }

  render() {


	return (
			
	  <TransitionState>
	  	{({ transitionStatus }) => {
			  return (  

            <Tween duration={2} 
            from={ ['entering'].includes(transitionStatus) ? false : { yPercent: 100, opacity: 1, ease: 'Power3.easeInOut' } } 
            to={ ['exiting'].includes(transitionStatus) ? { yPercent: -100, opacity: 1, ease: 'Power3.easeInOut' } : false  } >  

				<div className={s.background}>
					<img className={s.background_logo} src="/images/bakery_menu_logo.png"/>					
				</div>

            </Tween>

			  );	

	  	}}

		</TransitionState>			
	)

  }

}
