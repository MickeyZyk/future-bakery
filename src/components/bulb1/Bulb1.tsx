import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { Tween } from 'react-gsap'
import { Power2 } from "gsap/TweenMax";
import { TransitionState } from "gatsby-plugin-transition-link";
import { add } from 'gsap-tools';
import Img from "gatsby-image";
import s from './Bulb1.scss';

const Bulb1 = (props) => {

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
      isActive = false,
      isPositionOutside = false
  } = props;

  return (
  <>
    <StaticQuery
      query={graphql`
        query {
          file(relativePath: { eq: "bulb1.png" }) {
            childImageSharp {
              # Specify the image processing specifications right in the query.
              # Makes it trivial to update as your page's design changes.
              fluid(maxWidth: 92) {
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
              <div className={s.figure}>
                <Tween duration={1.5} delay={.5} from={ ['entering'].includes(transitionStatus) ? false : { opacity: 0, yPercent: -200, ease: 'Power2.easeOut' } } to={ ['exiting'].includes(transitionStatus) ? { opacity: 0, yPercent: -200, ease: 'Power2.easeIn' } : false } >
                  <div>
                    <Tween duration={1} to={{ x: -0.02 * x, y: -0.02 * y, ease: 'Power2.easeOut', transformPerspective: 900, transformOrigin: 'center'}}>
                      <div>
                        <Img fluid={data.file.childImageSharp.fluid} /> 
                      </div>
                    </Tween>
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
}

export default Bulb1