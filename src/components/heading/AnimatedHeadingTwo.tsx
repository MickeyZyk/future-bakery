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

  }

  componentWillUnmount(){

  }

  render() {
    return(
      <TransitionState>
        {({ transitionStatus }) => {       
          return (
            <Controller refreshInterval={1}>
              <Scene duration={'50%'} triggerHook={0.75}>
                <Tween 
                  staggerFrom={{ yPercent: 75, opacity: 0, ease: 'Power3.easeInOut'}}
                  stagger={2}
                  duration={2}
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