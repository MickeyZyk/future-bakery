import React, { useState, useRef, useEffect } from 'react';
import SplitText from 'utils/SplitText.min.js'
import ReactDOM from 'react-dom';
//import * as ScrollMagic from 'scrollmagic'
//import 'imports-loader?define=>false!scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap';
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

  constructor(props){
    super(props);
    this.paragraph = React.createRef();  
    this.controller = new ScrollMagic.Controller();
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





/*
      var currentTLback = new TimelineMax(); 
      currentTLback.staggerFrom(lines, 3, { yPercent: 150, ease: 'Expo.easeInOut' }, .15, "+=0")
*/

    var thisParagraph = this.paragraph.current
    var thisParagraphLines = thisParagraph.querySelectorAll('.ts-line');

    console.log("LINEEEES", thisParagraphLines )
/*

    var tween = TweenMax.staggerFromTo(thisParagraphLines, 0.5, {yPercent: 150,ease: 'Expo.easeInOut'}, 1);    

    new ScrollMagic.Scene({
      triggerElement: thisParagraph,
      duration: 400, // scroll distance
      offset: 200 // start this scene after scrolling for 50px
    })
      .setTween(tween)
      .setPin(thisParagraph) // pins the element for the the scene's duration
      .addTo(this.controller); // assign the scene to the controller
*/

  }

  render() {

    return (


            <p ref={this.paragraph} className={`${s.paragraph } ${this.props.className}`}>
              {this.props.children}
            </p>


    );
  }


};
