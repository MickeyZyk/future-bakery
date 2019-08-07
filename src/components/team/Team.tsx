import React, { useState, useRef, useEffect } from "react";
import { TweenMax, TimelineMax, Power3 } from "gsap";
import { Tween } from 'react-gsap';
import { Row } from 'components/row/Row';
import { AnimatedHeadingTwo  } from 'components/heading/AnimatedHeadingTwo';
import ReactDOM from 'react-dom';
import { Link as InternalLink } from 'components/link/Link';
import LinkArrow from 'assets/svg/link_arrow.svg'
import s from './Team.scss';

var images = ['../images/pelcova.jpg', '../images/bw_pelcova.jpg','../images/pelcova.jpg','../images/bw_pelcova.jpg', '../images/pelcova.jpg','../images/bw_pelcova.jpg']
var names = ["Alena Pelcova", "Pelcova Alena", "Alena Pelcova","Pelcova Alena ", "Alena Pelcova", "Pelcova Alena" ]
var texts = ["Imagine you have a family with thousands of relatives. This is exactly the family Alena takes care of. Future Bakery family comprising of twenty five thousands people from the crowd. People with great energy and ideas. We know very well that none of us is as smart as we all together. Also, that we are all creative. It’s enough to give impulse and it rolls off. This world is full of creativity, fresh and - for somebody - weird ideas and insights. Our work is to work well with this and give it all a life.",
 "Imagine you have a family with thousands of relatives. This is exactly the family Alena takes care of. Future Bakery family comprising of twenty five thousands people from the crowd. People with great energy and ideas. We know very well that none of us is as smart as we all together. Also, that we are all creative. It’s enough to give impulse and it rolls off. This world is full of creativity, fresh and - for somebody - weird ideas and insights. Our work is to work well with this and give it all a life.",
 "Imagine you have a family with thousands of relatives. This is exactly the family Alena takes care of. Future Bakery family comprising of twenty five thousands people from the crowd. People with great energy and ideas. We know very well that none of us is as smart as we all together. Also, that we are all creative. It’s enough to give impulse and it rolls off. This world is full of creativity, fresh and - for somebody - weird ideas and insights. Our work is to work well with this and give it all a life.",
 "Imagine you have a family with thousands of relatives. This is exactly the family Alena takes care of. Future Bakery family comprising of twenty five thousands people from the crowd. People with great energy and ideas. We know very well that none of us is as smart as we all together. Also, that we are all creative. It’s enough to give impulse and it rolls off. This world is full of creativity, fresh and - for somebody - weird ideas and insights. Our work is to work well with this and give it all a life.",
 "Imagine you have a family with thousands of relatives. This is exactly the family Alena takes care of. Future Bakery family comprising of twenty five thousands people from the crowd. People with great energy and ideas. We know very well that none of us is as smart as we all together. Also, that we are all creative. It’s enough to give impulse and it rolls off. This world is full of creativity, fresh and - for somebody - weird ideas and insights. Our work is to work well with this and give it all a life.",
 "Imagine you have a family with thousands of relatives. This is exactly the family Alena takes care of. Future Bakery family comprising of twenty five thousands people from the crowd. People with great energy and ideas. We know very well that none of us is as smart as we all together. Also, that we are all creative. It’s enough to give impulse and it rolls off. This world is full of creativity, fresh and - for somebody - weird ideas and insights. Our work is to work well with this and give it all a life." ]
var linkNames = ["ALENA", "ALENA", "ALENA","ALENA", "ALENA", "ALENA" ]
var linkURLs = ["mailto:alena.pelcova@futurebakers.com", "mailto:alena.pelcova@futurebakers.com", "mailto:alena.pelcova@futurebakers.com","mailto:alena.pelcova@futurebakers.com", "mailto:alena.pelcova@futurebakers.com", "mailto:alena.pelcova@futurebakers.com" ]



export const Team = ({props, className}) => { 
  return( 
    <div className={`${s.team} ${className}`} >
      <Member arrayOfImages={images} />
    </div> 
  )
}

class Member extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      activeIndex: 0,
    };    
    this.strip = React.createRef(); 
    this.prevSlide = this.prevSlide.bind(this); 
    this.nextSlide = this.nextSlide.bind(this);    

  }


  componentDidMount(){

  }

  prevSlide(){
    if ( this.state.activeIndex > 0 ) {
      console.log("PREV",this.state.activeIndex )      
      this.setState({activeIndex: this.state.activeIndex - 1}, () => {

        var imageStrip = this.strip.current; 
        var children = imageStrip.querySelectorAll('img');
        console.log('INDEX', this.state.activeIndex, 'MOVE', (this.state.activeIndex) * -27.77778, );    

        var currentTL = new TimelineMax(); 
        currentTL.to(imageStrip, 0.5, { opacity: 1 }).to(imageStrip, 1.75, { xPercent: (this.state.activeIndex ) * -27.77778, ease: 'Expo.easeInOut' });
        var currentTLZoom = new TimelineMax(); 
        currentTLZoom.to(children, .5, {scale: 1, xPercent: 0}).to(children, .25, {scale: 1.04, transformOrigin:'right 50%'}).to(children, 1.5, {scale: 1, xPercent: 0});

      })

    }

  }

  nextSlide(){    
    if ( this.state.activeIndex < this.props.arrayOfImages.length - 1 ) {
      console.log("next",this.state.activeIndex,  this.props.arrayOfImages.length)
      this.setState({activeIndex: this.state.activeIndex + 1}, () => {

        var imageStrip = this.strip.current; 
        var children = imageStrip.querySelectorAll('img');
        console.log('INDEX', this.state.activeIndex, 'MOVE', (this.state.activeIndex + 1) * -27.77778, );  

        var currentTL = new TimelineMax(); 
        currentTL.to(imageStrip, 0.5, { opacity: 1 }).to(imageStrip, 1.75, { xPercent: (this.state.activeIndex ) * -27.77778, ease: 'Expo.easeInOut' });
        var currentTLZoom = new TimelineMax(); 
        currentTLZoom.to(children, .5, {scale: 1, xPercent: 0}).to(children, .25, {scale: 1.04, transformOrigin:'right 50%'}).to(children, 1.5, {scale: 1, xPercent: 0});

      })

    }

  }

  componentWillUnmount(){

  }

  render() {


    var members = this.props.arrayOfImages.map((image, i) =>{
      return(
        <div className={s.member} key={'team'+i} position={i}>
          <div className={`${s.data} ${this.state.activeIndex == i ? s.current_data : ''}`}>
            <h4 className={s.name}>{names[i]}</h4>
            <p className={s.text}>{texts[i]}</p>
            <a className={s.link} href={linkURLs[i]}>CONTACT {linkNames[i]}&nbsp;&nbsp;<LinkArrow className="link_arrow relative"/></a>
          </div>
        </div>
      )
    })  

    var imagesStrip =  this.props.arrayOfImages.map((image, j) =>{
      return(
        <img className={s.image} src={image} style={{ zIndex : -j , right: `${-j * 27.77778}%` }} key={'image'+j}/>
      )
    }) 

    return (
      <>
        {members}
          <div className={s.window}>
              <div className={s.before_bar}></div>            
              <div className={s.strip} ref={this.strip}>
                {imagesStrip}
              </div>
              <div className={s.after_bar}></div>              
          </div>        

        <Row>
          <div className="team_previous" onClick={this.prevSlide.bind(this)}><span>&lt;</span>&nbsp;&nbsp;PREVIOUS</div>
          <div className="team_next" onClick={this.nextSlide.bind(this)}>NEXT&nbsp;&nbsp;<LinkArrow className="link_arrow relative"/></div>        
        </Row>
      </>
    );

  }
}

