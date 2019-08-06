import * as React from 'react';
import Helmet from 'react-helmet';
import { Slider } from 'components/slider/Slider';
import { Heading } from 'components/heading/Heading';
import SVGicon from 'components/svgicon/SVGicon';
import { Link } from 'components/link/Link';
import SVGiconReverse from 'components/svgiconreverse/SVGiconReverse';
import ReactCursorPosition from 'react-cursor-position';

import { TweenMax, TimelineMax, Power3} from "gsap";
import { Tween } from 'react-gsap';
import { TransitionState } from "gatsby-plugin-transition-link";

const index = () => (
  <>
    <ReactCursorPosition className='fullscreen_cursor_position'>   
      <Helmet title="Bakery" />
      <SVGicon  className='bakery_home__bakery_bulb_small' src='bakery_bulb_small.svg' /> 
      <SVGiconReverse className='bakery_home__bakery_bulb' src='bakery_bulb.svg'  /> 


      <TransitionState>
        {({ transitionStatus }) => {
          return (

            <>

            <Tween duration={2} 
            from={ ['entering'].includes(transitionStatus) ? false : { yPercent: 100, opacity: 1, ease: 'Power3.easeInOut' } } 
            to={ ['exiting'].includes(transitionStatus) ? { yPercent: -100, opacity: 1, ease: 'Power3.easeInOut' } : false  } >  

          
              <div className='fulscreen_slider'>
                <Slider className='new-slider'/>
              </div>

            </Tween>

            <Tween duration={2} 
            from={ ['entering'].includes(transitionStatus) ? false : { yPercent: 200, opacity: 0, ease: 'Power3.easeInOut' } } 
            to={ ['exiting'].includes(transitionStatus) ? { yPercent: -200, opacity: 0, ease: 'Power3.easeInOut' } : false  } >                         

              <div className="flip_button flip">
                <Link to={'/bakerycontact'}>
                  <div className="front">START A PROJECT WITH US</div>
                  <div className="back">START A PROJECT WITH US</div>
                </Link>
              </div>


            </Tween>


            <Tween duration={2} 
            from={ ['entering'].includes(transitionStatus) ? false : { yPercent: 100, opacity: 1, ease: 'Power3.easeInOut' } } 
            to={ ['exiting'].includes(transitionStatus) ? { backgroundColor: '#222222', yPercent: -100, opacity: 1, ease: 'Power3.easeInOut' } : false  } >  

              <div className='fulscreen_white' style={{zIndex: -1, backgroundColor: '#ffffff', position: 'absolute', width: '100vw', height: '100vh', top: 0, bottom: 0, left: 0, right: 0}}></div>

            </Tween>

            </>

          )
        }}
      </TransitionState>



    </ReactCursorPosition>      
  </>
);

export default index