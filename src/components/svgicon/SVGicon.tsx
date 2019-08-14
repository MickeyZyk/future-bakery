import React from "react"
import { Tween } from 'react-gsap'
import { Power2 } from "gsap/TweenMax";
import { TransitionState } from "gatsby-plugin-transition-link";
import Img from "gatsby-image";
import s from './SVGicon.scss';

const SVGicon = (props) => {

  const {
      detectedEnvironment: {
          isMouseDetected = false,
          isTouchDetected = false
      } = {},
      elementDimensions: {
          width = 0,
          height = 0
      } = {},
      position: {
          x = 0,
          y = 0
      } = {},
      isActive = true,
      isPositionOutside = false
  } = props;

  return (
  <>
    <TransitionState>
      {({ transitionStatus }) => {
        return (
          <div className={props.className} >
            <Tween duration={1.5} delay={.5} 
            from={ ['entering'].includes(transitionStatus) ? false : { opacity: 0, yPercent: -200, ease: 'Power2.easeOut' } } 
            to={ ['exiting'].includes(transitionStatus) ? { opacity: 0, yPercent: -200, ease: 'Power2.easeIn'} : false } >
              <div>
                <Tween duration={1} to={{ x: -0.065 * x, y: -0.065 * y, ease: 'Power2.easeOut', transformPerspective: 900, transformOrigin: 'center'}}>
                  <div>
                    <img src={'/svg/' + props.src} />
                  </div>
                </Tween>
              </div>
            </Tween>
          </div>
        )
      }}
    </TransitionState>
  </>
  )
}

export default SVGicon