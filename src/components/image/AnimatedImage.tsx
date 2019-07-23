import * as React from 'react';
import { TweenMax, TimelineMax, Power3 } from "gsap";
import { TransitionState } from "gatsby-plugin-transition-link";
import ReactDOM from 'react-dom';
import s from './AnimatedImage.scss';

export class AnimatedImage extends React.Component {

  constructor(props){
    super(props);
    this.image = React.createRef();         
  }


  componentDidMount(){

    var entering = ['entering'].includes(this.transitionStatus);
      var h2 = this.heading.current; 
      const split = new SplitText(
        'h2',
        {
          type: "lines",
          linesClass: "ts-line"
        }
      )

      var tslines = h2.querySelectorAll('.ts-line');
      var currentTL = new TimelineMax(); 
      currentTL.staggerFrom(tslines, 1, { yPercent: 100, opacity: 0, ease: 'Power3.easeInOut'}, .25, "+=0");    

  }


  componentWillUnmount(){
      var h2 = this.heading.current; 
      const split = new SplitText(
        'h2',
        {
          type: "lines",
          linesClass: "ts-line"
        }
      )

      var tslines = h2.querySelectorAll('.ts-line');
      var currentTL = new TimelineMax(); 
      currentTL.staggerTo(tslines, 1, { yPercent: 100, opacity: 0, ease: 'Power3.easeInOut'}, .25, "+=0");    
  }

  render() {

    return(     

    <img src={this.props.src} className={`${s.image} ${this.props.className}`} />

    )



  
}

}