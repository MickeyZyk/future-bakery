import React, { useState, useRef, useEffect } from "react";
import { TweenMax, TimelineMax, Power3 } from "gsap";
import { Tween } from 'react-gsap';
import { Row } from 'components/row/Row';
import { Paragraph } from 'components/paragraph/Paragraph';
import ReactDOM from 'react-dom';
import { Link as InternalLink } from 'components/link/Link';
import LinkArrow from 'assets/svg/link_arrow.svg'
import s from './Authors.scss';
import Circle from 'assets/svg/circle.svg';
import FullCircle from 'assets/svg/full_circle.svg';

export class Authors extends React.Component {

  constructor(props){
    super(props);
  }

  componentDidMount(){
    //console.log(this.props)
  }

  render() {
  return( 
      <AuthorCarousel texts={this.props.texts} names={this.props.names} />
  )

  }  

}

class AuthorCarousel extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      activeIndex: 0,
    };    
    //this.strip = React.createRef();
    this.setActive = this.setActive.bind(this); 
  }


  componentDidMount(){

    //console.log("AUTH PROPPS", this.props)

  }

  setActive(i){

      //console.log("DOT NO", i.index )    

      let current = i.currentTarget ? i.currentTarget.getAttribute('data-id') : 0; 

      this.setState({activeIndex: current}, () => {

        //console.log("INDEX no", current, this.state.activeIndex ) 

      })



  }

  componentWillUnmount(){

  }

  render() {

    var texts = this.props.texts
    var names = this.props.names

    var authorNames = names.map((name, i) =>{
      return(

      <Tween duration={2} key={'name'+i} 
      to={ this.state.activeIndex == i ? { opacity: 1, ease: 'Power3.easeInOut' } : { opacity: 0, ease: 'Power3.easeInOut' }  } >          

        <div className={s.name}>
          <p className="author_names" position={i}>{names[i]}</p>
        </div>


      </Tween>

      )
    })      

    var authorTexts = texts.map((text, i) =>{
      return(

      <Tween duration={2} key={'text'+i} 
      to={ this.state.activeIndex == i ? { opacity: 1, ease: 'Power3.easeInOut' } : { opacity: 0, ease: 'Power3.easeInOut' }  } >          

        <div className={s.text}>
          <Paragraph position={i}>{texts[i]}</Paragraph>
        </div>


      </Tween>

      )
    })  


    var dots = texts.map((image, i) =>{
      return(
        <div className='dot' key={i} data-id={i} onClick={this.setActive.bind(this)}>
          <Dot index={i} isActive={ this.state.activeIndex == i }/>
        </div>
      )
    })     


    return (
      <div className={s.texts}>
        {authorNames}      
        {authorTexts}
        <div className={s.dots}>
          {dots}
        </div>
      </div>
    );

  }
}

class Dot extends React.Component {

  constructor (props){
    super(props);
  }

  render() {
    return (
        <div>{this.props.isActive ? <FullCircle/> : <Circle/>}</div>
    );
  }

}
