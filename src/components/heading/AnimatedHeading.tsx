import * as React from 'react';
import { TweenMax, TimelineMax, Power3 } from "gsap";
import { TransitionState } from "gatsby-plugin-transition-link";
import SplitText from 'utils/SplitText.min.js'
import ReactDOM from 'react-dom';
import s from './AnimatedHeading.scss';

export class AnimatedHeading extends React.Component {

  constructor(props){
    super(props);
    this.heading = React.createRef();         
  }

  componentDidMount(){
      //console.log(this.props);
      var entering = ['entering'].includes(this.transitionStatus);    
      var exiting = ['exiting'].includes(this.transitionStatus);          
      var h2 = this.heading.current; 
      var state 
      const split = new SplitText(
        'h2',
        {
          type: "lines",
          linesClass: "ts-line"
        }
      )

      var tslines = h2.querySelectorAll('.ts-line');
      var currentTL = new TimelineMax(); 

        currentTL.staggerFrom(tslines, 2.5, { yPercent: -100, ease: 'Power3.easeOut'}, .15, "+=1.5").staggerFrom(tslines, 1, {  opacity: 0, ease: 'Power3.easeOut'}, .15, "-=3"); 

  }

  componentWillUnmount(){

  }

  render() {
    return(
      <TransitionState>
        {({ transitionStatus }) => {       
          return (
            <h2 ref={this.heading} className={`${s.heading} ${this.props.className}`}>{this.props.children}</h2>
          )
        }}
      </TransitionState>
    )



  
}

}