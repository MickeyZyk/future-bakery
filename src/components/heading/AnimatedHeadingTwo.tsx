import * as React from 'react';
import { TweenMax, TimelineMax, Power3 } from "gsap";
import { Tween, SplitWords } from 'react-gsap'
import { TransitionState } from "gatsby-plugin-transition-link";
import { Controller, Scene } from 'react-scrollmagic';
import SplitText from 'utils/SplitText.min.js'
import ReactDOM from 'react-dom';
import s from './AnimatedHeading.scss';

export class AnimatedHeadingTwo extends React.Component {

  constructor(props){
    super(props);
    this.heading = React.createRef();         
  }

  componentDidMount(){

    /*
      console.log(this.props);
      var entering = ['entering'].includes(this.transitionStatus);    
      var exiting = ['exiting'].includes(this.transitionStatus);          
      var h2 = this.heading.current; 
      const split = new SplitText(
        'h2',
        {
          type: "lines",
          linesClass: "ts-line"
        }
      )

      //var tslines = h2.querySelectorAll('.ts-line');
      var currentTL = new TimelineMax(); 

        //currentTL.staggerFrom(tslines, 1.25, { yPercent: 100, opacity: 0, ease: 'Power3.easeInOut'}, .25, "+=0"); 

        */

  }

  componentWillUnmount(){

  }

  render() {
    return(
      <TransitionState>
        {({ transitionStatus }) => {       
          return (
            <Controller refreshInterval={1}>
              <Scene duration={'200%'} triggerHook={'onEnter'}>
                <Tween
                  staggerFrom={{ yPercent: 100, opacity: 0 }}
                  stagger={0.5}
                  duration={0.3}
                  ease="Power3.easeInOut"
                >
                  <SplitWords>
                    <h2 ref={this.heading} className={`${s.heading} ${this.props.className}`}>
                      {this.props.children}
                    </h2>
                  </SplitWords>
                </Tween>
              </Scene>
            </Controller>                  
          )
        }}
      </TransitionState>
    )



  
}

}