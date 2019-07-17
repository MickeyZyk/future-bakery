import * as React from 'react';
import Helmet from 'react-helmet';
import { Intro } from 'components/intro/Intro';
import { Highlight } from 'components/intro/Highlight';
import { BlockText } from 'components/block-text/BlockText';
import { Figure } from 'components/figure/Figure';
import { Heading } from 'components/heading/Heading';
import Bulb1 from 'components/bulb1/Bulb1';
import { Footer } from 'components/footer/Footer';

import { SliderControls } from 'components/slider-controls/SliderControls';
import ReactCursorPosition from 'react-cursor-position';

export default () => (
  <>

    <ReactCursorPosition>

      <Helmet title="Future" />  

      <Bulb1 />

      <Figure />

      <Heading delay={.5}>THE FUTURE</Heading>
      <Heading delay={.25}>IS HERE</Heading>      

      <Intro delay={1.5}>
        Top creative and strategic minds joined forces
      </Intro>
      <Intro delay={1.25}>
        with the largest crowd of consumers.
      </Intro>   

      <SliderControls />

      <Footer />

    </ReactCursorPosition>     

  </>
);
