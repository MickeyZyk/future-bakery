import React, { useState, useRef, useEffect } from "react";
import { TweenMax, TimelineMax, Power3} from "gsap";
import { Tween } from 'react-gsap';
import logo from 'assets/svg/bakery-logo.svg';
import ReactDOM from 'react-dom';
import { If } from 'react-if';
import { TransitionState } from "gatsby-plugin-transition-link";
import s from './Slider.scss';
/*
 * A simple React component
 */
var startCarouselInterval;

var images = ['../images/image.jpg', '../images/dude.jpg','../images/desk.jpg','../images/image.jpg', '../images/dude.jpg','../images/desk.jpg']
var labels = ["Cats are Awesome 01", "Yes they are 02", "Yes they are 03","Cats are Awesome 01", "Yes they are 02", "Yes they are 03" ]
var slidesCount = images.length;
var percentage = 0;
var multiplier = 35 ;
//console.log("percentage" + percentage);

export const Slider = () => { 
    return( 

      <TransitionState>
        {({ transitionStatus }) => {

          return (

            <>

          <If condition={['entering','entered'].includes(transitionStatus) }>
            <Tween duration={1} to={{ opacity: 1, ease: Power3.easeIn }}>
              <div className={s.carousel}><Carousel showButtons timeInBetween={5000} auto={false} arrayOfImages={images} /></div> 
            </Tween>    
          </If> 

          <If condition={['exiting','exited'].includes(transitionStatus) }>
            <Tween duration={1} easing={'Power3.easeIn'} from={{ opacity: 1 }} to={{ opacity: 0 }}>
              <div className={s.carousel}><Carousel showButtons timeInBetween={5000} auto={false} arrayOfImages={images} /></div> 
            </Tween>                          
          </If>

          </>

          )

        }}
      </TransitionState>

    )
  }


class Carousel extends React.Component {

  constructor(props){
    super(props);
    this.wrapperRef_bottom = React.createRef();
    this.wrapperRef_top = React.createRef();    
    this.state ={
      which: slidesCount,
      showButtons: false,
      forward: true,
      firstSlide: false,
      lastSlide: false
    };
    this.chidrenNodes =[];
  }

  componentDidMount(){
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

    //console.log(this.state.which);

    percentage = this.state.forward ? percentage + multiplier : ( this.state.which < slidesCount ? percentage + multiplier : multiplier );

    console.log('percentage', percentage, 'this.state.which', this.state.which, 'this.state.forward', this.state.forward);    

    var image_top = this.wrapperRef_top.current; 
    var image_bottom = this.wrapperRef_bottom.current;     

    var ntl1 = new TimelineMax({repeat:0});
    ntl1.to(image_top , 1.5 , {top: `${percentage}vw`, ease: 'Expo.easeInOut'});

    var ntl2 = new TimelineMax({repeat:0});
    ntl2.to(image_bottom , 1.5 , {top: `${percentage-multiplier}vw`, ease: 'Expo.easeInOut'});    

    const node = ReactDOM.findDOMNode(this);

    // Get child nodes
    if (node instanceof HTMLElement) {
        const children = node.querySelectorAll('.child_image');
        var ntl = new TimelineMax({repeat:0});    
        ntl.to(children, .2, {scale: 1}).to(children, .2, {scale: 1.05}).to(children, 1.1, {scale: 1});
     }

    this.setState({
      which: this.state.which < slidesCount ? ++this.state.which : slidesCount,
      forward: false 
    })

  }

  nextSlide(){

    //console.log(this.state.which);    

    percentage = !this.state.forward ? percentage - multiplier : ( this.state.which > 0 ? percentage - multiplier : 0 - slidesCount * multiplier );

    console.log('percentage', percentage, 'this.state.which', this.state.which, 'this.state.forward', this.state.forward);

    var image_top = this.wrapperRef_top.current; 
    var image_bottom = this.wrapperRef_bottom.current;    

    var ptl1 = new TimelineMax({repeat:0});
    ptl1.to(image_top, 1.5, { top: `${percentage}vw`, ease: 'Expo.easeInOut'});

    var ptl2 = new TimelineMax({repeat:0});
    ptl2.to(image_bottom, 1.5, { top: `${percentage-multiplier}vw`, ease: 'Expo.easeInOut'});    

    const node = ReactDOM.findDOMNode(this);

    // Get child nodes
    if (node instanceof HTMLElement) {
        const children = node.querySelectorAll('.child_image');
        var ntl = new TimelineMax({repeat:0});    
        ntl.to(children, .4, {scale: 1}).to(children, .4, {scale: 1.05}).to(children, 1.1, {scale: 1});
     }

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
      <div className={s.slider__control} style={{ transform: 'translate(26.5vw, -4vw)', display:'flex', zIndex:9999, alignItems:'flex-end', alignContent:'flex-end', height:'100vh'}}>
        <button onClick={this.prevSlide.bind(this)} className="btn btn-primary"></button>
      </div>)

    var carouselRightButton = (
      <div className={s.slider__control} style={{ transform: 'translate(-26.5vw, -4vw)', display:'flex', zIndex:9999, alignItems:'flex-end', alignContent:'flex-end', height:'100vh', marginLeft:'auto'}}>
        <button onClick={this.nextSlide.bind(this)} className="btn btn-primary"></button>
      </div>)

    var carouselImages =  this.props.arrayOfImages.map((image, i) =>{
      return(
        <CarouselImage className='child_image' key={'key_'+i} label={labels[i]} timeInBetween={this.props.timeInBetween} whichOne={i} src={image} position={i*100} />
      )
    })

    return (
      <div style={{display:'flex',flexDirection:'row',position:'relative'}}>

        {this.state.showButtons  || !this.props.auto ? carouselLeftButton : null  } 
        <div className='mask_wrapper_top' style={{left: 0, top: 'auto', position: 'absolute', right: 0, bottom: '8vw', height: '35vw', overflow: 'hidden'}}>
          <div ref={this.wrapperRef_top} className='mask_parent_top' style={{overflow: 'hidden', position:'absolute', bottom: 0, top: 0, left: 0, right: 0, width: '100%', height: `${slidesCount * 35}vw`, display: 'flex', flexDirection: 'column', alignContent: 'flex-end', alignItems: 'flex-end'}}>
         
              {carouselImages}
            
          </div>
        </div>
        <div className='mask_wrapper_bottom' style={{left: 0, top: 'auto', position: 'absolute', right: 0, bottom: '0', height: '2.5vw', overflow: 'hidden'}}>        
          <div ref={this.wrapperRef_bottom} className='mask_parent_bottom' style={{overflow: 'hidden', position:'absolute', bottom: 0, top: '-35vw', left: 0, right: 0, width: '100%', height: `${slidesCount * 35}vw`, display: 'flex', flexDirection: 'column', alignContent: 'flex-end', alignItems: 'flex-end'}}>
         
              {carouselImages}
            
          </div>          
        </div>
        {this.state.showButtons  || !this.props.auto ? carouselRightButton : null  } 
      </div>
    );

  }
}

class CarouselImage extends React.Component {

  constructor(props) {
    super(props);
    this.state = { imageStatus: null };
    //this.imageRefActive = React.createRef();
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

  render(e) {

    var pos =  `${this.props.position}`;
    var src = `${this.props.src}`;
    var srcTo = ' no-repeat center center';
    var srcToFull = 'url(' +  src + ')'+  srcTo;

    return (
        <div className={this.props.className}
         style={{ transform: 'scale(1)', display: 'block', zIndex:`${this.props.whichOne}`, background:srcToFull, backgroundSize: 'cover',  margin: 'auto', width: '100%', height: '59vw', minHeight: '30vh'}}
          onLoad={this._handleImageLoaded.bind(this)}
          onError={this._handleImageErrored.bind(this)}
          ></div>
    );
  }

}

