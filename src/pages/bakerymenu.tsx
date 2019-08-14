import * as React from 'react';
import { Link } from 'components/link/Link';
import { useState } from 'react';
import Helmet from 'react-helmet';
import { TweenMax, TimelineMax, Power2, Power3 } from "gsap";
import { Tween } from 'react-gsap';
import { TransitionState } from 'gatsby-plugin-transition-link';
import { MenuHeading } from 'components/heading/MenuHeading';
import { MenuBackground } from 'components/menubackground/MenuBackground';
import SVGicon from 'components/svgicon/SVGicon';
import SVGiconReverse from 'components/svgiconreverse/SVGiconReverse';
import ReactCursorPosition from 'react-cursor-position';
import ReactDOM from 'react-dom';

export default class BakeryMenu extends React.Component {

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


            <Tween duration={2} 
            from={ ['entering'].includes(transitionStatus) ? false : { yPercent: 100, opacity: 1, ease: 'Power3.easeInOut' } } 
            to={ ['exiting'].includes(transitionStatus) ? { yPercent: -100, opacity: 1, ease: 'Power3.easeInOut' } : false  } >  

					<MenuBackground/>

            </Tween>



					  <Helmet title="Future Bakery" />
							<div className='fullscreen mob_menu_wrapper'>
  
						      <Helmet title="Bakery" />
									<div className='menu_row'>
											<ul ref={this.unorderedList}>
											  <li className='menu_item_wrapper'>
												  <Link bakery
													onMouseEnter={this.toggleHover}
							      			onMouseLeave={this.toggleHover} 
							      			className={ this.hovered ? 'hovered submenu_link' : 'submenu_link'}
							      			name="About us" 
							      			to="/bakery-about"
				      						>
							    					<ReactCursorPosition className='menu_cursor_position'> 						      				
												      <SVGicon className='menu_crown' src='bakery_menu_crown.svg' /> 
												      <SVGiconReverse  className='menu_baloons' src='bakery_menu_baloons.svg' /> 
												      <SVGicon className='menu_temple' src='bakery_menu_temple.svg' /> 
												    </ReactCursorPosition>				      						
														<MenuHeading className='white_text'>About Us</MenuHeading>
												  </Link>
											  </li>
											  <li className='menu_item_wrapper'>
												  <Link bakery
												  onMouseEnter={this.toggleHover}
							      			onMouseLeave={this.toggleHover} 
							      			className={ this.hovered ? 'hovered submenu_link' : 'submenu_link'}
							      			name="Work" 
							      			to="/bakery-work"
						      				>
							    					<ReactCursorPosition className='menu_cursor_position'> 						      				
												      <SVGicon className='menu_saw' src='bakery_menu_saw.svg' /> 
												      <SVGiconReverse  className='menu_drill' src='bakery_menu_drill.svg' /> 
												      <SVGicon className='menu_paint' src='bakery_menu_paint.svg' />
												    </ReactCursorPosition>												      
														<MenuHeading className='white_text'>Work</MenuHeading>

												  </Link>
											  </li>
											  <li className='menu_item_wrapper'>
												  <Link bakery
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
												  <Link bakery
												  onMouseEnter={this.toggleHover}
							      			onMouseLeave={this.toggleHover} 
							      			className={ this.hovered ? 'hovered submenu_link' : 'submenu_link'}
							      			name="Contact" 
							      			to="/bakerycontact"
						      				>
							    					<ReactCursorPosition className='menu_cursor_position'> 								      				
												      <SVGicon className='menu_phone' src='bakery_menu_phone.svg' /> 
												      <SVGiconReverse  className='menu_blah' src='bakery_menu_blah.svg' /> 
												      <SVGicon className='menu_chat' src='bakery_menu_chat.svg' /> 						      				
												    </ReactCursorPosition>						      				
														<MenuHeading className='white_text'>Contact</MenuHeading>
												  </Link>
											  </li>
										  </ul>
								  </div>

							</div>

				      <div className='fb_linkedin_menu'>
				        <a href='https://facebook.com' target='_blank'>FACEBOOK</a><a href='https://linkedin.com' target='_blank'>LINKEDIN</a>
				      </div>

					</>













			  );	

	  	}}

		</TransitionState>	

	)

}

}
