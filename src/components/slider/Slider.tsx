import React, { useState, useRef, useEffect } from "react";
import { graphql } from 'gatsby';
import SplitText from 'utils/SplitText.min.js'
import { TweenMax, TimelineMax, Power3} from "gsap";
import { Tween } from 'react-gsap';
import logo from 'assets/svg/bakery-logo.svg';
import ReactDOM from 'react-dom';
import { If } from 'react-if';
import { TransitionState } from "gatsby-plugin-transition-link";
import Circle from 'assets/svg/circle.svg';
import FullCircle from 'assets/svg/full_circle.svg';
import SVGicon from 'components/svgicon/SVGicon';
import { Link } from 'components/link/Link';
import ReactCursorPosition from 'react-cursor-position';
import { Throttle } from 'react-throttle';
import { Location } from '@reach/router';
import _ from 'lodash';
import s from './Slider.scss';
import {Swipeable} from 'react-swipeable'

var startCarouselInterval;
var goto = 1;

var percentage = 0;
var multiplier = 35 ;

export class Slider extends React.Component {

  constructor(props){
    super(props);
  }

  componentDidMount(){

  }

  componentWillUnmount() {
    clearInterval(startCarouselInterval);      
  }   

  render() {

    //console.log("PARENT PROPS", this.props)

   return( 
      <div style={{opacity: 1, top: 0}} 
      className={s.carousel}>
        <Carousel titles={this.props.titles} 
        links={this.props.links} 
        images={this.props.images} 
        subs={this.props.subs}  
        horizontal={false} 
        showButtons={false} 
        showDots={true} 
        timeInBetween={6000} 
        auto={true} 
      /></div>
    )

  }

}

class Carousel extends React.Component {

  constructor(props){
    super(props);
    this.wrapperRef_bottom = React.createRef();
    this.wrapperRef_top = React.createRef();    
    this.dotz = React.createRef(); 
    this.wrapperRef_mobile = React.createRef();  
    this.state ={
      horizontal: false,
      showButtons: false,
      showDots: false,
      isActive: 1,
      activeIndex: 0,
      animating: false,
      gotoState : 0,
      autoPlay: true
    };
    this.chidrenNodes = [];
    /* this.wheelCallback = _.throttle(this.wheelCallback.bind(this), 2000, true);   */
    this.scream  = this.scream.bind(this)
    this.pre  = this.pre.bind(this)
    this.nex  = this.nex.bind(this)
  }

  pre(){
    this.setState({ autoPlay: false });   
    if (this.state.gotoState > 0) {
      console.log("NP", this.state.gotoState, this.state.activeIndex)
      this.prevSlide(parseInt(this.state.gotoState) - 1)} 
    else {false}
  }

  nex(){
    this.setState({ autoPlay: false });  
    if (this.state.gotoState == this.props.images.length-1) {false} 
    else {
      console.log("NN", this.state.gotoState, this.state.activeIndex)
      this.nextSlide(parseInt(this.state.gotoState) + 1) 
    }
  }



  componentDidMount(){

  //console.log("PROPS", this.props)

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

      const split = new SplitText(
        'h2',
        {
          type: "lines",
          linesClass: "ts-line"
        }
      )   

      const textSplit = new SplitText(
        'h3',
        {
          type: "lines",
          linesClass: "ts-text-line"
        }
      ) 

      this.gotoSlide(0)
  }

  componentWillUnmount() {
    this.prevSlide()
    clearInterval(startCarouselInterval);  
  }  
/*

  wheelCallback(ev) {
    if( ev.deltaY > 0 ) {
    //console.log( this.state.activeIndex + 1, "delta", ev.deltaY, ev.deltaMode )
      parseInt(this.state.activeIndex) < this.props.images.length-1 && !this.state.animating ? this.nextSlide(parseInt(this.state.activeIndex) + 1) : false
    }
    else if( ev.deltaY < 0 ) {  
    //console.log( this.state.activeIndex - 1, "delta", ev.deltaY,  ev.deltaMode )
      parseInt(this.state.activeIndex)  > 0 && !this.state.animating ? this.prevSlide(parseInt(this.state.activeIndex) - 1) : false
    }
  }

  _onMouseMove = (e) => {
    e.persist();
    this.wheelCallback(e);
  }
*/
  scream(){
    console.log(this.state.autoPlay, "AP")
    if(this.state.autoPlay){
      if (this.state.gotoState < this.props.images.length -1 ) {
        this.nextSlide(parseInt(this.state.gotoState) + 1) 
      } else {
        this.gotoSlide(0)      
      }
    }
  }

  startCarousel(){

    startCarouselInterval = setInterval(this.scream, this.props.timeInBetween);
    //startCarouselInterval = setInterval(this.nextSlide(1), this.props.timeInBetween);    
  }

  prevSlide(i){

    //console.log("prev", i);

    let current = i;     

    this.setState({ animating: true, activeIndex: current, gotoState:  parseInt(this.state.gotoState) - 1  }, () => {



    //mobile part

    var mobileImagesWrapper = this.wrapperRef_mobile.current
    var allMobileImages = mobileImagesWrapper.querySelectorAll('.mobile_child');
    console.log("aot + 100 + state", this.state.gotoState, "index", this.state.activeIndex,  "PER", parseInt(this.state.gotoState) * -100 + 'vw')
    var mobileTimelinePrev = new TimelineMax({repeat:0});    
    if(allMobileImages !== null){ mobileTimelinePrev.to(allMobileImages, .5, { x: parseInt(this.state.gotoState) * -100 + 'vw'}) };    

    // end mobile part



      percentage = this.state.activeIndex < this.props.images.length ? percentage + multiplier : 0 ;

      //console.log('percentage', percentage, 'this.state.which', this.state.which);    

      var image_top = this.wrapperRef_top.current; 
      var image_bottom = this.wrapperRef_bottom.current;     

      var ntl1 = new TimelineMax({repeat:0});
      ntl1.to(image_top , 1.5 , {top: `${percentage}vw`, ease: 'Expo.easeInOut'});

      var ntl2 = new TimelineMax({repeat:0});
      ntl2.to(image_bottom , 1.5 , {top: `${percentage-multiplier}vw`, ease: 'Expo.easeInOut'});    

      var prevHeading = image_bottom.querySelectorAll('.mask_parent_bottom div .prev .ts-line');
      var currentHeading = image_top.querySelectorAll('.mask_parent_top .current .ts-line'); 
      var nextHeading = image_bottom.querySelectorAll('.mask_parent_bottom .next .ts-line');
      var prevText = image_bottom.querySelectorAll('.mask_parent_bottom .text_prev .ts-text-line'); 
      var currentText = image_top.querySelectorAll('.mask_parent_top .text_current .ts-text-line');   
      var nextText = image_bottom.querySelectorAll('.mask_parent_bottom .text_next .ts-text-line'); 

      var prevTLback = new TimelineMax(); 
      prevTLback.eventCallback("onComplete", function() {
        prevTLback.pause(0);
      }); 
      if(nextHeading !== null){prevTLback.set(nextHeading, {opacity: 0}).set(nextHeading, {opacity: 1}).staggerTo(nextHeading, 1.25, { yPercent: 150, opacity: 0, ease: 'Expo.easeInOut' }, .1, "+=0")};
      var currentTLback = new TimelineMax(); 
      if(currentHeading !== null){currentTLback.staggerFrom(currentHeading, 3, { yPercent: 150, ease: 'Expo.easeInOut' }, .15, "+=0").staggerFrom(currentHeading, 3, { opacity: 0, ease: 'Expo.easeInOut' }, .15, "-=2.75")};

      var nextTXback = new TimelineMax(); 
      nextTXback.eventCallback("onComplete", function() {
        nextTXback.pause(0);
      });       
      if(nextText !== null){nextTXback.set(nextText, {opacity: 0}).set(nextText, {opacity: 1}).staggerTo(nextText, 1.25, { yPercent: 150, opacity: 0, ease: 'Expo.easeInOut' }, .15, "+=0")};
      var currentTXback = new TimelineMax(); 
      if(currentText !== null){currentTXback.staggerFrom(currentText, 3, { yPercent: 150, opacity: 0, ease: 'Expo.easeInOut', delay: 1 }, .15, "+=0")};

      const node = ReactDOM.findDOMNode(this);

      // Get child nodes
      if (node instanceof HTMLElement) {
          const children = node.querySelectorAll('.child_image');
          var ntl = new TimelineMax({repeat:0});    
          ntl.to(children, .2, {scale: 1}).to(children, .2, {scale: 1.04}).to(children, 1.1, {scale: 1});
       }

      this.setState({ which: this.state.which < this.props.images.length ? ++this.state.which : this.props.images.length });

      setTimeout(function() { //Start the timer
          this.setState({ animating: false }) //After 1 second, set render to true
      }.bind(this), 2000)  


    });

   

  }

  nextSlide(i){

    //console.log("next", i)    

    let current = i;     

    this.setState({ animating: true, activeIndex: current, gotoState:  parseInt(this.state.gotoState) + 1 }, () => {


    //mobile part

    var mobileImagesWrapper = this.wrapperRef_mobile.current
    var allMobileImages = mobileImagesWrapper.querySelectorAll('.mobile_child');
    console.log("aot - 100 + state", this.state.gotoState, "index", this.state.activeIndex, "PER", parseInt(this.state.gotoState) * -100 + 'vw')
    var mobileTimelineNext = new TimelineMax({repeat:0});    
    if(allMobileImages !== null){ mobileTimelineNext.to(allMobileImages, .5, { x: parseInt(this.state.gotoState) * -100 + 'vw'}) };    

    // end mobile part



      percentage = this.state.activeIndex > 0 ? percentage - multiplier : multiplier - this.props.images.length * multiplier ;

      //console.log('percentage', percentage, 'this.state.which', this.state.which);

      var image_top = this.wrapperRef_top.current; 
      var image_bottom = this.wrapperRef_bottom.current;    

      var ptl1 = new TimelineMax({repeat:0});
      ptl1.to(image_top, 1.5, { top: `${percentage}vw`, ease: 'Expo.easeInOut'});

      var ptl2 = new TimelineMax({repeat:0});
      ptl2.to(image_bottom, 1.5, { top: `${percentage-multiplier}vw`, ease: 'Expo.easeInOut'}); 

      var prevHeading = image_bottom.querySelectorAll('.mask_parent_bottom div .prev .ts-line');
      var currentHeading = image_top.querySelectorAll('.mask_parent_top .current .ts-line'); 
      var nextHeading = image_bottom.querySelectorAll('.mask_parent_bottom .next .ts-line');
      var prevText = image_bottom.querySelectorAll('.mask_parent_bottom .text_prev .ts-text-line'); 
      var currentText = image_top.querySelectorAll('.mask_parent_top .text_current .ts-text-line');   
      var nextText = image_bottom.querySelectorAll('.mask_parent_bottom .text_next .ts-text-line'); 

      var prevTLforward = new TimelineMax();
      prevTLforward.eventCallback("onComplete", function() {
        prevTLforward.pause(0);
      }); 
      if(prevHeading !== null){prevTLforward.set(prevHeading, {opacity: 0}).set(prevHeading, {opacity: 1}).staggerTo(prevHeading, 1.25, { yPercent: 150, opacity: 0, ease: 'Expo.easeInOut' }, .1, "+=0")};
      var currentTLforward = new TimelineMax(); 
      if(currentHeading !== null){currentTLforward.staggerFrom(currentHeading, 3, { yPercent: 150, ease: 'Expo.easeInOut' }, .15, "+=0").staggerFrom(currentHeading, 3, { opacity: 0, ease: 'Expo.easeInOut' }, .15, "-=2.75")};

      var prevTXforward = new TimelineMax(); 
      prevTXforward.eventCallback("onComplete", function() {
        prevTXforward.pause(0);
      });       
      if(prevText !== null){prevTXforward.set(prevText, {opacity: 0}).set(prevText, {opacity: 1}).staggerTo(prevText, 1.25, { yPercent: 150, opacity: 0, ease: 'Expo.easeInOut' }, .15, "+=0")};
      var currentTXforward = new TimelineMax(); 
      if(currentText !== null){currentTXforward.staggerFrom(currentText, 3, { yPercent: 150, opacity: 0, ease: 'Expo.easeInOut', delay: 1 }, .15, "+=0")};

      const node = ReactDOM.findDOMNode(this);

      // Get child nodes
      if (node instanceof HTMLElement) {
          const children = node.querySelectorAll('.child_image');
          var ntl = new TimelineMax({repeat:0});    
          ntl.to(children, .4, {scale: 1}).to(children, .4, {scale: 1.04}).to(children, 1.1, {scale: 1});
       }

      this.setState({ which: this.state.which > 0 ? --this.state.which : 0})

      setTimeout(function() { //Start the timer
        this.setState({ animating: false }) //After 1 second, set render to true
      }.bind(this), 2000) 


    });  

      

  }

  gotoSlide(i){

    let currentIndex = this.state.activeIndex;

    let current = i.currentTarget ? i.currentTarget.getAttribute('data-test') : 0; 

    this.setState({ animating: true, activeIndex: current, gotoState: current}, () => {



    //mobile part

    var mobileImagesWrapper = this.wrapperRef_mobile.current
    var allMobileImages = mobileImagesWrapper.querySelectorAll('.mobile_child');
    console.log("aot - 100 + state", this.state.gotoState, "index", this.state.activeIndex, "PER", parseInt(this.state.gotoState) * -100 + 'vw')
    var mobileTimelineGo = new TimelineMax({repeat:0});    
    if(allMobileImages !== null){ mobileTimelineGo.to(allMobileImages, .5, { x: '0vw'}) };    

    // end mobile part


      setTimeout(function() { //Start the timer
        this.setState({ animating: false }) //After 1 second, set render to true
      }.bind(this), 1000)      

      //console.log("Animating", this.state.animating, "index", this.state.activeIndex);

      percentage = - current * multiplier;


      var image_top = this.wrapperRef_top.current; 
      var image_bottom = this.wrapperRef_bottom.current; 

      var prevHeading = image_bottom.querySelectorAll('.mask_parent_bottom div .prev .ts-line');
      var currentHeading = image_top.querySelectorAll('.mask_parent_top .current .ts-line'); 
      var nextHeading = image_bottom.querySelectorAll('.mask_parent_bottom .next .ts-line');
      var prevText = image_bottom.querySelectorAll('.mask_parent_bottom .text_prev .ts-text-line'); 
      var currentText = image_top.querySelectorAll('.mask_parent_top .text_current .ts-text-line');   
      var nextText = image_bottom.querySelectorAll('.mask_parent_bottom .text_next .ts-text-line'); 

      //console.log('CURR', parseInt(currentIndex), 'ACTIVE', parseInt(this.state.activeIndex));
      if (currentIndex < this.state.activeIndex && parseInt(currentIndex)+1 == this.state.activeIndex) {
        //console.log('CURR', parseInt(currentIndex), 'ACTIVE', parseInt(this.state.activeIndex), 'CURR < ACT == FORWARD');

        var prevTLforward = new TimelineMax(); 
        if(prevHeading !== null){prevTLforward.set(prevHeading, {opacity: 1}).staggerTo(prevHeading, 1.25, { yPercent: 150, opacity: 0, ease: 'Expo.easeInOut' }, .1, "+=0")};
        var currentTLforward = new TimelineMax(); 
        if(currentHeading !== null){currentTLforward.staggerFrom(currentHeading, 3, { yPercent: 150, opacity: 0, ease: 'Expo.easeInOut' }, .15, "+=.5")};

        var prevTXforward = new TimelineMax(); 
        if(prevText !== null){prevTXforward.set(prevText, {opacity: 1}).staggerTo(prevText, 1.25, { yPercent: 150, opacity: 0, ease: 'Expo.easeInOut' }, .15, "+=0")};
        var currentTXforward = new TimelineMax(); 
        if(currentText !== null){currentTXforward.staggerFrom(currentText, 3, { yPercent: 150, opacity: 0, ease: 'Expo.easeInOut', delay: 1 }, .15, "+=0")};


      } else if (currentIndex > this.state.activeIndex && currentIndex == parseInt(this.state.activeIndex)+1) {
        //console.log('CURR', parseInt(currentIndex), 'ACTIVE', parseInt(this.state.activeIndex), 'CURR > ACT == BACK');

        var prevTLback = new TimelineMax(); 
        if(nextHeading !== null){prevTLback.set(nextHeading, {opacity: 1}).staggerTo(nextHeading, 1.25, { yPercent: 150, opacity: 0, ease: 'Expo.easeInOut' }, .1, "+=0")};
        var currentTLback = new TimelineMax(); 
        if(currentHeading !== null){currentTLback.staggerFrom(currentHeading, 3, { yPercent: 150, opacity: 0, ease: 'Expo.easeInOut' }, .15, "+=0")};

        var nextTXback = new TimelineMax(); 
        if(nextText !== null){nextTXback.set(nextText, {opacity: 1}).staggerTo(nextText, 1.25, { yPercent: 150, opacity: 0, ease: 'Expo.easeInOut' }, .15, "+=0")};
        var currentTXback = new TimelineMax(); 
        if(currentText !== null){currentTXback.staggerFrom(currentText, 3, { yPercent: 150, opacity: 0, ease: 'Expo.easeInOut', delay: 1 }, .15, "+=0")};

      } else {
        //console.log('CURR', parseInt(currentIndex), 'ACTIVE', parseInt(this.state.activeIndex), 'NOGO == RANDOM');        

        var currentTL = new TimelineMax(); 
        if(currentHeading !== null){currentTL.staggerFrom(currentHeading, 3, { yPercent: 150, opacity: 0, ease: 'Expo.easeInOut' }, .15, "+=0")};

        var currentTextTLx = new TimelineMax(); 
        if(currentText !== null){currentTextTLx.staggerFrom(currentText, 3, { yPercent: 150, opacity: 0, ease: 'Expo.easeInOut', delay: 1 }, .15, "+=0")};        
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



  render() {

    var texts = this.props.subs
    var labels = this.props.titles
    var links = this.props.links
    var images = this.props.images



    var controlz = (
          <>
            <div className="mob_left">
              <div onClick={this.pre} className="mob_nextprev"><img src="/svg/mob_left.svg"/></div>
            </div>
            <div className="mob_right"> 
              <div onClick={this.nex} className="mob_nextprev"><img src="/svg/mob_right.svg"/></div>
            </div>
          </>

    )

/*
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
*/
    var carouselImages =  images.map((image, i) =>{
      return(





        <div style={{ position: 'relative', width: '100%', height: '35vw' }} key={'2key_'+i}>
          <CarouselImage horizontal={this.state.horizontal} className='child_image' key={'key_'+i} label={labels[i]} 
          timeInBetween={this.props.timeInBetween} whichOne={i} src={image} />
          <h2 key={'2key_'+i} id={'i0'+(i)} className={`${'single_slide_heading'} ${this.state.activeIndex == (i-1) ? 'next' : ''} ${this.state.activeIndex == i ? 'current' : ''} ${this.state.activeIndex == (i+1) ? 'prev' : ''}`}>{labels[i]}</h2>
          <h3 key={'key_text_'+i} className={`${'single_slide_text'} ${this.state.activeIndex == (i-1) ? 'text_next' : ''} ${this.state.activeIndex == i ? 'text_current' : ''} ${this.state.activeIndex == (i+1) ? 'text_prev' : ''}`}>{texts[i]}</h3>


      <Location>
          {({ location }) => (

            <>

            <If condition={location.pathname.includes('bakery') || location.pathname=='/'}>

              <Link bakery arrow button className={`${'button_link'} ${this.state.activeIndex == i ? 'link_current': ''} ${this.state.animating ? 'link_animating': ''}`} to={links[i]}>{location.pathname.includes('cz') ? 'ZJISTIT VÍCE' : 'LEARN MORE'}</Link>

            </If>

            <If condition={location.pathname.includes('bakers')}>

              <Link bakers arrow button className={`${'button_link'} ${this.state.activeIndex == i ? 'link_current': ''} ${this.state.animating ? 'link_animating': ''}`} to={links[i]}>{location.pathname.includes('cz') ? 'ZJISTIT VÍCE' : 'LEARN MORE'}</Link>

            </If>

             <If condition={location.pathname.includes('crowders')}>

              <Link crowders arrow button className={`${'button_link'} ${this.state.activeIndex == i ? 'link_current': ''} ${this.state.animating ? 'link_animating': ''}`} to={links[i]}>{location.pathname.includes('cz') ? 'ZJISTIT VÍCE' : 'LEARN MORE'}</Link>

            </If>

            </>


          )}
        </Location> 

            
          <div className={`${'total_indicator'} ${this.state.activeIndex == i ? 'total_indicator_current': ''}`}>{this.props.images.length}</div>
          <div className='indicator_divider'></div>
          <div className={`${'slider_indicator'} ${this.state.activeIndex == i ? 'indicator_current': ''}`}>{i+1}</div>
        </div>


      )
    })

    var singleMobile = 100 / this.props.images.length + '%'

    var mobileCarouselImages =  images.map((image, i) =>{
      return(

        <div style={{ position: 'absolute', top: '-100%', width: '100%'}} key={'2key_'+i}>
          <h2 key={'2key_'+i} id={'i0'+(i)} className={`${'mobile_slide_heading'} ${this.state.activeIndex == (i-1) ? 'next' : ''} ${this.state.activeIndex == i ? 'current' : ''} ${this.state.activeIndex == (i+1) ? 'prev' : ''}`}>{labels[i]}</h2>
          <MobileCarouselImage style={{ width: '50px'}} horizontal={this.state.horizontal} 
          className={`${'child_image mobile_child'} ${this.state.activeIndex == i ? 'child_current': ''}`}
          key={'key_'+i} label={labels[i]} 
          timeInBetween={this.props.timeInBetween} whichOne={i} src={image} />
          <h3 key={'key_text_'+i} className={`${'mobile_slide_text'} ${this.state.activeIndex == (i-1) ? 'text_next' : ''} ${this.state.activeIndex == i ? 'text_current' : ''} ${this.state.activeIndex == (i+1) ? 'text_prev' : ''}`}>{texts[i]}</h3>

      <Location>
          {({ location }) => (


          <Link arrow 
          bakery = {location.pathname.includes('bakery') || location.pathname == '/' ? true : false}
          bakers = {location.pathname.includes('bakers') ? true : false}
          crowders = {location.pathname.includes('crowders') ? true : false}                    
          className={`${'mobile_button_link'} ${this.state.activeIndex == i ? 'link_current': ''} ${this.state.animating ? 'link_animating': ''}`} 
          to={links[i]}>{location.pathname.includes('cz') ? 'ZJISTIT VÍCE' : 'LEARN MORE'}</Link>


          )}
        </Location>

        <div className="mobile_indicators">
          <div key={'ind' + i} className={`${'slider_indicator'} ${this.state.activeIndex == i ? 'indicator_current': ''}`}>&nbsp;0{i+1}&nbsp;</div>
          <div key={ 'it' + i } className={`${'total_indicator'} ${this.state.activeIndex == i ? 'total_indicator_current': ''}`}>&nbsp;/&nbsp;0{this.props.images.length}</div>
        </div>


        </div>

      )
    })    

    var dots = images.map((image, i) =>{
      return(
        <div className='dot' data-test={i} key={i} id={i} onClick={this.gotoSlide.bind(this)}>
          <Dot index={ i } isActive={ this.state.activeIndex == i }/></div>
      )
    }) 


    return (
     <>
        <div className="desktop_carousel" style={{display:'flex',flexDirection:'row',position:'relative', height: '100%'}}>


        <Location>
          {({ location }) => (

            <If condition={!location.pathname.includes('crowders')}>

          <ReactCursorPosition className='fullscreen_cursor_position'>

              <SVGicon className={`${'home_arrow'} ${this.state.animating ? 'home_arrow_current': ''}`} src='home_arrow.svg'  />

          </ReactCursorPosition>              

            </If>


          )}
        </Location>

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


        </div>

      <Swipeable
        onSwipedRight={this.pre}
        onSwipedLeft={this.nex} 

      >

            <div className='mobile_mask' style={{width: '100%', left: 0, top: 0, right: 0, bottom: 'auto',}}>
              <div ref={this.wrapperRef_mobile} className='mobile_mask_parent_top' 
              style={{  display: 'block', width: '100%', position: 'relative'}}>         
                {mobileCarouselImages}            
              </div>
            </div>  
            {controlz}          

      </Swipeable>

    </>


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

  }

  _handleImageErrored() {
    this.setState({ imageStatus: 'failed' });
  }

  render(e) {

    var src = `${this.props.src}`;
    var srcTo = ' no-repeat center center';
    var srcToFull = 'url(' +  src + ')'+  srcTo;

    return (

      <TransitionState>
        {({ transitionStatus }) => {
          return (


            <Tween duration={1.5} delay={1.5}
            from={ ['entering'].includes(transitionStatus) ? false : { clipPath:'inset(0% 0% 100% 0%)', opacity: 0, ease: 'Power3.easeOut' } } 
            to={ ['exiting'].includes(transitionStatus) ? { clipPath:'inset(100% 0% 0% 0%)', opacity: 0, ease: 'Power3.easeInOut' } : false  } >

              <div className={this.props.className}
               style={{ 
                  clipPath: 'inset(.001% .002% .003% .004%)', 
                  transform: 'scale(1)', 
                  display: 'block', 
                  zIndex:`${this.props.whichOne}`, 
                  background:srcToFull, 
                  backgroundSize: 'cover',  
                  margin: 'auto', 
                  width: '100%', 
                  height: '35vw', 
                  minHeight: '33vh'
                }}
                onLoad={this._handleImageLoaded.bind(this)}
                onError={this._handleImageErrored.bind(this)}
              ></div>

            </Tween>
          )

        }}
      </TransitionState>


    );
  }

}

class MobileCarouselImage extends React.Component {

  constructor(props) {
    super(props);
    //console.log("Not Mounted", this.props)
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

    var src = `${this.props.src}`;
    var srcTo = ' no-repeat center center';
    var srcToFull = 'url(' +  src + ')'+  srcTo;

    return (


              <div className={this.props.className}
               style={{ clipPath: 'inset(.001% .002% .003% .004%)', transform: 'scale(1)', 
               display: 'block', zIndex:`${this.props.whichOne}`, 
               background:srcToFull, backgroundSize: 'cover',  margin: 'auto', 
               minHeight: '75vw', left: `${this.props.whichOne * 100 + 'vw'}`,
               position: 'relative'
               }}
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
