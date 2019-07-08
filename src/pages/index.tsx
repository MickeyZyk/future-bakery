import * as React from 'react';
import Helmet from 'react-helmet';
import { Split } from 'components/split/Split';
import { StaticFigure } from 'components/figure/StaticFigure';
import { Paragraph } from 'components/paragraph/Paragraph';

export default () => (
  <div className='fulscreen_slider'>

    <Helmet title="Future" /> 

	    <div className="offset-left-10 col-5 slider_heading_wrapper">

	    	<Split className='slider_heading'>THE FUTURE IS HERE</Split>

	    	<Paragraph>Lorem ipsum blah blah blah... Lorem ipsum blah blah blah... </Paragraph>

	    </div>    

	    <div className="offset-left-2 col-11 slider_upper_image">

	    	<StaticFigure src='../images/image.jpg'/>

	    </div>            

  </div>
);
