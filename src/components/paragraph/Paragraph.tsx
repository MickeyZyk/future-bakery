import React, { useState, useRef, useEffect } from 'react';
import SplitText from 'utils/SplitText.min.js'
import ReactDOM from 'react-dom';
import { TweenMax, TimelineMax, Power3 } from "gsap";
import { Tween } from 'react-gsap';
import { TransitionState } from "gatsby-plugin-transition-link";
import { Controller, Scene } from 'react-scrollmagic';
import s from './Paragraph.scss';

interface IIntroProps {
  children: React.ReactNode;
}

export class Paragraph extends React.Component {

  constructor(props){
    super(props);
    this.paragraph = React.createRef();    
  }

  componentDidMount(){

    const node = this.paragraph.current;

    const split = new SplitText(
      'p.bakery_about__paragraph',
      {
        type: "lines",
        linesClass: "ts-line"
      }
    )

    let lines = split.lines



    

  }

  render() {

    return (

      <TransitionState>
        {({ transitionStatus }) => {
          return (
  	        <Tween delay={.75} duration={1} 
            from={ ['entering'].includes(transitionStatus) ? false : { opacity: 0, yPercent: 150, ease: 'Power2.easeOut' } } 
            to={ ['exiting'].includes(transitionStatus) ? { opacity: 0, yPercent: 150, ease: 'Power2.easeIn'} : false } >
              <Controller refreshInterval={1}>
                <Scene duration={'100%'} triggerHook={'onEnter'}>
                  <Tween staggerFrom={{ yPercent: 150}}>
                    <p ref={this.paragraph} className={`${s.paragraph } ${this.props.className}`}>
                      {this.props.children}
                    </p>
                  </Tween>
                </Scene>
              </Controller>
  	    	  </Tween>
          )
        }}
      </TransitionState>

    );
  }


};
