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

import { Row } from 'components/row/Row';

export default () => (
  <>
    <ReactCursorPosition className='fullscreen_cursor_position'>   
      <Helmet title="Bakery" />
      <SVGicon className='bakery_contact_house' src='home.svg' /> 







      <TransitionState>
        {({ transitionStatus }) => {
          return (

            <>

            <Tween duration={2} 
            from={ ['entering'].includes(transitionStatus) ? false : { yPercent: 100, opacity: 1, ease: 'Power3.easeInOut' } } 
            to={ ['exiting'].includes(transitionStatus) ? { yPercent: -100, opacity: 1, ease: 'Power3.easeInOut' } : false  } >  

          
              <div className='fulscreen_slider'>


                <Scrollbar className="scrollbar" damping={0.1} renderByPixels={true} alwaysShowTracks={false} syncCallbacks={false}>      

                  <AnimatedHeading className='bakery_contact_heading bakery_color'>Headline call to action for contact page.</AnimatedHeading>
                  <div className="bakery_contact_adress_block">
                    <p className="text-bolder">The Future Bakery s.r.o.</p>
                    <p>Opletalova 1013/59, Nové Mesto<br/>
                    110 00 Praha 1<br/>
                    IC: 24168858 DIC: CZ24168858</p>
                    <p>&nbsp;</p>
                    <p className="text-bolder">Máte zájem se na cokoliv zeptat?</p>
                    <p>Neváhejte a kontaktujte nás.</p>
                    <a className="contact-email color-black" href="mailto:info@futurebakery.cz">info@futurebakery.cz</a>

                      <Row>                
                        <Link className="bakery_contact_flip_button" bakery button arrow to={'/'}>START A PROJECT WITH US</Link>
                      </Row>                

                  </div>
                  <img src="../images/paper_plane.jpg" className='bakery_contact_image'/>

                </Scrollbar>

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
