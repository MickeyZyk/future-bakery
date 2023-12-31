import React, { Component } from 'react';
import Img from "gatsby-image"
import { StaticQuery, graphql } from "gatsby"
import { TransitionState } from "gatsby-plugin-transition-link";
import { Tween } from 'react-gsap'
import { Power3 } from "gsap/TweenMax";
import { Link } from 'components/link/Link';
import LinkArrow from 'assets/svg/link_arrow.svg'
import s from './Item.scss';
import { Location } from '@reach/router';
import { If } from 'react-if';
const slug = require('slug')

export class Item2 extends React.Component {


  constructor(props){
    super(props);
    this.state ={
      hover: this.props.hovered ? true : false,
    };
    this.toggleHoverLeave = this.toggleHoverLeave.bind(this);  
    this.toggleHoverEnter = this.toggleHoverEnter.bind(this);      
  }



  toggleHoverLeave() {

      if (this.props.hovered) {
        this.setState({hover: false});
      } else {
        this.setState({hover: !this.state.hover});
      }      

  }

  toggleHoverEnter() {


      if (this.props.hovered) {
        this.setState({hover: true});
      } else {
        this.setState({hover: !this.state.hover});
      }      

  }  


  componentDidMount(){
    

  }  



  render() {
  //console.log("LEMME C", this.props.data)


    return (

     <TransitionState>
        {({ transitionStatus}) => {
          return (
            <Tween duration={2} delay={1}
            from={ ['entering'].includes(transitionStatus) ? false : {clipPath:'inset(0% 0% 100% 0%)', ease: 'Power2.easeOut', opacity: 0} } 
            to={ ['exiting'].includes(transitionStatus) ? {clipPath:'inset(0% 0% 100% 0%)', ease: 'Power2.easeIn', opacity: 0 } : false } >
              <div key={this.props.i} className={`${s.figure} ${'no' + (this.props.i+1)} ${this.props.i == 0 ? 'hover_element' :''}`} onMouseEnter={this.toggleHoverEnter} onMouseLeave={this.toggleHoverLeave}>
                <Tween duration={.2} to={ this.state.hover ? {ease: 'Power2.easeOut', opacity: 1} : {ease: 'Power2.easeOut', opacity: 0}} >
                  <img className={s.arrow} src={'../svg/work_arrow_new.svg'} />
                </Tween>
                 


                  <Location>
                      {({ location }) => (

                        <>

                        <If condition={location.pathname.includes('bakery')}>
                <Tween duration={.2} to={ this.state.hover ? {ease: 'Power2.easeOut', opacity: 1} : {ease: 'Power2.easeOut',  opacity: 0}} >    
                          <h4 className={s.arrow_heading_bigger}>{this.props.data.node.heading_tag}</h4> 
                </Tween>
                        </If>

                        <If condition={location.pathname.includes('bakers')}>
                <Tween duration={.2} to={ this.state.hover ? {ease: 'Power2.easeOut', opacity: 1} : {ease: 'Power2.easeOut',  opacity: 0}} >    
                          <h4 className={s.arrow_heading_bigger}>{this.props.data.node.heading_tag}</h4> 
                </Tween>
                        </If>

                         <If condition={location.pathname.includes('crowders')}>
                <Tween duration={.2} to={ this.state.hover ? {ease: 'Power2.easeOut', opacity: 1} : {ease: 'Power2.easeOut',  opacity: 0}} >    
                          <h4 className={s.arrow_heading}>{this.props.data.node.heading_tag}</h4> 
                </Tween>
                        </If>

                        </>


                      )}
                    </Location>

   

                <Tween duration={1} to={ this.state.hover ? { opacity: 1, delay: 1, ease: 'Power2.easeOut'} : {ease: 'Power2.easeOut',  opacity: 0, delay: .5}} >                               
                  <img className={s.client_logo} src=""/>
                </Tween>
                <Tween duration={1} to={ this.state.hover ? { opacity: 1, delay: 1, ease: 'Power2.easeOut'} : {ease: 'Power2.easeOut',  opacity: 0, delay: .5}} >                      
                  <h4 className={s.top_title}>{this.props.data.node.category_name}</h4>
                </Tween>
                <Tween duration={2} to={ this.state.hover ? {delay: 1, ease: 'Power2.easeOut', clipPath:'inset(0.001% 0.002% 0.003% 0.005%)'} : {delay: 1, ease: 'Power2.easeOut', clipPath:'inset(0.001% 100% 0.003% 0.004%)'}} >                      
                  <h2 className={s.client_title}>{this.props.data.node.heading_two}</h2>
                </Tween>
                <Tween duration={1} to={ this.state.hover ? { opacity: 1, delay: 1, ease: 'Power2.easeOut'} : {ease: 'Power2.easeOut',  opacity: 0, delay: .5}} >  
                  <h3 className={s.client_more}>
                  <Location>
                    {({ location }) => ( 

                      <>     

                      <Link arrow white
                        to={ 
                          location.pathname.includes('czbakers') ? "/czbakers-work/" + slug(this.props.data.node.title.toLowerCase())                         
                          : '/bakers-work/' + slug(this.props.data.node.title.toLowerCase()) 
                        }>FIND OUT MORE</Link>

                      </>

                      )}
                  </Location> 

                  </h3>
                </Tween>                      
                <img className={s.bw} style={this.state.hover ? {opacity:0}:{opacity:1}} src={ 'https://futurebakery.cz/grav/en/bakery/work/'+ slug(this.props.data.node.title.toLowerCase()) + '/' + this.props.data.node.big_image}/>                        
                <img className={s.bw_overlay} style={this.state.hover ? {opacity:1}:{opacity:0}} src="../images/bakers_overlay.png"/>                 
                <img className={s.color} style={this.state.hover ? {opacity:1}:{opacity:0}} src={ 'https://futurebakery.cz/grav/en/bakery/work/'+ slug(this.props.data.node.title.toLowerCase()) + '/' + this.props.data.node.big_image} />
              </div>
            </Tween>                   
          )
        }}
      </TransitionState>
    )
  }
}


