import React from "react"
import Img from "gatsby-image"
import { StaticQuery, graphql } from "gatsby"
import { Tween, Controls } from 'react-gsap'
import { Power2 } from "gsap/TweenMax";
import { Controller, Scene } from 'react-scrollmagic';
import { TransitionState } from "gatsby-plugin-transition-link";
import { add } from 'gsap-tools';
import s from './StaticFigure.scss';

export const StaticFigure = ({ src, delay, className }) => (
  <>
    <TransitionState>
      {({ transitionStatus }) => {
        return (
          <div className={`${s.figure} ${className}`}>
            <Tween duration={1} delay={delay? delay: 1} from={ ['entering'].includes(transitionStatus) ? false : {clipPath:'inset(100% 0% 0% 0%)', ease: Power2.easeOut, opacity: 0} } to={ ['exiting'].includes(transitionStatus) ? {clipPath:'inset(0% 0% 100% 0%)', ease: Power2.easeIn, opacity: 0 } : false } >
                <div className={s.background} style={{ backgroundImage: `url(${src})` }}></div>
            </Tween>
          </div>
        )
      }}
    </TransitionState>
  </>  
)