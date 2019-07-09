import React from "react"
import Img from "gatsby-image"
import { StaticQuery, graphql } from "gatsby"
import { Tween } from 'react-gsap'
import { Power2 } from "gsap/TweenMax";
import { Controller, Scene } from 'react-scrollmagic';
import { TransitionState } from "gatsby-plugin-transition-link";
import { add } from 'gsap-tools';
import s from './Figure2.scss';

export const Figure2 = ({ data, className }) => (
  <>
    <StaticQuery
      query={graphql`
        query {
          file(relativePath: { eq: "desk.jpg" }) {
            childImageSharp {
              # Specify the image processing specifications right in the query.
              # Makes it trivial to update as your page's design changes.
              fluid(maxWidth: 1600) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      `}
      render={data => (
        <TransitionState>
          {({ transitionStatus }) => {
            return (
              <div className={`${s.figure } ${className}`}>
                <Tween duration={1} delay={1} from={ ['entering'].includes(transitionStatus) ? false : {clipPath:'inset(0% 0% 100% 0%)', ease: Power2.easeOut, opacity: 0} } to={ ['exiting'].includes(transitionStatus) ? {clipPath:'inset(0% 0% 100% 0%)', ease: Power2.easeIn, opacity: 0 } : false } >
                  <div>
                    <Controller refreshInterval={1}>
                      <Scene duration={'300%'} triggerHook={'onEnter'}>
                        <Tween from={{ backgroundPositionY: '-300px' }}>
                          <div className={s.background} style={{ backgroundImage: `url(${data.file.childImageSharp.fluid.src})` }}></div>
                        </Tween>
                      </Scene>
                    </Controller>
                  </div>
                </Tween> 
              </div>
            )
          }}
        </TransitionState>
      )}
    />
  </>  
)