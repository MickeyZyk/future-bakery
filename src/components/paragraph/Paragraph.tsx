import React, { useState, useRef, useEffect } from 'react';
import SplitText from 'utils/SplitText.min.js'
import ReactDOM from 'react-dom';
import { TweenMax, TimelineMax, Power3, Power2 } from "gsap";
import { Tween } from 'react-gsap';
import { TransitionState } from "gatsby-plugin-transition-link";
import { Controller, Scene } from 'react-scrollmagic';
import PropTypes from 'prop-types';
import s from './Paragraph.scss';

interface IIntroProps {
  children: React.ReactNode;
}

export class Paragraph extends React.Component {
/*
  static contextTypes = {
      getScrollbar: PropTypes.func
  };
*/
  constructor(props){
    super(props);
    this.paragraph = React.createRef();    
  }

  componentDidMount(){

    const node = this.paragraph.current;

    const split = new SplitText(
      'p',
      {
        type: "lines",
        linesClass: "ts-line"
      }
    )

    let lines = split.lines

      var currentTLback = new TimelineMax(); 
      currentTLback.staggerFrom(lines, 3, { yPercent: 150, ease: 'Expo.easeInOut' }, .15, "+=0")

/*
      this.context.getScrollbar((scrollbar) => {
          console.log(scrollbar)
      });   
*/

  }

  render() {

    return (


      <TransitionState>
        {({ transitionStatus }) => {

          return (

          <Tween duration={1} delay={1} 
          from={ ['entering'].includes(transitionStatus) ? false : { opacity: 0, yPercent: 100, ease: 'Power2.easeOut' }} 
          to={ ['exiting'].includes(transitionStatus) ? { opacity: 0, yPercent: 100, ease: 'Power2.easeIn' } : false } >
            <p ref={this.paragraph} className={`${s.paragraph } ${this.props.className}`}>
              {this.props.children}
            </p>
          </Tween>

          )
        }}

      </TransitionState>

    );
  }


};
