import React, { useState, useRef, useEffect } from 'react';
import SplitText from 'utils/SplitText.min.js'
import ReactDOM from 'react-dom';
import ScrollMagic from "scrollmagic"
import { TweenMax, TimelineMax, Power3, Power2 } from "gsap";
import { Tween } from 'react-gsap';
import { TransitionState } from "gatsby-plugin-transition-link";
import { Controller, Scene } from 'react-scrollmagic';
import PropTypes from 'prop-types';
import s from './Paragraph.scss';

if (typeof window !== `undefined`) {
  require('imports-loader?define=>false!scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap')  
}

interface IIntroProps {
  children: React.ReactNode;
}

export class PlainParagraph extends React.Component {

  constructor(props){
    super(props);
    this.paragraph = React.createRef();    
  }

  componentDidMount(){

    TimelineMax.defaultOverwrite = false

    var thisParagraph = this.paragraph.current;

    const split = new SplitText(
      thisParagraph,
      {
        type: "lines",
        linesClass: "ts-line"
      }
    )

    let lines = split.lines
    console.log(lines)

    function test(){
      console.log("FIN")
    }

    var thisParagraphLines = thisParagraph.querySelectorAll('.ts-line'); 
    var ar = [].slice.call(thisParagraphLines);


    var exhaust = new TimelineMax({repeat: -1});
    exhaust.staggerFrom(thisParagraphLines, 2, { opacity: 0, yPercent: 200, ease: 'Expo.easeInOut',  stagger: {amount:.3, ease:Power2.easeIn}}).set(thisParagraphLines, {opacity:1}).addPause(9999999999999999999999999)

    var controller = new ScrollMagic.Controller();

    var scene = new ScrollMagic.Scene({
        triggerElement: thisParagraph,
        duration: '150%',
        triggerHook: 'onEnter'
      })
      .setTween(exhaust) // trigger a TweenMax.to tween
      .addTo(controller);
    scene.reverse(false);


  }

  render() {

    return (

      <p id="par" ref={this.paragraph} className={`${s.paragraph } ${this.props.className}`}>
        {this.props.children}
      </p>

    );
  }


};
