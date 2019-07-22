import React, { useState, useRef, useEffect } from "react";
import { TweenMax, TimelineMax, Power3} from "gsap";
import { Tween } from 'react-gsap';
import logo from 'assets/svg/bakery-logo.svg';
import ReactDOM from 'react-dom';
import { If } from 'react-if';
import { TransitionState } from "gatsby-plugin-transition-link";
import TransitionLink from 'gatsby-plugin-transition-link'
import Circle from 'assets/svg/circle.svg';
import FullCircle from 'assets/svg/full_circle.svg';
import SVGicon from 'components/svgicon/SVGicon';
import { Link as InternalLink } from 'components/link/Link';
import ReactCursorPosition from 'react-cursor-position';
import s from './Slider.scss';

var startCarouselInterval;

var images = ['../images/image.jpg', '../images/dude.jpg','../images/desk.jpg','../images/image.jpg', '../images/dude.jpg','../images/desk.jpg']
var labels = ["THE FUTURE IS HERE", "THE END IS NIGH", "THE HUNS ARE COMING","ROME HAS FALLEN", "APOCALYPSE NOW", "FLIGHT OVER THE COCKOO'S NEST" ]
var texts = ['Top creative and strategic minds joined forces with the largest crowd of consumers.', 
'Many variations of Lorem Ipsum exist today, the text includes humorous phrases.',
'Using our Lorem Ipsum generator, you can easily select a variation.',
'De finibus bonorum et malorum, a first century, philosophical text.',
'Lorem Ipsum is filler text used by publishers and graphic designers.',
'Virtually impossible to showcase a social media page layout without any content.']
var links = ['/BakeryWork', '/BakeryAbout', '/bakers', '/BakeryWork', '/BakeryAbout', '/bakers']
var slidesCount = images.length;
var percentage = 0;
var multiplier = 35 ;

export const Slider = () => { 
    return( 
      <TransitionState>
        {({ transitionStatus }) => {
          return (
            <>
              <Tween duration={2} 
              from={ ['entering'].includes(transitionStatus) ? false : { opacity: 0, ease: 'Power3.easeInOut' } } 
              to={ ['exiting'].includes(transitionStatus) ? { opacity: 0, ease: 'Power3.easeInOut' } : false  } >
                <div style={{opacity: 1, top: 0}} className={s.carousel}><Carousel horizontal={false} showButtons={false} showDots={true} timeInBetween={5000} auto={false} 
                arrayOfImages={images} /></div> 
              </Tween>    
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
    this.dotz = React.createRef();     
    this.state ={
      which: slidesCount,
      horizontal: false,
      showButtons: false,
      showDots: false,
      isActive: 1,
      activeIndex: 0,
      animating: false
    };
    this.chidrenNodes = [];
    this.wheelCallback = this.wheelCallback.bind(this);    
  }


  componentDidMount(){
    if(this.props.auto){
      this.startCarousel()
    };
    if(this.props.showButtons){
      this.setState({showButtons:true})
    };
    if(this.props.showDots){
      this.setState({showDots:true})
    };   
    if(this.props.horizontal){
      this.setState({horizontal:true})
    }; 
  }


  wheelCallback(ev){
    console.log('DELTA:' + ev.deltaY);
    if(ev.deltaY > 99){
      this.nextSlide()
    } 
    if(ev.deltaY < -99){
      this.prevSlide()
    }     
  }

  startCarousel(){
    startCarouselInterval = setInterval(this.nextSlide.bind(this), this.props.timeInBetween);
  }


  prevSlide(){

    this.setState({ animating: true });

    percentage = this.state.which < slidesCount-1 ? percentage + multiplier : 0 ;

    //console.log('percentage', percentage, 'this.state.which', this.state.which);    

    var image_top = this.wrapperRef_top.current; 
    var image_bottom = this.wrapperRef_bottom.current;     

    var ntl1 = new TimelineMax({repeat:0});
    ntl1.to(image_top , 1.5 , {top: `${percentage}vw`, ease: 'Expo.easeInOut'});

    var ntl2 = new TimelineMax({repeat:0});
    ntl2.to(image_bottom , 1.5 , {top: `${percentage-multiplier}vw`, ease: 'Expo.easeInOut'});    

    const node = ReactDOM.findDOMNode(this);





    let currentIndex = this.state.activeIndex;

          var image_top = this.wrapperRef_top.current; 
      var image_bottom = this.wrapperRef_bottom.current; 

      var allHeadings = image_top.querySelectorAll('.mask_parent_top .single_slide_heading');
      var prevHeading = image_bottom.querySelector('.mask_parent_bottom .prev');
      var currentHeading = image_top.querySelector('.mask_parent_top .current'); 
      var nextHeading = image_bottom.querySelector('.mask_parent_bottom .next');
      var currentText = image_top.querySelector('.mask_parent_top .text_current');       
      var buttonLink = image_top.querySelector('.mask_parent_top .button_link');





      console.log('CURR', parseInt(currentIndex), 'ACTIVE', parseInt(this.state.activeIndex));
      if (currentIndex < this.state.activeIndex && parseInt(currentIndex)+1 == this.state.activeIndex) {

        console.log('CURR < ACT'); 
        var prevTL = new TimelineMax(); 
        if(prevHeading !== null){prevTL.set(prevHeading, {opacity: 1}).to(prevHeading, 2.25, { yPercent: 100, opacity: 0, ease: 'Expo.easeInOut' })};
        var prevTL1 = new TimelineMax(); 
        if(prevHeading !== null){prevTL1.to(prevHeading, 3, { color: '#fff', ease: 'Expo.easeInOut'  })}; 
        var currentTLx = new TimelineMax(); 
        if(currentHeading !== null){currentTLx.from(currentHeading, 2.25, { yPercent: 100, opacity: 0, ease: 'Expo.easeInOut' })};
        var currentTLx1 = new TimelineMax(); 
        if(currentHeading !== null){currentTLx1.from(currentHeading, 3, { color: '#fff', ease: 'Expo.easeInOut'  })}; 
        var currentTextTLx_prev = new TimelineMax(); 
        if(currentText !== null){currentTextTLx_prev.from(currentText, 3.75, { yPercent: 150, opacity: 0, ease: 'Expo.easeInOut' })}; 

      } else if (currentIndex > this.state.activeIndex && currentIndex == parseInt(this.state.activeIndex)+1) {

        console.log('CURR > ACT');
        var nextTL = new TimelineMax(); 
        if(nextHeading !== null){nextTL.set(nextHeading, {opacity: 1}).to(nextHeading, 2.25, { yPercent: 100, opacity: 0, ease: 'Expo.easeInOut' })};
        var nextTL1 = new TimelineMax(); 
        if(nextHeading !== null){nextTL1.to(nextHeading, 3, { color: '#fff', ease: 'Expo.easeInOut'  })};   
        var currentTLy = new TimelineMax(); 
        if(currentHeading !== null){currentTLy.from(currentHeading, 2.25, { yPercent: 100, opacity: 0, ease: 'Expo.easeInOut' })};
        var currentTLy1 = new TimelineMax(); 
        if(currentHeading !== null){currentTLy1.from(currentHeading, 3, { color: '#fff', ease: 'Expo.easeInOut' })};

      } else {
        console.log('NOGO');
        var currentTL = new TimelineMax(); 
        if(currentHeading !== null){currentTL.from(currentHeading, 2.25, { yPercent: 100, opacity: 0, ease: 'Expo.easeInOut' })};
        var currentTL1 = new TimelineMax(); 
        if(currentHeading !== null){currentTL1.from(currentHeading, 3, { color: '#fff', ease: 'Expo.easeInOut'  })}; 
        var currentTextTLx = new TimelineMax(); 
        if(currentText !== null){currentTextTLx.from(currentText, 3.75, { yPercent: 150, opacity: 0, ease: 'Expo.easeInOut' })};           
      }  











    // Get child nodes
    if (node instanceof HTMLElement) {
        const children = node.querySelectorAll('.child_image');
        var ntl = new TimelineMax({repeat:0});    
        ntl.to(children, .2, {scale: 1}).to(children, .2, {scale: 1.04}).to(children, 1.1, {scale: 1});
     }

    this.setState({ which: this.state.which < slidesCount ? ++this.state.which : slidesCount });

    setTimeout(function() { //Start the timer
        this.setState({ animating: false }) //After 1 second, set render to true
    }.bind(this), 1000)     

  }

  nextSlide(){

    this.setState({ animating: true });    

    percentage = this.state.which > 1 ? percentage - multiplier : multiplier - slidesCount * multiplier ;

    //console.log('percentage', percentage, 'this.state.which', this.state.which);

    var image_top = this.wrapperRef_top.current; 
    var image_bottom = this.wrapperRef_bottom.current;    

    var ptl1 = new TimelineMax({repeat:0});
    ptl1.to(image_top, 1.5, { top: `${percentage}vw`, ease: 'Expo.easeInOut'});

    var ptl2 = new TimelineMax({repeat:0});
    ptl2.to(image_bottom, 1.5, { top: `${percentage-multiplier}vw`, ease: 'Expo.easeInOut'});    

    const node = ReactDOM.findDOMNode(this);







    let currentIndex = this.state.activeIndex;

          var image_top = this.wrapperRef_top.current; 
      var image_bottom = this.wrapperRef_bottom.current; 

      var allHeadings = image_top.querySelectorAll('.mask_parent_top .single_slide_heading');
      var prevHeading = image_bottom.querySelector('.mask_parent_bottom .prev');
      var currentHeading = image_top.querySelector('.mask_parent_top .current'); 
      var nextHeading = image_bottom.querySelector('.mask_parent_bottom .next');
      var currentText = image_top.querySelector('.mask_parent_top .text_current');       
      var buttonLink = image_top.querySelector('.mask_parent_top .button_link');



      console.log('CURR', parseInt(currentIndex), 'ACTIVE', parseInt(this.state.activeIndex));
      if (currentIndex < this.state.activeIndex && parseInt(currentIndex)+1 == this.state.activeIndex) {

        console.log('CURR < ACT'); 
        var prevTL = new TimelineMax(); 
        if(prevHeading !== null){prevTL.set(prevHeading, {opacity: 1}).to(prevHeading, 2.25, { yPercent: 100, opacity: 0, ease: 'Expo.easeInOut' })};
        var prevTL1 = new TimelineMax(); 
        if(prevHeading !== null){prevTL1.to(prevHeading, 3, { color: '#fff', ease: 'Expo.easeInOut'  })}; 
        var currentTLx = new TimelineMax(); 
        if(currentHeading !== null){currentTLx.from(currentHeading, 2.25, { yPercent: 100, opacity: 0, ease: 'Expo.easeInOut' })};
        var currentTLx1 = new TimelineMax(); 
        if(currentHeading !== null){currentTLx1.from(currentHeading, 3, { color: '#fff', ease: 'Expo.easeInOut'  })}; 
        var currentTextTLx_prev = new TimelineMax(); 
        if(currentText !== null){currentTextTLx_prev.from(currentText, 3.75, { yPercent: 150, opacity: 0, ease: 'Expo.easeInOut' })}; 

      } else if (currentIndex > this.state.activeIndex && currentIndex == parseInt(this.state.activeIndex)+1) {

        console.log('CURR > ACT');
        var nextTL = new TimelineMax(); 
        if(nextHeading !== null){nextTL.set(nextHeading, {opacity: 1}).to(nextHeading, 2.25, { yPercent: 100, opacity: 0, ease: 'Expo.easeInOut' })};
        var nextTL1 = new TimelineMax(); 
        if(nextHeading !== null){nextTL1.to(nextHeading, 3, { color: '#fff', ease: 'Expo.easeInOut'  })};   
        var currentTLy = new TimelineMax(); 
        if(currentHeading !== null){currentTLy.from(currentHeading, 2.25, { yPercent: 100, opacity: 0, ease: 'Expo.easeInOut' })};
        var currentTLy1 = new TimelineMax(); 
        if(currentHeading !== null){currentTLy1.from(currentHeading, 3, { color: '#fff', ease: 'Expo.easeInOut' })};

      } else {
        console.log('NOGO');
        var currentTL = new TimelineMax(); 
        if(currentHeading !== null){currentTL.from(currentHeading, 2.25, { yPercent: 100, opacity: 0, ease: 'Expo.easeInOut' })};
        var currentTL1 = new TimelineMax(); 
        if(currentHeading !== null){currentTL1.from(currentHeading, 3, { color: '#fff', ease: 'Expo.easeInOut'  })}; 
        var currentTextTLx = new TimelineMax(); 
        if(currentText !== null){currentTextTLx.from(currentText, 3.75, { yPercent: 150, opacity: 0, ease: 'Expo.easeInOut' })};           
      }  











    // Get child nodes
    if (node instanceof HTMLElement) {
        const children = node.querySelectorAll('.child_image');
        var ntl = new TimelineMax({repeat:0});    
        ntl.to(children, .4, {scale: 1}).to(children, .4, {scale: 1.04}).to(children, 1.1, {scale: 1});
     }

    this.setState({ which: this.state.which > 0 ? --this.state.which : 0})

    setTimeout(function() { //Start the timer
      this.setState({ animating: false }) //After 1 second, set render to true
    }.bind(this), 1000)       

  }

  gotoSlide(i, image){

    let currentIndex = this.state.activeIndex;

    let current = i.currentTarget.getAttribute('data-test'); 

    this.setState({ animating: true, activeIndex: current }, () => {

      setTimeout(function() { //Start the timer
        this.setState({ animating: false }) //After 1 second, set render to true
      }.bind(this), 1000)      

      console.log(this.state.animating);

      percentage = - current * multiplier;

      var image_top = this.wrapperRef_top.current; 
      var image_bottom = this.wrapperRef_bottom.current; 

      var allHeadings = image_top.querySelectorAll('.mask_parent_top .single_slide_heading');
      var prevHeading = image_bottom.querySelector('.mask_parent_bottom .prev');
      var currentHeading = image_top.querySelector('.mask_parent_top .current'); 
      var nextHeading = image_bottom.querySelector('.mask_parent_bottom .next');
      var currentText = image_top.querySelector('.mask_parent_top .text_current');       
      var buttonLink = image_top.querySelector('.mask_parent_top .button_link');

      //console.log('index',this.state.activeIndex,'prev',prevHeading, 'current',currentHeading, 'next',nextHeading);

      console.log('CURR', parseInt(currentIndex), 'ACTIVE', parseInt(this.state.activeIndex));
      if (currentIndex < this.state.activeIndex && parseInt(currentIndex)+1 == this.state.activeIndex) {

        console.log('CURR < ACT'); 
        var prevTL = new TimelineMax(); 
        if(prevHeading !== null){prevTL.set(prevHeading, {opacity: 1}).to(prevHeading, 2.25, { yPercent: 100, opacity: 0, ease: 'Expo.easeInOut' })};
        var prevTL1 = new TimelineMax(); 
        if(prevHeading !== null){prevTL1.to(prevHeading, 3, { color: '#fff', ease: 'Expo.easeInOut'  })}; 
        var currentTLx = new TimelineMax(); 
        if(currentHeading !== null){currentTLx.from(currentHeading, 2.25, { yPercent: 100, opacity: 0, ease: 'Expo.easeInOut' })};
        var currentTLx1 = new TimelineMax(); 
        if(currentHeading !== null){currentTLx1.from(currentHeading, 3, { color: '#fff', ease: 'Expo.easeInOut'  })}; 
        var currentTextTLx_prev = new TimelineMax(); 
        if(currentText !== null){currentTextTLx_prev.from(currentText, 3.75, { yPercent: 150, opacity: 0, ease: 'Expo.easeInOut' })}; 

      } else if (currentIndex > this.state.activeIndex && currentIndex == parseInt(this.state.activeIndex)+1) {

        console.log('CURR > ACT');
        var nextTL = new TimelineMax(); 
        if(nextHeading !== null){nextTL.set(nextHeading, {opacity: 1}).to(nextHeading, 2.25, { yPercent: 100, opacity: 0, ease: 'Expo.easeInOut' })};
        var nextTL1 = new TimelineMax(); 
        if(nextHeading !== null){nextTL1.to(nextHeading, 3, { color: '#fff', ease: 'Expo.easeInOut'  })};   
        var currentTLy = new TimelineMax(); 
        if(currentHeading !== null){currentTLy.from(currentHeading, 2.25, { yPercent: 100, opacity: 0, ease: 'Expo.easeInOut' })};
        var currentTLy1 = new TimelineMax(); 
        if(currentHeading !== null){currentTLy1.from(currentHeading, 3, { color: '#fff', ease: 'Expo.easeInOut' })};

      } else {
        console.log('NOGO');
        var currentTL = new TimelineMax(); 
        if(currentHeading !== null){currentTL.from(currentHeading, 2.25, { yPercent: 100, opacity: 0, ease: 'Expo.easeInOut' })};
        var currentTL1 = new TimelineMax(); 
        if(currentHeading !== null){currentTL1.from(currentHeading, 3, { color: '#fff', ease: 'Expo.easeInOut'  })}; 
        var currentTextTLx = new TimelineMax(); 
        if(currentText !== null){currentTextTLx.from(currentText, 3.75, { yPercent: 150, opacity: 0, ease: 'Expo.easeInOut' })};           
      }  



      var ptlg1 = new TimelineMax();
      ptlg1.to(image_top, 1.5, { top: `${percentage}vw`, ease: 'Expo.easeInOut'});

      var ptlg2 = new TimelineMax();
      ptlg2.to(image_bottom, 1.5, { top: `${percentage-multiplier}vw`, ease: 'Expo.easeInOut'});    

      const node = ReactDOM.findDOMNode(this);

      // Get child nodes
      if (node instanceof HTMLElement) {
          const children = node.querySelectorAll('.child_image');
          var ntlg = new TimelineMax({repeat:0});    
          ntlg.to(children, .5, {scale: 1}).to(children, .5, {scale: 1.04, ease: 'Expo.easeInOut'}).to(children, .5, {scale: 1});
      }

    });

  }

  componentWillUnmount(){
    clearInterval(startCarouselInterval);
  }

  render() {

    var carouselLeftButton = (
      <div className={s.slider__control_left} style={{ display:'flex', zIndex:9999, alignItems:'center', alignContent:'center', height:'100vh'}}>
        <div onClick={this.prevSlide.bind(this)} className="btn btn-primary">&lt;</div>
      </div>
    )

    var carouselRightButton = (
      <div className={s.slider__control_right} style={{ display:'flex', zIndex:9999, alignItems:'center', alignContent:'center', height:'100vh', marginLeft:'auto'}}>
        <div onClick={this.nextSlide.bind(this)} className="btn btn-primary">&gt;</div>
      </div>
    )

    //console.log("IN RENDER",this.state.horizontal);

    var carouselImages =  this.props.arrayOfImages.map((image, i) =>{
      return(
        <div style={{ position: 'relative', width: '100%', height: '35vw' }} key={'2key_'+i}>
          <CarouselImage horizontal={this.state.horizontal} className='child_image' key={'key_'+i} label={labels[i]} 
          timeInBetween={this.props.timeInBetween} whichOne={i} src={image} />
          <h2 key={'2key_'+i} id={'i0'+(i)} className={`${'single_slide_heading'} ${this.state.activeIndex == (i-1) ? 'next' : ''} ${this.state.activeIndex == i ? 'current' : ''} ${this.state.activeIndex == (i+1) ? 'prev' : ''}`}>{labels[i]}</h2>
          <p key={'key_text_'+i} className={`${'single_slide_text'} ${this.state.activeIndex == (i-1) ? 'text_next' : ''} ${this.state.activeIndex == i ? 'text_current' : ''} ${this.state.activeIndex == (i+1) ? 'text_prev' : ''}`}>{texts[i]}</p>
          <div className={`${'button_link'} ${this.state.activeIndex == i ? 'link_current': ''} ${this.state.animating ? 'link_animating': ''}`}>
            <InternalLink to={links[i]}>LEARN MORE&nbsp;&nbsp;<div className='more_arrow'>&gt;</div></InternalLink>
          </div>
          <div className={`${'total_indicator'} ${this.state.activeIndex == i ? 'total_indicator_current': ''}`}>6</div>
          <div className='indicator_divider'></div>
          <div className={`${'slider_indicator'} ${this.state.activeIndex == i ? 'indicator_current': ''}`}>{i+1}</div>
        </div>
      )
    })

    var dots = this.props.arrayOfImages.map((image, i) =>{
      return(
        <div className='dot' data-test={i} key={i} id={i} onClick={this.gotoSlide.bind(this)}>
          <Dot index={ i } isActive={ this.state.activeIndex == i }/></div>
      )
    }) 

    return (
      <div onWheel={this.wheelCallback} style={{display:'flex',flexDirection:'row',position:'relative', height: '100%'}}>
        <ReactCursorPosition className='fullscreen_cursor_position'>
          <SVGicon className={`${'home_arrow'} ${this.state.animating ? 'home_arrow_current': ''}`} src='home_arrow.svg'  />
          {this.state.showButtons  ? carouselLeftButton : null }
          <div className='mask_wrapper_top' style={{left: 0, top: 'auto', position: 'absolute', right: 0, bottom: '7vw', height: '35vw', overflow: 'hidden'}}>
            <div ref={this.wrapperRef_top} className='mask_parent_top' 
            style={{position:'absolute', bottom: 0, top: 0, left: 0, right: 0, width: '100%', 
            display: 'flex', flexDirection: `${ this.state.horizontal ? 'row' : 'column' }`, alignContent: `${ this.state.horizontal ? 'center' : 'flex-end' }`, 
            alignItems: `${ this.state.horizontal ? 'center' : 'flex-end' }`}}>         
              {carouselImages}            
            </div>
          </div>
          <div className='dots' ref={this.dots}>          
            {this.state.showDots ? dots : null  }
          </div>
          <div className='mask_wrapper_bottom' style={{left: 0, top: 'auto', position: 'absolute', right: 0, bottom: '0', height: '1.5vw', overflow: 'hidden'}}>        
            <div ref={this.wrapperRef_bottom} className='mask_parent_bottom' 
            style={{position:'absolute', bottom: 0, top: '-35vw', left: 0, right: 0, width: '100%', 
            display: 'flex', flexDirection: `${ this.state.horizontal ? 'row' : 'column' }`, alignContent: `${ this.state.horizontal ? 'center' : 'flex-end' }`, 
            alignItems: `${ this.state.horizontal ? 'center' : 'flex-end' }`}}>
              {carouselImages}
            </div>          
          </div>
          {this.state.showButtons ? carouselRightButton : null } 
        </ReactCursorPosition>
        <div className={s.contact_button_link}>
          <TransitionLink to={'/contact'} exit={{ length: 1 }} entry={{ delay: 1 }}>
            START A PROJECT WITH US <span>&gt;</span>
          </TransitionLink>  
        </div>
      </div>
    );

  }
}

class CarouselImage extends React.Component {

  constructor(props) {
    super(props);
    //console.log("Not Mounted", this.props)
    this.state = { imageStatus: null };
  }
 
  _handleImageLoaded() {
    this.setState({ imageStatus: 'loaded' });
  }

  componentDidMount(){
    console.log("Mounted", this.props)
  }

  _handleImageErrored() {
    this.setState({ imageStatus: 'failed' });
  }

  render(e) {

    var src = `${this.props.src}`;
    var srcTo = ' no-repeat center center';
    var srcToFull = 'url(' +  src + ')'+  srcTo;

    return (
      <div className={this.props.className}
       style={{ transform: 'scale(1)', display: 'block', zIndex:`${this.props.whichOne}`, background:srcToFull, backgroundSize: 'cover',  margin: 'auto', 
       width: '100%', height: '35vw', minHeight: '33vh'}}
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
  }

  render() {
    return (
        <div>{this.props.isActive ? <FullCircle/> : <Circle/>}</div>
    );
  }

}

