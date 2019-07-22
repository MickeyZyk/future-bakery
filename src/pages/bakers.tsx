import * as React from 'react';
import Helmet from 'react-helmet';
import { BakersSlider } from 'components/slider/BakersSlider';
import { Heading } from 'components/heading/Heading';
import SVGicon from 'components/svgicon/SVGicon';
import SVGiconReverse from 'components/svgiconreverse/SVGiconReverse';
import ReactCursorPosition from 'react-cursor-position';

export default () => (
  <>
    <ReactCursorPosition className='fullscreen_cursor_position'>  
	    <Helmet title="Bakers" />
      <SVGicon className='bakers_home__bakers_crown' src='bakers_crown.svg'  /> 
      <SVGiconReverse className='bakers_home__bakers_bulb' src='bakers_bulb.svg'  /> 
	    <div className='fulscreen_slider'>
	    	<BakersSlider className='new-slider'/>
	    </div>
    </ReactCursorPosition>
  </>
);
