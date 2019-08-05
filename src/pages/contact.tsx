import * as React from 'react';
import Helmet from 'react-helmet';
import { Slider } from 'components/slider/Slider';
import { AnimatedHeading } from 'components/heading/AnimatedHeading';
import SVGicon from 'components/svgicon/SVGicon';
import SVGiconReverse from 'components/svgiconreverse/SVGiconReverse';
import ReactCursorPosition from 'react-cursor-position';

export default () => (
  <>
    <ReactCursorPosition className='fullscreen_cursor_position'>   
      <Helmet title="Bakery" />
      <SVGicon className='bakery_contact_house' src='home.svg' /> 
	    <div className='fulscreen_slider'>
	      <AnimatedHeading className='bakery_contact_heading'>Headline call to action for contact page.</AnimatedHeading>
        <img src="../images/paper_plane.png" className='bakery_contact_image'/>
        <div className="bakery_contact_flip_button bakery_flip">
          <Link to={'/contact'}>
            <div className="front">START A PROJECT WITH US</div>
            <div className="back">START A PROJECT WITH US</div>
          </Link>
        </div>
	    </div>
    </ReactCursorPosition>	    
  </>
);
