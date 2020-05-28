import * as React from 'react';
import Helmet from 'react-helmet';
import { Slider } from 'components/slider/Slider';
import { AnimatedHeading } from 'components/heading/AnimatedHeading';
import SVGicon from 'components/svgicon/SVGicon';
import SVGiconReverse from 'components/svgiconreverse/SVGiconReverse';
import ReactCursorPosition from 'react-cursor-position';
import { Link } from 'components/link/Link';
import { ExternalLink } from 'components/link/ExternalLink';
import Scrollbar from 'react-smooth-scrollbar';

import { TweenMax, TimelineMax, Power3} from "gsap";
import { Tween } from 'react-gsap';
import { TransitionState } from "gatsby-plugin-transition-link";

import { Row } from 'components/row/Row';

export default ({data}) => (
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

          
          
              <div className='crowders_contact_fulscreen_slider'>  


                  <AnimatedHeading className='bakery_contact_heading bakery_color'>{data.gravBakeryContact.headline}</AnimatedHeading>
                  <div className="bakery_contact_adress_block">
                  <div dangerouslySetInnerHTML={{ __html: data.gravBakeryContact.data }}></div>
                    <a className="contact-email color-black" href="mailto:{data.gravBakeryContact.link}">{data.gravBakeryContact.text}</a>
                    <Row>                
                      <ExternalLink className="bakery_contact_flip_button" bakery button arrow to={data.gravBakeryContact.link}>{data.gravBakeryContact.link_text}</ExternalLink>
                    </Row>                  
                  </div>

                  <img src="../images/paper_plane.jpg" className='bakery_contact_image'/>

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



export const gravBakeryQuery = graphql`
  query gravBakeryContacts {
    gravBakeryContact {
      data
      headline
      image
      link
      link_text
    }
  }

`