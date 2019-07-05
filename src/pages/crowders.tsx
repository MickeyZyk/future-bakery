import * as React from 'react';
import Helmet from 'react-helmet';
import { Figure } from 'components/figure/Figure';
import { Heading } from 'components/heading/Heading';
import { Intro } from 'components/intro/Intro';
import Bulb1 from 'components/bulb1/Bulb1';
import { BlockText } from 'components/block-text/BlockText';
import ReactCursorPosition from 'react-cursor-position';

export default () => (
  <>
    <Helmet title="About" />

      <Figure />

      <Heading>THE ABOUT</Heading>
      <Heading>PAGE HEADING</Heading>

	    <Intro>
	      Lorem Ipsum is simply dummy text of the 
	    </Intro>
      <Intro>
        printing and typesetting industry. 
      </Intro>      


  </>
);
