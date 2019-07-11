import React, { Component } from 'react';
import { Tween } from 'react-gsap';

import s from './Slider.scss';

class Slider extends Component {


  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
    // console.log(this.state);    
  }

  tween;
  

  componentDidMount() {
    // tween is now a TweenMax class instance
    const tween = this.tween.getGSAP();
    
    // You can call any method on it
    this.state.isToggleOn ? console.log('true') : console.log('false');

  }

  render() {
    return(

      <div className={`${s.slider_window} ${this.props.className}`}>      
        <Tween
          to={{
            scale: 4,
            x: 200,
            y: 200,
          }}
          duration={2}
          ease="Back.easeOut"
          ref={ref => this.tween = ref}
        >

            <p onClick={this.handleClick}>PEEKING!</p>

        </Tween>
      </div>

    );
  }
}

export default Slider;