import * as React from 'react';
import Helmet from 'react-helmet';
import { Slider } from 'components/slider/Slider';
import { Heading } from 'components/heading/Heading';
import SVGicon from 'components/svgicon/SVGicon';
import SVGiconReverse from 'components/svgiconreverse/SVGiconReverse';
import ReactCursorPosition from 'react-cursor-position';

export default () => (
  <>
    <ReactCursorPosition className='fullscreen_cursor_position'>   
      <Helmet title="Bakery" />
      <SVGicon  className='bakery_home__bakery_bulb_small' src='bakery_bulb_small.svg' /> 
      <SVGiconReverse className='bakery_home__bakery_bulb' src='bakery_bulb.svg'  />     
	    <div className='fulscreen_slider'>
	      <Slider className='new-slider'/>
	    </div>
    </ReactCursorPosition>	    
  </>
);
