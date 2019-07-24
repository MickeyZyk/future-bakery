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
      var img = this.image.current; 
      var currentTL = new TimelineMax(); 
      currentTL.from(img, 1, { opacity: 0, ease: 'Power3.easeInOut'});    

  }

  componentWillUnmount(){
  
  }

  render() {
    return( 
      <img ref={this.image} src={this.props.src} className={`${s.image} ${this.props.className}`} />
    )
}

}