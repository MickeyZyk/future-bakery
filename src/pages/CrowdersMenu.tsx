import * as React from 'react';
import { Link } from 'components/link/Link';
import { useState } from 'react';
import Helmet from 'react-helmet';
import { TweenMax, TimelineMax, Power2, Power3 } from "gsap";
import { TransitionState } from 'gatsby-plugin-transition-link';
import { MenuHeading } from 'components/heading/MenuHeading';
import { MenuBackground } from 'components/menubackground/MenuBackground';
import SVGicon from 'components/svgicon/SVGicon';
import SVGiconReverse from 'components/svgiconreverse/SVGiconReverse';
import ReactCursorPosition from 'react-cursor-position';
import ReactDOM from 'react-dom';

export default class BEakeryMenu extends React.Component {

  constructor(props){
    super(props);
    this.unorderedList = React.createRef();        
    this.state ={
      isHovered: false,
      setHovered: false,
      section: false,
    };
    this.chidrenNodes = [];
    this.toggleHover = this.toggleHover.bind(this);    
  }

	toggleHover(){
    this.setState(prevState => ({
        isHovered: !prevState.isHovered
    }));
	}


  componentDidMount(){

  	var uL = this.unorderedList.current;
  	var listItems = uL.querySelectorAll('.menu_item_wrapper');  	

    var itemsTL = new TimelineMax();
    itemsTL.staggerFrom(listItems, 2, { yPercent: -200, opacity: 0, ease: 'Power3.easeInOut'}, .1, "+=0");

  }

  render() {

  return (

	  <TransitionState>
	  	{({ transitionStatus }) => {
			  return (  	
					<>
					<MenuBackground/>
					  <Helmet title="Future Bakery" />
							<div className='fullscreen'>
						    <ReactCursorPosition className='fullscreen_cursor_position'>   
						      <Helmet title="Bakery" />
						      <SVGicon className='crowders_menu_phone' src='crowders_menu_phone.svg' /> 
						      <SVGiconReverse  className='crowders_menu_blah' src='crowders_menu_blah.svg' /> 
						      <SVGicon className='crowders_menu_chat' src='crowders_menu_chat.svg' /> 						      
									<div className='menu_row crowders_menu'>
											<ul ref={this.unorderedList}>
											  <li className='menu_item_wrapper'>
												  <Link 
													onMouseEnter={this.toggleHover}
							      			onMouseLeave={this.toggleHover} 
							      			className={ this.hovered ? 'hovered submenu_link' : 'submenu_link'}
							      			name="About us" 
							      			to="/BakersAbout"
				      						>
														<MenuHeading className='white_text'>About Us</MenuHeading>
												  </Link>
											  </li>
											  <li className='menu_item_wrapper'>
												  <Link 
												  onMouseEnter={this.toggleHover}
							      			onMouseLeave={this.toggleHover} 
							      			className={ this.hovered ? 'hovered submenu_link' : 'submenu_link'}
							      			name="Work"
							      			to="/BakeryWork"
						      				>
														<MenuHeading className='white_text'>Work</MenuHeading>
												  </Link>
											  </li>
											  <li className='menu_item_wrapper'>
												  <Link 
												  onMouseEnter={this.toggleHover}
							      			onMouseLeave={this.toggleHover} 
							      			className={ this.hovered ? 'hovered submenu_link' : 'submenu_link'}
							      			name="Future Bakery Family" 
							      			to="/family"
						      				>
														<MenuHeading className='white_text'>Future Bakery family</MenuHeading>
												  </Link>
											  </li>
											  <li className='menu_item_wrapper'>
												  <Link 
												  onMouseEnter={this.toggleHover}
							      			onMouseLeave={this.toggleHover} 
							      			className={ this.hovered ? 'hovered submenu_link' : 'submenu_link'}
							      			name="Contact" 
							      			to="/contact"
						      				>
														<MenuHeading className='white_text'>Contact</MenuHeading>
												  </Link>
											  </li>
										  </ul>
								  </div>
						    </ReactCursorPosition>
							</div>

				      <div className='fb_linkedin_menu'>
				        <a href='https://facebook.com' target='_blank'>FACEBOOK</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href='https://linkedin.com' target='_blank'>LINKEDIN</a>
				      </div>

					</>

			  );	

	  	}}

		</TransitionState>	

	)

}

}
