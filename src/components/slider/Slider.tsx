import React, { useState, useRef, useEffect } from "react";
import { TweenMax, TimelineMax, Power2} from "gsap";
import { Tween } from 'react-gsap';
import logo from 'assets/svg/bakery-logo.svg';
import ReactDOM from 'react-dom';


/*
 * A simple React component
 */
var startCarouselInterval;

var images = ['../images/image.jpg', '../images/dude.jpg','../images/desk.jpg']
var labels = ["Cats are Awesome 01", "Yes they are 02", "Yes they are 03" ]
var slidesCount = images.length;
var percentage = 0;
var multiplier = 100 / images.length;
console.log("percentage" + percentage);

export class Slider extends React.Component {
  componentDidMount(){
    
  }
  render() {
    return <div>
       <Carousel showButtons timeInBetween={500} arrayOfImages={images} />
    </div>;
  }
}
class Carousel extends React.Component {
  constructor(props){
    super(props);
    this.wrapperRef = React.createRef();
    this.childRef = React.createRef();    
    this.state ={
      which: slidesCount,
      showButtons: false,
      forward: true,
      firstSlide: false,
      lastSlide: false
    };
    this.titles = [];﻿
  }

  componentDidMount(){
    //console.log(this.childRef.current.imageRefActive.current, "parent");
    if(this.props.auto){
      this.startCarousel()
    };
    if(this.props.showButtons){
      this.setState({showButtons:true})
    };
  }

  startCarousel(){
    startCarouselInterval  = setInterval(this.nextSlide.bind(this), this.props.timeInBetween);
  }


  prevSlide(){

    console.log(this.state.which);

    percentage = this.state.forward ? percentage + multiplier : (this.state.which < slidesCount ? percentage + multiplier : multiplier);

    var image = this.wrapperRef.current; 

    var tl = new TimelineMax({repeat:0});
    tl.to(image , 2 , { top: `${percentage}%`, ease: 'Expo.easeOut'});

    console.log("PREV", "percentage", percentage, "this.state.which", this.state.which, "slidesCount", slidesCount, "this.state.forward", this.state.forward); 

    this.setState({
      which: this.state.which < slidesCount ? ++this.state.which : slidesCount,
      forward: false 
    })

  }

  nextSlide(){

    console.log(this.state.which);    

    percentage = !this.state.forward ? percentage - multiplier : (this.state.which > 0 ? percentage - multiplier : 0 - slidesCount * multiplier);

    var image = this.wrapperRef.current; 
    //var singleImage = this.childRef.current.imageRefActive.current;

    var tl = new TimelineMax({repeat:0});
    tl.to( image , 2 , { top: `${percentage}%`, ease: 'Expo.easeOut' }); 
    //var ntl = new TimelineMax({repeat:0});    
    //ntl.to( singleImage, 1, {backgroundSize: '120%', ease: 'Expo.easeOut'}).to( singleImage, 1, {backgroundSize: '100%', ease: 'Expo.easeOut'});

    console.log("NEXT", "percentage", percentage, "this.state.which", this.state.which, "slidesCount", slidesCount, "this.state.forward", this.state.forward); 

    this.setState({
      which: this.state.which > 0 ? --this.state.which : 0,
      forward: true       
    })

  }

  componentWillUnmount(){
    clearInterval(startCarouselInterval);
  }

  render() {

    var carouselLeftButton = (
      <div style={{display:'flex', zIndex:9999, alignItems:'center', alignContent:'center', height:'100vh'}}>
      <button onClick={this.prevSlide.bind(this)} className="btn btn-primary">+</button>
      </div>)

    var carouselRightButton = (
      <div style={{display:'flex', zIndex:9999, alignItems:'center', alignContent:'center', height:'100vh', marginLeft:'auto'}}>
      <button onClick={this.nextSlide.bind(this)} className="btn btn-primary">+</button>
      </div>)

    var carouselImages =  this.props.arrayOfImages.map((image, i) =>{
      return(
        <CarouselImage ref={i => this.titles.push(i)}﻿  key={i} label={labels[i]} timeInBetween={this.props.timeInBetween} whichOne={i} src={image} position={i*100} />
      )   
    })

    return (
      <div style={{display:'flex',flexDirection:'row',position:'relative'}}>
        {this.state.showButtons  || !this.props.auto ? carouselLeftButton : null  } 
        <div ref={this.wrapperRef} style={{position:'absolute', bottom: 0, top: '0%', left: 0, right: 0, width: '100%', height: '100%' }}>{carouselImages}</div>
        {this.state.showButtons  || !this.props.auto ? carouselRightButton : null  } 
      </div>
    );

  }
}

class CarouselImage extends React.Component {

  constructor(props) {
    super(props);
    this.state = { imageStatus: null };
    this.imageRefActive = React.createRef();
  }
 
  _handleImageLoaded() {
    this.setState({ imageStatus: 'loaded' });
  }

  componentDidMount(){
    //console.log(this.props.children, "child");
  }

  _handleImageErrored() {
    this.setState({ imageStatus: 'failed' });
  }

  render() {
    var pos =  `${this.props.position}`;
    var src = `${this.props.src}`;
    var srcTo = ' no-repeat center center';
    var srcToFull = 'url(' +  src + ')'+  srcTo;
    //console.log(srcToFull,"srcToFull",pos,"POS");
    return (
      <div style={{width: '100%', height: '100%', display:'flex', flex:1, position: 'absolute'}}>
        <img ref={this.imageRefActive} 
         style={{ zIndex:-1, opacity:1, background:srcToFull, backgroundSize: '100%', position: 'absolute', top: `${this.props.position}%`, left: 0, right: 0, bottom: 0, margin: 'auto', width: '50%', height: '50%'}}
          onLoad={this._handleImageLoaded.bind(this)}
          onError={this._handleImageErrored.bind(this)}
          />
      </div>
    );
  }

}

