import * as React from 'react';
import Helmet from 'react-helmet';
import { Slider } from 'components/slider/Slider';
import { Heading } from 'components/heading/Heading';

export default () => (
  <>
    <Helmet title="About" />

    <div className='fullscreen'>

      <Heading className='slider_heading' delay={.75}>TRUE</Heading>
      <Slider className='new-slider'/>   

    </div>

  </>
);
