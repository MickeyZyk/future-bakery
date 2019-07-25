import React, { useState, useRef, useEffect } from "react";
import { TweenMax, TimelineMax, Power3 } from "gsap";
import { Tween } from 'react-gsap';
import { Row } from 'components/row/Row';
import { Heading } from 'components/heading/Heading';
import ReactDOM from 'react-dom';
import { Link as InternalLink } from 'components/link/Link';
import s from './Team.scss';

var images = ['../images/pelcova.jpg', '../images/bw_pelcova.jpg','../images/pelcova.jpg','../images/bw_pelcova.jpg', '../images/bw_pelcova.jpg','../images/pelcova.jpg']
var names = ["Alena Pelcova", "Pelcova Alena", "Alena Pelcova","Pelcova Alena ", "Alena Pelcova", "Pelcova Alena" ]
var texts = ["Imagine you have a family with thousands of relatives. This is exactly the family Alena takes care of. Future Bakery family comprising of twenty five thousands people from the crowd. People with great energy and ideas. We know very well that none of us is as smart as we all together. Also, that we are all creative. It’s enough to give impulse and it rolls off. This world is full of creativity, fresh and - for somebody - weird ideas and insights. Our work is to work well with this and give it all a life.",
 "Imagine you have a family with thousands of relatives. This is exactly the family Alena takes care of. Future Bakery family comprising of twenty five thousands people from the crowd. People with great energy and ideas. We know very well that none of us is as smart as we all together. Also, that we are all creative. It’s enough to give impulse and it rolls off. This world is full of creativity, fresh and - for somebody - weird ideas and insights. Our work is to work well with this and give it all a life.",
 "Imagine you have a family with thousands of relatives. This is exactly the family Alena takes care of. Future Bakery family comprising of twenty five thousands people from the crowd. People with great energy and ideas. We know very well that none of us is as smart as we all together. Also, that we are all creative. It’s enough to give impulse and it rolls off. This world is full of creativity, fresh and - for somebody - weird ideas and insights. Our work is to work well with this and give it all a life.",
 "Imagine you have a family with thousands of relatives. This is exactly the family Alena takes care of. Future Bakery family comprising of twenty five thousands people from the crowd. People with great energy and ideas. We know very well that none of us is as smart as we all together. Also, that we are all creative. It’s enough to give impulse and it rolls off. This world is full of creativity, fresh and - for somebody - weird ideas and insights. Our work is to work well with this and give it all a life.",
 "Imagine you have a family with thousands of relatives. This is exactly the family Alena takes care of. Future Bakery family comprising of twenty five thousands people from the crowd. People with great energy and ideas. We know very well that none of us is as smart as we all together. Also, that we are all creative. It’s enough to give impulse and it rolls off. This world is full of creativity, fresh and - for somebody - weird ideas and insights. Our work is to work well with this and give it all a life.",
 "Imagine you have a family with thousands of relatives. This is exactly the family Alena takes care of. Future Bakery family comprising of twenty five thousands people from the crowd. People with great energy and ideas. We know very well that none of us is as smart as we all together. Also, that we are all creative. It’s enough to give impulse and it rolls off. This world is full of creativity, fresh and - for somebody - weird ideas and insights. Our work is to work well with this and give it all a life." ]
var linkNames = ["ALENA", "ALENA", "ALENA","ALENA", "ALENA", "ALENA" ]
var linkURLs = ["mailto:alena.pelcova@futurebakers.com", "mailto:alena.pelcova@futurebakers.com", "mailto:alena.pelcova@futurebakers.com","mailto:alena.pelcova@futurebakers.com", "mailto:alena.pelcova@futurebakers.com", "mailto:alena.pelcova@futurebakers.com" ]



export const Team = () => { 
  return( 
    <div className={s.team}>
      <Heading className={s.heading}>Meet the team</Heading>
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
    this.prevSlide = this.prevSlide.bind(this); 
    this.nextSlide = this.nextSlide.bind(this);     

  }


  componentDidMount(){

  }

  prevSlide(){   

    if ( this.state.activeIndex > 0 ) {
    console.log("PREV",this.state.activeIndex )      
      this.setState({activeIndex: this.state.activeIndex - 1}, () => {console.log(this.state.activeIndex)})
    }
  }

  nextSlide(){    
    if ( this.state.activeIndex < this.props.arrayOfImages.length-1 ) {
        console.log("next",this.state.activeIndex,  this.props.arrayOfImages.length)
      this.setState({activeIndex: this.state.activeIndex + 1})
    }
  }

  componentWillUnmount(){

  }

  render() {


    var members =  this.props.arrayOfImages.map((image, i) =>{
      return(
        <div className={s.member} key={'team'+i} position={i}>
          <div className={`${s.data} ${this.state.activeIndex == i ? s.current_data : ''}`}>
            <h4 className={s.name}>{names[i]}</h4>
            <p className={s.text}>{texts[i]}</p>
            <a className={s.link} href={linkURLs[i]}>CONTACT {linkNames[i]}&nbsp;&nbsp;<span>&gt;</span></a>
          </div>
        </div>
      )
    })  

    var imagesStrip =  this.props.arrayOfImages.map((image, j) =>{
      return(
        <img className={s.image} src={image} style={{ zIndex : -j , right: -j*530 }} key={'image'+j}/>
      )
    }) 

    return (
      <>
        {members}
          <div className={s.window}>
              <div className={s.bar}></div>
              {imagesStrip}
          </div>        

        <Row>
          <div className={s.previous} onClick={this.prevSlide.bind(this)}><span>&lt;</span>&nbsp;&nbsp;PREVIOUS</div>
          <div className={s.next} onClick={this.nextSlide.bind(this)}>NEXT&nbsp;&nbsp;<span>&gt;</span></div>        
        </Row>
      </>
    );

  }
}

