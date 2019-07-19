import React from "react"
import Img from "gatsby-image"
import { StaticQuery, graphql } from "gatsby"
import { Tween, Controls } from 'react-gsap'
import { Power2 } from "gsap/TweenMax";
import { Controller, Scene } from 'react-scrollmagic';
import { TransitionState } from "gatsby-plugin-transition-link";
import { add } from 'gsap-tools';
import s from './Figure.scss';

export const Figure = ({ src }) => (
  <>
        <TransitionState>
          {({ transitionStatus }) => {
            return (
              <div className={s.figure}>
                <Tween duration={1.2} from={ ['entering'].includes(transitionStatus) ? false : { clipPath:'inset(0% 0% 100% 0%)', yPercent: 250, ease: 'Power2.easeOut' } } to={ ['exiting'].includes(transitionStatus) ? {clipPath:'inset(0% 0% 100% 0%)', yPercent: -200, ease: 'Power2.easeIn' } : false } >
                  <div>
                    <Controller refreshInterval={1}>
                      <Scene duration={'200%'} triggerHook={'onEnter'}>
                        <Tween from={{ backgroundPositionY: '-300px' }}>
                          <div className={s.background} style={{ backgroundImage: `url(${src})` }}></div>
                        </Tween>
                      </Scene>
                    </Controller>
                  </div>
                </Tween> 
              </div>
            )
          }}
        </TransitionState>

  </>  
)