import React, { useState, useRef, useEffect } from "react";
import { TweenMax, TimelineMax, Power3 } from "gsap";
import { Tween } from 'react-gsap';
import { Row } from 'components/row/Row';
import ReactDOM from 'react-dom';
import s from './Clients.scss';
import {Swipeable} from 'react-swipeable'


export class MobileClients extends React.Component {

  constructor(props){
    super(props);
    this.state ={
      currentTopIcon: 0
    };
    this.prevTopIcon = this.prevTopIcon.bind(this);  
    this.nextTopIcon = this.nextTopIcon.bind(this);    
  }

  prevTopIcon() {
    console.log(this.state.currentTopIcon)    
    this.state.currentTopIcon > 0 ? this.setState({ currentTopIcon: this.state.currentTopIcon - 1 }) : null

  }

  nextTopIcon() {
    console.log(this.state.currentIcon)      
    this.state.currentTopIcon < 17 ? this.setState({ currentTopIcon: this.state.currentTopIcon + 1 }) : null    
  } 

   render() {

    return (
      <Row>

      <Swipeable
        onSwipedRight={this.prevTopIcon}
        onSwipedLeft={this.nextTopIcon} > 


        <div className="mobile_clients show_on_mobile">

            <img style={ this.state.currentTopIcon == 0 ?  { opacity : 1 } : { opacity : 0 } } src="../images/bos.png"/>
            <img style={ this.state.currentTopIcon == 1 ?  { opacity : 1 } : { opacity : 0 } } src="../images/bublology.png"/>
            <img style={ this.state.currentTopIcon == 2 ?  { opacity : 1 } : { opacity : 0 } } src="../images/captain-morgan.png"/>

            <img style={ this.state.currentTopIcon == 3 ?  { opacity : 1 } : { opacity : 0 } } src="../images/cebia.png" />
            <img style={ this.state.currentTopIcon == 4 ?  { opacity : 1 } : { opacity : 0 } } src="../images/clavin.png" />
            <img style={ this.state.currentTopIcon == 5 ?  { opacity : 1 } : { opacity : 0 } } src="../images/coyote.png" />

            <img style={ this.state.currentTopIcon == 6 ?  { opacity : 1 } : { opacity : 0 } } src="../images/creative-dock.png" />
            <img style={ this.state.currentTopIcon == 7 ?  { opacity : 1 } : { opacity : 0 } } src="../images/czechinn.png" />
            <img style={ this.state.currentTopIcon == 8 ?  { opacity : 1 } : { opacity : 0 } } src="../images/das.png" />      

            <img style={ this.state.currentTopIcon == 9 ?  { opacity : 1 } : { opacity : 0 } } src="../images/dongoiovan.png" />
            <img style={ this.state.currentTopIcon == 10 ?  { opacity : 1 } : { opacity : 0 } } src="../images/dukla.png" />
            <img style={ this.state.currentTopIcon == 11 ?  { opacity : 1 } : { opacity : 0 } } src="../images/emco.png" />

            <img style={ this.state.currentTopIcon == 12 ?  { opacity : 1 } : { opacity : 0 } } src="../images/mallcz.png" />
            <img style={ this.state.currentTopIcon == 13 ?  { opacity : 1 } : { opacity : 0 } } src="../images/grants.png" />
            <img style={ this.state.currentTopIcon == 14 ?  { opacity : 1 } : { opacity : 0 } } src="../images/hello.png" />

            <img style={ this.state.currentTopIcon == 15 ?  { opacity : 1 } : { opacity : 0 } } src="../images/hledamerodice.png" />
            <img style={ this.state.currentTopIcon == 16 ?  { opacity : 1 } : { opacity : 0 } } src="../images/muller.png" />
            <img style={ this.state.currentTopIcon == 17 ?  { opacity : 1 } : { opacity : 0 } } src="../images/jihoceska-univerzita.png" />      


        </div>  

        </Swipeable>        


        <>
            <div className="cr_mob_left mobile_clients_left">
              <div onClick={this.prevTopIcon} className="mob_nextprev"><img src="/svg/mob_left.svg"/></div>
            </div>
            <div className="cr_mob_right  mobile_clients_right"> 
              <div onClick={this.nextTopIcon} className="mob_nextprev"><img src="/svg/mob_right.svg"/></div>
            </div>
        </>
      <div className="crowders_top_icons_indicators mobile_clients_indicators" style={{position: 'relative'}}>
        {this.state.currentTopIcon + 1} / 18
      </div>         


      </Row>  

    );

  }
}

