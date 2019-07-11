import * as React from 'react';
import Helmet from 'react-helmet';
import { Split } from 'components/split/Split';
import { StaticFigure } from 'components/figure/StaticFigure';
import { SliderParagraph } from 'components/paragraph/SliderParagraph';
import { SliderControls } from 'components/slider-controls/SliderControls';

export default () => (
  <div className='fulscreen_slider'>

    <Helmet title="Future" /> 

	    <div className="mob-offset-left-2 mob-col-10 offset-left-10 col-5 slider_heading_wrapper">

	    	<Split className='slider_heading'>THE FUTURE IS HERE</Split>

	    	<SliderParagraph className="hide_on_mobile slider_paragraph">Top creative and strategic minds joined forces with the largest crowd of consumers.</SliderParagraph>

	    </div>    

	    <div className="mob-offset-left-2 mob-col-16 offset-left-2 col-10 slider_upper_image">

	    	<img src='../images/image.jpg'/>
	    	<SliderControls/>
	    	<StaticFigure delay={0.15} src='../images/dude.jpg'/>	    	

	    	<SliderParagraph className="show_on_mobile">Top creative and strategic minds joined forces with the largest crowd of consumers.</SliderParagraph>	    	

	    </div>            

  </div>
);
