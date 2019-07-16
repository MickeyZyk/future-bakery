import React, { useState, useRef, useEffect } from "react";
import { TweenMax, TimelineMax, Power3} from "gsap";
import { Tween } from 'react-gsap';
import logo from 'assets/svg/bakery-logo.svg';
import ReactDOM from 'react-dom';
import { If } from 'react-if';
import { TransitionState } from "gatsby-plugin-transition-link";
import Circle from 'assets/svg/circle.svg';
import FullCircle from 'assets/svg/full_circle.svg';
import s from './Slider.scss';

var startCarouselInterval;

var images = ['../images/image.jpg', '../images/dude.jpg','../images/desk.jpg','../images/image.jpg', '../images/dude.jpg','../images/desk.jpg']
var labels = ["Cats are Awesome 01", "Yes they are 02", "Yes they are 03","Cats are Awesome 01", "Yes they are 02", "Yes they are 03" ]
var slidesCount = images.length;
var percentage = 0;
var multiplier = 35 ;

export const Slider = () => { 
    return( 

      <TransitionState>
        {({ transitionStatus }) => {

          return (

            <>
              <If condition={['entering','entered'].includes(transitionStatus) }>
                <Tween duration={1} to={{ opacity: 1, ease: 'Power3.easeIn' }}>
                  <div className={s.carousel}><Carousel showButtons={true} showDots={false} timeInBetween={5000} auto={false} arrayOfImages={images} /></div> 
                </Tween>    
              </If> 
              <If condition={['exiting','exited'].includes(transitionStatus) }>
                <Tween duration={1} easing={'Power3.easeIn'} from={{ opacity: 1 }} to={{ opacity: 0 }}>
                  <div className={s.carousel}><Carousel showButtons={true} showDots={false} timeInBetween={5000} auto={false} arrayOfImages={images} /></div> 
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
      showDots: true,
      isActive: 1,
      activeIndex: 0
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
    startCarouselInterval = setInterval(this.nextSlide.bind(this), this.props.timeInBetween);
  }


  prevSlide(){

    percentage = this.state.which < slidesCount-1 ? percentage + multiplier : 0 ;

    console.log('percentage', percentage, 'this.state.which', this.state.which);    

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
      which: this.state.which < slidesCount ? ++this.state.which : slidesCount
    })

  }

  nextSlide(){

    percentage = this.state.which > 1 ? percentage - multiplier : multiplier - slidesCount * multiplier ;

    console.log('percentage', percentage, 'this.state.which', this.state.which);

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
      which: this.state.which > 0 ? --this.state.which : 0    
    })

  }


  gotoSlide(i){

    console.log(i);

    let current = i.currentTarget.getAttribute('data-test'); 

    this.setState({activeIndex: current}, () => console.log(this.state.activeIndex, current));

    percentage = - current * multiplier;

    var image_top = this.wrapperRef_top.current; 
    var image_bottom = this.wrapperRef_bottom.current;    

    var ptlg1 = new TimelineMax({repeat:0});
    ptlg1.to(image_top, 1.5, { top: `${percentage}vw`, ease: 'Expo.easeInOut'});

    var ptlg2 = new TimelineMax({repeat:0});
    ptlg2.to(image_bottom, 1.5, { top: `${percentage-multiplier}vw`, ease: 'Expo.easeInOut'});    

    const node = ReactDOM.findDOMNode(this);

    // Get child nodes
    if (node instanceof HTMLElement) {
        const children = node.querySelectorAll('.child_image');
        var ntlg = new TimelineMax({repeat:0});    
        ntlg.to(children, .4, {scale: 1}).to(children, .4, {scale: 1.05}).to(children, 1.1, {scale: 1});
     }

  }

  componentWillUnmount(){
    clearInterval(startCarouselInterval);
  }

  render() {

    var carouselLeftButton = (
      <div className={s.slider__control_left} style={{ display:'flex', zIndex:9999, alignItems:'center', alignContent:'center', height:'100vh'}}>
        <div onClick={this.prevSlide.bind(this)} className="btn btn-primary">&lt;</div>
      </div>)

    var carouselRightButton = (
      <div className={s.slider__control_right} style={{ display:'flex', zIndex:9999, alignItems:'center', alignContent:'center', height:'100vh', marginLeft:'auto'}}>
        <div onClick={this.nextSlide.bind(this)} className="btn btn-primary">&gt;</div>
      </div>)

    var carouselImages =  this.props.arrayOfImages.map((image, i) =>{
      return(
        <CarouselImage className='child_image' key={'key_'+i} label={labels[i]} timeInBetween={this.props.timeInBetween} whichOne={i} src={image} position={i*100} />
      )
    })

    var dots = this.props.arrayOfImages.map((image, i) =>{
      return(
        <div className='dot' data-test={i} key={i} id={i} onClick={this.gotoSlide.bind(this)}>
          <Dot index={ i } isActive={ this.state.activeIndex == i }/></div>
      )
    })    

    return (
      <div style={{display:'flex',flexDirection:'row',position:'relative', height: '100%'}}>

        {this.state.showButtons  ? carouselLeftButton : null  } 

        <div className='mask_wrapper_top' style={{left: 0, top: 'auto', position: 'absolute', right: 0, bottom: '8vw', height: '35vw', overflow: 'hidden'}}>
          <div ref={this.wrapperRef_top} className='mask_parent_top' style={{overflow: 'hidden', position:'absolute', bottom: 0, top: 0, left: 0, right: 0, width: '100%', height: `${slidesCount * 35}vw`, display: 'flex', flexDirection: 'column', alignContent: 'flex-end', alignItems: 'flex-end'}}>         
            {carouselImages}            
          </div>
        </div>

        <div className='dots'>          
          {this.state.showDots ? dots : null  }
        </div>

        <div className='mask_wrapper_bottom' style={{left: 0, top: 'auto', position: 'absolute', right: 0, bottom: '0', height: '2.5vw', overflow: 'hidden'}}>        
          <div ref={this.wrapperRef_bottom} className='mask_parent_bottom' style={{overflow: 'hidden', position:'absolute', bottom: 0, top: '-35vw', left: 0, right: 0, width: '100%', height: `${slidesCount * 35}vw`, display: 'flex', flexDirection: 'column', alignContent: 'flex-end', alignItems: 'flex-end'}}>
            {carouselImages}
          </div>          
        </div>

        {this.state.showButtons ? carouselRightButton : null  } 

      </div>
    );

  }
}

class CarouselImage extends React.Component {

  constructor(props) {
    super(props);
    console.log(this.props)
    this.state = { imageStatus: null };
  }
 
  _handleImageLoaded() {
    this.setState({ imageStatus: 'loaded' });
  }

  componentDidMount(){

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

class Dot extends React.Component {

constructor (props){
  super(props);
    this.state ={
      amActive: false
    };  


    //console.log("PROPS", this.props.isActive);
}


  render() {
    return (
        <div>{this.props.isActive ? <FullCircle/> : <Circle/>}</div>
    );
  }
}

