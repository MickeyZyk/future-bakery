import * as React from 'react';
import Helmet from 'react-helmet';
import { CrowdersSlider } from 'components/slider/CrowdersSlider';
import { Heading } from 'components/heading/Heading';
import SVGiconReverse from 'components/svgiconreverse/SVGiconReverse';
import ReactCursorPosition from 'react-cursor-position';

export default () => (
  <>
    <ReactCursorPosition className='fullscreen_cursor_position'>    
    	<Helmet title="Crowders" />
      <SVGiconReverse className='crowders_home__crowders_bubble' src='crowders_bubble.svg'  />     	
    	<div className='fulscreen_slider'>
	      <CrowdersSlider className='new-slider'/>   
    	</div>
    </ReactCursorPosition>
  </>
);
