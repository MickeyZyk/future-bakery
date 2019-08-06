import * as React from 'react';
import Helmet from 'react-helmet';
import { Slider } from 'components/slider/Slider';
import { AnimatedHeading } from 'components/heading/AnimatedHeading';
import SVGicon from 'components/svgicon/SVGicon';
import SVGiconReverse from 'components/svgiconreverse/SVGiconReverse';
import ReactCursorPosition from 'react-cursor-position';
import { Link } from 'components/link/Link';


import { TweenMax, TimelineMax, Power3} from "gsap";
import { Tween } from 'react-gsap';
import { TransitionState } from "gatsby-plugin-transition-link";

export default () => (
  <>
    <ReactCursorPosition className='fullscreen_cursor_position'>   
      <Helmet title="Bakery" />
      <SVGicon className='bakery_contact_house' src='crowders_home.svg' /> 


      <TransitionState>
        {({ transitionStatus }) => {
          return (

            <>

            <Tween duration={2} 
            from={ ['entering'].includes(transitionStatus) ? false : { yPercent: 100, opacity: 1, ease: 'Power3.easeInOut' } } 
            to={ ['exiting'].includes(transitionStatus) ? { yPercent: -100, opacity: 1, ease: 'Power3.easeInOut' } : false  } >  

          
              <div className='fulscreen_slider'>
                <AnimatedHeading className='bakery_contact_heading crowders_color'>Headline call to action for contact page.</AnimatedHeading>
                <div className="bakery_contact_adress_block">
                  <p className="text-bolder">The Future Bakery s.r.o.</p>
                  <p>Opletalova 1013/59, Nové Mesto<br/>
                  110 00 Praha 1<br/>
                  IC: 24168858 DIC: CZ24168858</p>
                  <p>&nbsp;</p>
                  <p className="text-bolder">Máte zájem se na cokoliv zeptat?</p>
                  <p>Neváhejte a kontaktujte nás.</p>
                  <a className="contact-email color-black" href="mailto:info@futurebakery.cz">info@futurebakery.cz</a>
                </div>
                <div className="bakery_contact_flip_button crowders_flip">
                  <Link to={'/bakerycontact'}>
                    <div className="front">START A PROJECT WITH US</div>
                    <div className="back">START A PROJECT WITH US</div>
                  </Link>
                </div>
                <img src="../images/paper_plane.png" className='bakery_contact_image'/>
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
