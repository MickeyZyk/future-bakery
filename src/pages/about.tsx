import * as React from 'react';
import Helmet from 'react-helmet';
import { Intro } from 'components/intro/Intro';
import { Highlight } from 'components/intro/Highlight';
import { BlockText } from 'components/block-text/BlockText';
import { Figure } from 'components/figure/Figure';
import { Heading } from 'components/heading/Heading';
import SVGicon from 'components/svgicon/SVGicon';

import { SliderControls } from 'components/slider-controls/SliderControls';
import ReactCursorPosition from 'react-cursor-position';

export default () => (
  <>

    <ReactCursorPosition>

      <Helmet title="Future" />  

      <SVGicon className='bakery_about__green_rainbow' src='green_rainbow.svg'  />

      <Figure />

      <Heading className='bakery_about__heading' delay={.5}>THE FUTURE IS HERE</Heading>      

      <Intro delay={1.5}>
        Top creative and strategic minds joined forces
      </Intro>
      <Intro delay={1.25}>
        with the largest crowd of consumers.
      </Intro>   

      <SliderControls />

    </ReactCursorPosition>     

  </>
);
