import React, { useState, useRef, useEffect } from "react";
import { TweenMax, TimelineMax } from "gsap";
import { Tween } from 'react-gsap';
import logo from 'assets/svg/bakery-logo.svg';
import ReactDOM from 'react-dom';


/*
 * A simple React component
 */
var startCarouselInterval;

var images = ['http://lorempixel.com/1000/1000/sports/', 'http://lorempixel.com/1000/1000/sports/', 'http://lorempixel.com/1000/1000/sports/', 'http://lorempixel.com/1000/1000/sports/', 'http://lorempixel.com/1000/1000/sports/']
var labels = ["Cats are Awesome 01", "Yes they are 02", "Yes they are 03","Yes they are 04", "Yes they are 05"  ]

export class Slider extends React.Component {
  componentDidMount(){
    
  }
  render() {
    return <div>
       <Carousel showButtons timeInBetween={3000} arrayOfImages={images} />
    </div>;
  }
}
class Carousel extends React.Component {
  constructor(props){
    super(props)
    this.state ={
      which:0,
      showButtons:false
    };
  }
  componentDidMount(){
    if(this.props.auto){
      this.startCarousel()
    }
    if(this.props.showButtons){
      this.setState({showButtons:true})
    }
  }
  startCarousel(){
    startCarouselInterval  = setInterval(this.nextSlide.bind(this), this.props.timeInBetween);
  }
  nextSlide(){
    if(startCarouselInterval){
      clearInterval(startCarouselInterval);
     
   setTimeout(() =>{
       startCarouselInterval  = setInterval(this.nextSlide.bind(this), this.props.timeInBetween);
    }, 2000);
    }
        
    if(this.state.which < images.length - 1){
      this.setState({
      which:++this.state.which
    })
    }else{
      this.setState({
      which:0
    })
    }
    console.log(this.state.which)
  }
  componentWillUnmount(){
    clearInterval(startCarouselInterval);

  }
  prevSlide(){

    console.log(this.state.which, images.length - 1)
      if(this.state.which !== 0){
      this.setState({
      which:--this.state.which
    })
    }else{
      this.setState({
      which:images.length - 1
    })
    }
  }
  render() {
    var carouselLeftButton = (
      <div style={{display:'flex',zIndex:9999,alignItems:'center',alignContent:'center',height:'100vh'}}><button onClick={this.prevSlide.bind(this)} className="btn btn-primary"><i className="fa fa-arrow-left"></i></button>
      </div>)
     var carouselRightButton = (
      <div style={{display:'flex',zIndex:9999,alignItems:'center',alignContent:'center',height:'100vh',marginLeft:'auto'}}>
      <button onClick={this.nextSlide.bind(this)} className="btn btn-primary"><i className="fa fa-arrow-right"></i></button>
      </div>)
   var carouselImages =  this.props.arrayOfImages.map((image, i) =>{
     
      if(i === this.state.which){  
        return(
          <CarouselImage key={i} label={labels[i]} timeInBetween={this.props.timeInBetween} whichOne={i} src={image} />
        )   
      }
    })
    return (<div style={{display:'flex',flexDirection:'row',position:'relative'}}>
       {this.state.showButtons  || !this.props.auto ? carouselLeftButton : null  } 
      <div>{carouselImages}</div>
         {this.state.showButtons  || !this.props.auto ? carouselRightButton : null  } 
    </div>);
  }
}
class CarouselImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { imageStatus: null };
    this.imageRef = React.createRef();    
  }
 
  _handleImageLoaded() {
    this.setState({ imageStatus: 'loaded' });
  }
  componentDidMount(){
    var image = this.imageRef.current; 
    var tl = new TimelineMax({repeat:0});
    tl.to(image , 3 , {opacity:1, top:'0%' ,ease:Back.easeInOut }); 
    console.log(tl);
  }
  componentWillUpdate(){
    var image = this.imageRef.current; 
    var tl = new TimelineMax({repeat:0});
    tl.to(image , 3 , {opacity:1, top:'50%' ,ease:Back.easeInOut }); 
    console.log(tl);
  }

  _handleImageErrored() {
    this.setState({ imageStatus: 'failed' });
  }

  render() {
    var src = `${this.props.src}`;
    var srcTo = ' no-repeat center center';
    var srcToFull = 'url(' +  src + ')'+  srcTo;
    console.log(srcToFull,"srcToFull")
    return (
      <div style={{width: '100%', height: '100%',display:'flex',flex:1}}>
        <img ref={this.imageRef} 
         style={{zIndex:-1,opacity:0,background:srcToFull, backgroundSize: 'cover',position: 'absolute', top: '-100%', left: 0, right: 0, bottom: 0, margin: 'auto', minWidth: '100%', minHeight: '100%'}}
          onLoad={this._handleImageLoaded.bind(this)}
          onError={this._handleImageErrored.bind(this)}
          />
        <div style={{zIndex:999,padding:5,position:'absolute',height:30,left:0,bottom:0,width:'100%',textAlign:'center',margin:'auto',background:'black'}}><h1 style={{margin:0}}>{this.props.label}</h1></div>
      </div>
    );
  }
}

