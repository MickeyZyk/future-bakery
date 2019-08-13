import React from "react"
import { Tween } from 'react-gsap'
import { Power2 } from "gsap/TweenMax";
import { TransitionState } from "gatsby-plugin-transition-link";
import s from './Texticon.scss';

const Texticon = (props, className) => {

  return (
  <>
    <TransitionState>
      {({ transitionStatus }) => {
        return (
          <div className={`${s.text_icon} ${props.className}`} >
            <Tween duration={1.5} delay={.5} 
            from={ ['entering'].includes(transitionStatus) ? false : { opacity: 0, yPercent: -200, ease: 'Power2.easeOut' } } 
            to={ ['exiting'].includes(transitionStatus) ? { opacity: 0, yPercent: -200, ease: 'Power2.easeIn' } : false } >
              <div>
                <img src={'/svg/' + props.src} />
                <h4 className={s.icon_heading}>{props.name}</h4>
              </div>
            </Tween>
          </div>
        )
      }}
    </TransitionState>
  </>
  )
}

export default Texticon;
