import React, { useState, useRef, useEffect } from "react";
import { TweenMax, TimelineMax, Power3 } from "gsap";
import { Tween } from 'react-gsap';
import { Row } from 'components/row/Row';
import { Paragraph } from 'components/paragraph/Paragraph';
import { AnimatedHeadingTwo  } from 'components/heading/AnimatedHeadingTwo';
import ReactDOM from 'react-dom';
import { LeftLink } from 'components/link/LeftLink';
import { Link } from 'components/link/Link';
import LinkArrow from 'assets/svg/link_arrow.svg'
import s from './DarkTeam.scss';
import { Location } from '@reach/router';
import _ from 'lodash';

export class DarkTeam extends React.Component {

  constructor(props){
    super(props);
  }

  componentDidMount(){
  //console.log(this.props)
  }

  render() {
  return( 
    <div className={`${s.dark_team} ${this.props.className}`} >
      <Member 
      members={this.props.members} 
      links={this.props.links} 
      texts={this.props.texts} 
      images={this.props.images} 
      arrayOfImages={this.props.images} />
    </div> 
  )

  }  

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
    //console.log("PREV",this.state.activeIndex )      
      this.setState({activeIndex: this.state.activeIndex - 1}, () => {

        var imageStrip = this.strip.current; 
        var children = imageStrip.querySelectorAll('img');
      //console.log('INDEX', this.state.activeIndex, 'MOVE', (this.state.activeIndex) * -27.77778, );    

        var currentTL = new TimelineMax(); 
        currentTL.to(imageStrip, 0.5, { opacity: 1 }).to(imageStrip, 1.75, { xPercent: (this.state.activeIndex ) * -27.77778, ease: 'Expo.easeInOut' });
        var currentTLZoom = new TimelineMax(); 
        currentTLZoom.to(children, .5, {scale: 1, xPercent: 0}).to(children, .25, {scale: 1.04, transformOrigin:'right 50%'}).to(children, 1.5, {scale: 1, xPercent: 0});

      })

    }

  }

  nextSlide(){    
    if ( this.state.activeIndex < this.props.arrayOfImages.length - 1 ) {
    //console.log("next",this.state.activeIndex,  this.props.arrayOfImages.length)
      this.setState({activeIndex: this.state.activeIndex + 1}, () => {

        var imageStrip = this.strip.current; 
        var children = imageStrip.querySelectorAll('img');
      //console.log('INDEX', this.state.activeIndex, 'MOVE', (this.state.activeIndex + 1) * -27.77778, );  

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

     

var names = this.props.members
var texts = this.props.texts
var linkNames = ["ALENA", "ALENA", "ALENA","ALENA", "ALENA", "ALENA" ]
var linkURLs = this.props.links

//var firstWord = _.first( str.split(" ");


    var members = this.props.arrayOfImages.map((image, i) =>{
      return(
        <div className={s.member} key={'team'+i} position={i}>
          <div className={`${s.data} ${this.state.activeIndex == i ? s.current_data : ''}`}>
            <h4 className="dark_team_name">{names[i]}</h4>
            <Paragraph className={s.text}>{texts[i]}</Paragraph>
            <a className={s.link} href={'mailto:' + linkURLs[i]}>CONTACT {_.first( names[i].split(" ")).toUpperCase()}</a>
          </div>
        </div>
      )
    })  

    var imagesStrip = this.props.arrayOfImages.map((image, j) =>{
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


          <Location>
            {({ location }) => (

            <Row>
              <LeftLink arrow bakers to={location.pathname} className={s.team_previous} onClick={this.prevSlide.bind(this)}>{location.pathname.includes('cz') ? 'PŘEDCHOZÍ' : 'PREVIOUS'}</LeftLink>
              <Link arrow bakers to={location.pathname} className={s.team_next} onClick={this.nextSlide.bind(this)}>{location.pathname.includes('cz') ? 'DALŠÍ' : 'NEXT'}</Link>     
            </Row>

            )}
          </Location> 



      </>
    );

  }
}

