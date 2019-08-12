import React, { useState, useRef, useEffect } from 'react';
import SplitText from 'utils/SplitText.min.js'
import ReactDOM from 'react-dom';
import ScrollMagic from 'scrollmagic'
import 'imports-loader?define=>false!scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap';
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

/*
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
    exhaust.staggerFrom(thisParagraphLines, 2, { opacity: 0, yPercent: 200, ease: 'Expo.easeOut'}, .3).set(thisParagraphLines, {opacity:1}).addPause(9999999999999999999999999)



    //var tween = TweenMax.staggerFrom(thisParagraphLines, 3, { opacity: 0, yPercent: 150, ease: 'Expo.easeInOut' }, .15) 

    var scene = new ScrollMagic.Scene({
        triggerElement: thisParagraph,
        duration: '100%',
        triggerHook: 'onEnter'
      })
      .setTween(exhaust) // trigger a TweenMax.to tween
      .addTo(this.controller);
    scene.reverse(false);


/*
      var currentTLback = new TimelineMax(); 
      currentTLback.staggerFrom(lines, 3, { yPercent: 150, ease: 'Expo.easeInOut' }, .15, "+=0")

*/
/*
    var tween = TweenMax.to(thisParagraph, 1, {yPercent: 150, ease: 'Expo.easeInOut', paused: true}); 
    //console.log(tween);   

    var scene = new ScrollMagic.Scene({
      triggerElement: thisParagraph,
      duration: 400, // scroll distance
      offset: 200 // start this scene after scrolling for 50px
    })
      .setTween(tween)
      .addTo(this.controller); // assign the scene to the controller
*/
  }

  render() {

    return (

      <p id="par" ref={this.paragraph} className={`${s.paragraph } ${this.props.className}`}>
        {this.props.children}
      </p>

    );
  }


};
