import React, { useState, useRef, useEffect } from "react";
import { TweenMax, TimelineMax, Power3 } from "gsap";
import { Tween } from 'react-gsap';
import { Row } from 'components/row/Row';
import ReactDOM from 'react-dom';
import s from './Clients.scss';


export class Clients extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      activeIndex: 0,
    };    
    this.image_01 = React.createRef(); 
    this.image_02 = React.createRef(); 
    this.image_03 = React.createRef(); 
    this.image_04 = React.createRef(); 
    this.image_05 = React.createRef(); 
    this.image_06 = React.createRef(); 
    this.image_07 = React.createRef();
    this.image_08 = React.createRef();         
    this.image_09 = React.createRef(); 

    this.imageb_01 = React.createRef(); 
    this.imageb_02 = React.createRef(); 
    this.imageb_03 = React.createRef(); 
    this.imageb_04 = React.createRef(); 
    this.imageb_05 = React.createRef(); 
    this.imageb_06 = React.createRef(); 
    this.imageb_07 = React.createRef();
    this.imageb_08 = React.createRef();         
    this.imageb_09 = React.createRef();


    this.prevSlide = this.prevSlide.bind(this); 
 

  }


  componentDidMount(){
        var TL = new TimelineMax({repeat:-1}); 
        TL

        .to(this.image_06.current, 2, { opacity: 0 })
        .to(this.image_03.current, 2, { opacity: 0 })
        .to(this.image_08.current, 2, { opacity: 0 })
        .to(this.image_01.current, 2, { opacity: 0 })
        .to(this.image_04.current, 2, { opacity: 0 })
        .to(this.image_07.current, 2, { opacity: 0 })
        .to(this.image_02.current, 2, { opacity: 0 })
        .to(this.image_05.current, 2, { opacity: 0 })
        .to(this.image_09.current, 2, { opacity: 0 })
        .to(this.image_06.current, 2, { opacity: 1 })
        .to(this.image_03.current, 2, { opacity: 1 })
        .to(this.image_08.current, 2, { opacity: 1 })
        .to(this.image_01.current, 2, { opacity: 1 })
        .to(this.image_04.current, 2, { opacity: 1 })
        .to(this.image_07.current, 2, { opacity: 1 })
        .to(this.image_02.current, 2, { opacity: 1 })
        .to(this.image_05.current, 2, { opacity: 1 })
        .to(this.image_09.current, 2, { opacity: 1 })                

        var TLB = new TimelineMax({repeat:-1}); 
        TLB
        .to(this.imageb_06.current, 2, { opacity: 1 })
        .to(this.imageb_03.current, 2, { opacity: 1 })
        .to(this.imageb_08.current, 2, { opacity: 1 })
        .to(this.imageb_01.current, 2, { opacity: 1 })
        .to(this.imageb_04.current, 2, { opacity: 1 })
        .to(this.imageb_07.current, 2, { opacity: 1 })
        .to(this.imageb_02.current, 2, { opacity: 1 })
        .to(this.imageb_05.current, 2, { opacity: 1 })
        .to(this.imageb_09.current, 2, { opacity: 1 })         
        .to(this.imageb_06.current, 2, { opacity: 0 })
        .to(this.imageb_03.current, 2, { opacity: 0 })
        .to(this.imageb_08.current, 2, { opacity: 0 })
        .to(this.imageb_01.current, 2, { opacity: 0 })
        .to(this.imageb_04.current, 2, { opacity: 0 })
        .to(this.imageb_07.current, 2, { opacity: 0 })
        .to(this.imageb_02.current, 2, { opacity: 0 })
        .to(this.imageb_05.current, 2, { opacity: 0 })
        .to(this.imageb_09.current, 2, { opacity: 0 }) 

     
    


  }

  prevSlide(){
  }

  componentWillUnmount(){
  }

  render() {

    return (

        <Row style={{maxHeight: '54vw'}}>

            <img src="../images/about_fiat_logo.png" className="whom_01" ref={this.image_01}/>
            <img src="../images/about_nike_logo.png" className="whom_02" ref={this.image_02}/>
            <img src="../images/pscp.png" className="whom_03" ref={this.image_03}/>

            <img src="../images/remax.png" className="whom_01" ref={this.image_04}/>
            <img src="../images/about_fiat_logo.png" className="whom_02" ref={this.image_05}/>
            <img src="../images/about_nike_logo.png" className="whom_03" ref={this.image_06}/>

            <img src="../images/pscp.png" className="whom_01" ref={this.image_07}/>
            <img src="../images/remax.png" className="whom_02" ref={this.image_08}/>
            <img src="../images/about_fiat_logo.png" className="whom_03" ref={this.image_09}/>      



            <img src="../images/remax.png" className="whom_01 b_image" ref={this.imageb_01}/>
            <img src="../images/pscp.png" className="whom_02 b_image" ref={this.imageb_02}/>
            <img src="../images/about_nike_logo.png" className="whom_03 b_image" ref={this.imageb_03}/>

            <img src="../images/about_fiat_logo.png" className="whom_01 b_image" ref={this.imageb_04}/>
            <img src="../images/remax.png" className="whom_02 b_image" ref={this.imageb_05}/>
            <img src="../images/pscp.png" className="whom_03 b_image" ref={this.imageb_06}/>

            <img src="../images/about_nike_logo.png" className="whom_01 b_image" ref={this.imageb_07}/>
            <img src="../images/about_fiat_logo.png" className="whom_02 b_image" ref={this.imageb_08}/>
            <img src="../images/pscp.png" className="whom_03 b_image" ref={this.imageb_09}/>      






        </Row>      

    );

  }
}

