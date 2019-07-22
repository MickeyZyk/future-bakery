import * as React from 'react';
import { Link } from 'components/link/Link';
import { useState } from 'react';
import Helmet from 'react-helmet';
import { Power2 } from 'gsap/TweenMax';
import { Tween, Timeline, SplitWords, SplitLetters, Controls } from 'react-gsap';
import { TransitionState } from 'gatsby-plugin-transition-link';
import { MenuHeading } from 'components/heading/MenuHeading';
import { MenuBackground } from 'components/menubackground/MenuBackground';
import SVGicon from 'components/svgicon/SVGicon';
import SVGiconReverse from 'components/svgiconreverse/SVGiconReverse';
import ReactCursorPosition from 'react-cursor-position';


export default ({ state }) => {

  const [hovered, setHovered, section] = useState(false);	
  const toggleHover = () => setHovered(!hovered);

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
						      <SVGicon className='bakery_menu_saw' src='bakery_menu_saw.svg' /> 
						      <SVGiconReverse  className='bakery_menu_drill' src='bakery_menu_drill.svg' /> 
						      <SVGicon className='bakery_menu_paint' src='bakery_menu_paint.svg' /> 						      
									<div className='menu_row'>
				        		<Tween staggerFrom={{ opacity: 0, yPercent: 50, ease: Power2.easeInOut }} delay={0.3} duration={1} >		
											<ul>
											  <li className='menu_item_wrapper'>
												  <Link 
													onMouseEnter={toggleHover}
							      			onMouseLeave={toggleHover} 
							      			className={ hovered ? 'hovered submenu_link' : 'submenu_link'}
							      			name="About us" 
							      			to="/BakeryAbout"
				      						>
														<MenuHeading className='white_text'>About Us</MenuHeading>
												  </Link>
											  </li>
											  <li className='menu_item_wrapper'>
												  <Link 
												  onMouseEnter={toggleHover}
							      			onMouseLeave={toggleHover} 
							      			className={ hovered ? 'hovered submenu_link' : 'submenu_link'}
							      			name="Work" 
							      			to="/BakeryWork"
						      				>
														<MenuHeading className='white_text'>Work</MenuHeading>
												  </Link>
											  </li>
											  <li className='menu_item_wrapper'>
												  <Link 
												  onMouseEnter={toggleHover}
							      			onMouseLeave={toggleHover} 
							      			className={ hovered ? 'hovered submenu_link' : 'submenu_link'}
							      			name="About us" 
							      			to="/BakeryAbout"
						      				>
														<MenuHeading className='white_text'>Future Bakery family</MenuHeading>
												  </Link>
											  </li>
											  <li className='menu_item_wrapper'>
												  <Link 
												  onMouseEnter={toggleHover}
							      			onMouseLeave={toggleHover} 
							      			className={ hovered ? 'hovered submenu_link' : 'submenu_link'}
							      			name="About us" 
							      			to="/BakeryAbout"
						      				>
														<MenuHeading className='white_text'>Contact</MenuHeading>
												  </Link>
											  </li>
										  </ul>
						    	  </Tween>	
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

};
