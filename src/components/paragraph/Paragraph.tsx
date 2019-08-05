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
      'p',
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
            <p ref={this.paragraph} className={`${s.paragraph } ${this.props.className}`}>
              {this.props.children}
            </p>

          )
        }}

      </TransitionState>

    );
  }


};
