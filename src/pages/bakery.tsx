import * as React from 'react';
import Helmet from 'react-helmet';
import { Intro } from 'components/intro/Intro';
import { Highlight } from 'components/intro/Highlight';
import { BlockText } from 'components/block-text/BlockText';
import { Figure2 } from 'components/figure2/Figure2';
import { Heading } from 'components/heading/Heading';
import Bulb1 from 'components/bulb1/Bulb1';
import { SliderControls } from 'components/slider-controls/SliderControls';
import ReactCursorPosition from 'react-cursor-position';

export default () => (
  <>

    <ReactCursorPosition>

      <Helmet title="Insights" />  

      <Bulb1 />      

      <Figure2 />

      <Heading delay={.5}>TRUE</Heading>
      <Heading delay={.25}>INSIGHTS</Heading>      

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
