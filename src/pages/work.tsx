import * as React from 'react';
import Helmet from 'react-helmet';
import { Slider } from 'components/slider/Slider';
import { Heading } from 'components/heading/Heading';
import { Item } from 'components/item/Item';

export default () => (
  <>
    <Helmet title="About" />

    <div className='fulscreen_slider'>

      <Item/>   

    </div>

  </>
);
