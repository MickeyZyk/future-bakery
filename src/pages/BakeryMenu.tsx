import * as React from 'react';
import { Link } from 'components/link/Link';
import { useState } from 'react';
import Helmet from 'react-helmet';
import { Power2 } from 'gsap/TweenMax';
import { Tween, Timeline, SplitWords, SplitLetters, Controls } from 'react-gsap';
import { TransitionState } from 'gatsby-plugin-transition-link';
import { MenuHeading } from 'components/heading/MenuHeading';
import { MenuBackground } from 'components/menubackground/MenuBackground';


export default ({ state }) => {

	const [hovered, setHovered] = useState(false);	
  const toggleHover = () => setHovered(!hovered);

  return (

	  <TransitionState>

	  	{({ transitionStatus }) => {

			  return (  	

					<>

					  <Helmet title="Future Bakery" />

							<div className='fullscreen'>

						

								<div className='menu_row'>

					        <Tween staggerFrom={{ opacity: 0, yPercent: 50, easing: Power2.easeInOut }} delay={0.3} duration={1} >		
										
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
							      			name="About us" 
							      			to="/BakeryAbout"
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
						  

							  <MenuBackground/>

							</div>

					</>

			  );	

	  	}}

		</TransitionState>	

	)

};
