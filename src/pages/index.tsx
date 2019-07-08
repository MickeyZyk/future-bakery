import * as React from 'react';
import Helmet from 'react-helmet';
import { Intro } from 'components/intro/Intro';
import { Highlight } from 'components/intro/Highlight';
import { BlockText } from 'components/block-text/BlockText';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import { Heading } from 'components/heading/Heading';
import Bulb1 from 'components/bulb1/Bulb1';

import { SliderControls } from 'components/slider-controls/SliderControls';
import ReactCursorPosition from 'react-cursor-position';

export default () => (
  <div className='wrapper'>

      <Helmet title="Future" />  

              <Heading className='bakery_about__heading_one'>Home<br/>page<br/>in it's finest.</Heading>  


  </div>
);
