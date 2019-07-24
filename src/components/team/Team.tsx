import React, { useState, useRef, useEffect } from "react";
import { TweenMax, TimelineMax, Power3 } from "gsap";
import { Tween } from 'react-gsap';
import { Row } from 'components/row/Row';
import { Heading } from 'components/heading/Heading';
import ReactDOM from 'react-dom';
import { Link as InternalLink } from 'components/link/Link';
import s from './Team.scss';

var images = ['../images/pelcova.jpg', '../images/pelcova.jpg','../images/pelcova.jpg','../images/pelcova.jpg', '../images/pelcova.jpg','../images/pelcova.jpg']
var names = ["Alena Pelcova", "Alena Pelcova", "Alena Pelcova","Alena Pelcova", "Alena Pelcova", "Alena Pelcova" ]
var texts = ["Imagine you have a family with thousands of relatives. This is exactly the family Alena takes care of. Future Bakery family comprising of twenty five thousands people from the crowd. People with great energy and ideas. We know very well that none of us is as smart as we all together. Also, that we are all creative. It’s enough to give impulse and it rolls off. This world is full of creativity, fresh and - for somebody - weird ideas and insights. Our work is to work well with this and give it all a life.",
 "Imagine you have a family with thousands of relatives. This is exactly the family Alena takes care of. Future Bakery family comprising of twenty five thousands people from the crowd. People with great energy and ideas. We know very well that none of us is as smart as we all together. Also, that we are all creative. It’s enough to give impulse and it rolls off. This world is full of creativity, fresh and - for somebody - weird ideas and insights. Our work is to work well with this and give it all a life.",
 "Imagine you have a family with thousands of relatives. This is exactly the family Alena takes care of. Future Bakery family comprising of twenty five thousands people from the crowd. People with great energy and ideas. We know very well that none of us is as smart as we all together. Also, that we are all creative. It’s enough to give impulse and it rolls off. This world is full of creativity, fresh and - for somebody - weird ideas and insights. Our work is to work well with this and give it all a life.",
 "Imagine you have a family with thousands of relatives. This is exactly the family Alena takes care of. Future Bakery family comprising of twenty five thousands people from the crowd. People with great energy and ideas. We know very well that none of us is as smart as we all together. Also, that we are all creative. It’s enough to give impulse and it rolls off. This world is full of creativity, fresh and - for somebody - weird ideas and insights. Our work is to work well with this and give it all a life.",
 "Imagine you have a family with thousands of relatives. This is exactly the family Alena takes care of. Future Bakery family comprising of twenty five thousands people from the crowd. People with great energy and ideas. We know very well that none of us is as smart as we all together. Also, that we are all creative. It’s enough to give impulse and it rolls off. This world is full of creativity, fresh and - for somebody - weird ideas and insights. Our work is to work well with this and give it all a life.",
 "Imagine you have a family with thousands of relatives. This is exactly the family Alena takes care of. Future Bakery family comprising of twenty five thousands people from the crowd. People with great energy and ideas. We know very well that none of us is as smart as we all together. Also, that we are all creative. It’s enough to give impulse and it rolls off. This world is full of creativity, fresh and - for somebody - weird ideas and insights. Our work is to work well with this and give it all a life." ]
var linkNames = ["Alena", "Alena", "Alena","Alena", "Alena", "Alena" ]
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
    if ( this.activeIndex > 0 ) {
      this.setState ({activeIndex: this.activeIndex - 1})
    }
  }

  nextSlide(){      
    if ( this.activeIndex < this.props.arrayOfImages.length ) {
      this.setState ({activeIndex: this.activeIndex - 1})
    }
  }

  componentWillUnmount(){

  }

  render() {


    var members =  this.props.arrayOfImages.map((image, i) =>{
      return(
        <div className={s.member} key={'team'+i}>
          <Row>
            <div className={s.data}>
               <h4 className={s.name}>{names[i]}</h4>
              <p className={s.text}>{texts[i]}</p>
              <a className={s.link} href={linkURLs[i]}>CONTACT {linkNames[i]}</a>
            </div>
            <img src={images[i]} className={s.image}/>            
          </Row>
        </div>
      )
    })    


    return (

      <>
        {members}
        <Row>
          <div className={s.previous} onClick={this.prevSlide()}><span>&lt;</span>&nbsp;&nbsp;PREVIOUS</div>
          <div className={s.next} onClick={this.nextSlide()}>NEXT&nbsp;&nbsp;<span>&gt;</span></div>        
        </Row>
      </>

    );

  }
}

