import React, { useState, useRef, useEffect } from "react";
import { TweenMax, TimelineMax } from "gsap";
import { Tween } from 'react-gsap';
import logo from 'assets/svg/bakery-logo.svg';
import ReactDOM from 'react-dom';


/*
 * A simple React component
 */
var startCarouselInterval;

var images = ['../images/image.jpg', '../images/dude.jpg','../images/image.jpg', '../images/dude.jpg', '../images/image.jpg']
var labels = ["Cats are Awesome 01", "Yes they are 02", "Yes they are 03","Yes they are 04", "Yes they are 05"  ]

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

  prevSlide(){

    //console.log(this.state.which + 1, images.length) 

    if(this.state.which !== 0){
      this.setState({
        which:--this.state.which
      })
    } else {
      this.setState({
        which:images.length - 1
      })
    }
  }

  nextSlide(){

    //console.log(this.state.which + 1, images.length)

    if(startCarouselInterval){
      clearInterval(startCarouselInterval);
     
      setTimeout(() =>{
         startCarouselInterval  = setInterval(this.nextSlide.bind(this), this.props.timeInBetween);
      }, 500);
    }
        
    if(this.state.which < images.length - 1){
      this.setState({
        which:++this.state.which
      })
    } else {
      this.setState({
        which:0
      })
    }

  }

  componentWillUnmount(){
    clearInterval(startCarouselInterval);
    this.setState({ advance:true }) 
  }

  render() {

    var carouselLeftButton = (
      <div style={{display:'flex',zIndex:9999,alignItems:'center',alignContent:'center',height:'100vh'}}>
      <button onClick={this.prevSlide.bind(this)} className="btn btn-primary">+</button>
      </div>)

    var carouselRightButton = (
      <div style={{display:'flex',zIndex:9999,alignItems:'center',alignContent:'center',height:'100vh',marginLeft:'auto'}}>
      <button onClick={this.nextSlide.bind(this)} className="btn btn-primary">+</button>
      </div>)

    var carouselImages =  this.props.arrayOfImages.map((image, i) =>{     
      if(i === this.state.which){  
        return(
          <CarouselImage key={i} label={labels[i]} timeInBetween={this.props.timeInBetween} whichOne={i} src={image} src_prev={images[i-1]} advance={this.state.advance}/>
        )   
      }
    })

    return (
      <div style={{display:'flex',flexDirection:'row',position:'relative'}}>
        {this.state.showButtons  || !this.props.auto ? carouselLeftButton : null  } 
        <div>{carouselImages}</div>
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
    this.imageRefPrev = React.createRef();    
  }
 
  _handleImageLoaded() {
    this.setState({ imageStatus: 'loaded' });
  }

  _animateIn(){
    var image = this.imageRefActive.current; 
    var tl = new TimelineMax({repeat:0});
    tl.to(image , 1 , {opacity:1, ease:Back.easeInOut }); 
    //console.log(tl); 
  }

  _animateOut(){
    var image = this.imageRefPrev.current; 
    var tl = new TimelineMax({repeat:0});
    tl.to(image , 1 , {opacity:0, ease:Back.easeInOut }); 
    //console.log(tl);    
  }  

  componentDidMount(){
    this._animateIn();
  }

  _handleImageErrored() {
    this.setState({ imageStatus: 'failed' });
  }

  render() {
    var src_prev = `${this.props.src_prev}`;
    var srcTo_prev = ' no-repeat center center';
    var srcToFull_prev = 'url(' +  src_prev + ')'+  srcTo_prev;
    var src = `${this.props.src}`;
    var srcTo = ' no-repeat center center';
    var srcToFull = 'url(' +  src + ')'+  srcTo;
    console.log(srcToFull,"srcToFull");
    console.log(src_prev,"srcToPrev");
    return (
      <div style={{width: '100%', height: '100%',display:'flex',flex:1}}>
        <img ref={this.imageRefActive} 
         style={{ zIndex:-1, opacity:0, background:srcToFull, backgroundSize: 'cover',position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, margin: 'auto', minWidth: '100%', minHeight: '100%'}}
          onLoad={this._handleImageLoaded.bind(this)}
          onError={this._handleImageErrored.bind(this)}
          />
        <img ref={this.imageRefPrev} 
         style={{ zIndex:-1, opacity:0, background:srcToFull_prev, backgroundSize: 'cover',position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, margin: 'auto', minWidth: '100%', minHeight: '100%'}}
          onLoad={this._handleImageLoaded.bind(this)}
          onError={this._handleImageErrored.bind(this)}
          />          
        <div style={{zIndex:999,padding:5,position:'absolute',height:30,left:0,bottom:0,width:'100%',textAlign:'center',margin:'auto',background:'black'}}><h1 style={{margin:0}}>{this.props.label}</h1></div>
      </div>
    );
  }

}

