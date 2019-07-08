import * as React from 'react';
import { useState } from 'react';
import Helmet from 'react-helmet';
import { Power3 } from 'gsap/TweenMax';
import { Tween } from 'react-gsap';
import { TransitionState } from 'gatsby-plugin-transition-link';
import { MenuHeading } from 'components/heading/MenuHeading';
import { MenuBackground } from 'components/menubackground/MenuBackground';
import { Link } from 'components/link/Link';
import { ContextProviderComponent } from "utils/Context";
import ContextConsumer from "utils/Context";

export default ({ data, set, state }) => {

	const [hovered, setHovered] = useState(false);	
  const toggleHover = () => setHovered(!hovered);

  return (

	  <TransitionState>

	  	{({ transitionStatus }) => {

			  return (  	

					<>

					  <Helmet title="Future Bakery" />

				    <ContextProviderComponent>	  

							<div className='fullscreen'>

								<div className='menu_row'>

					        <Tween delay={0} duration={1} stagger={0.2}
						        staggerFrom={ ['entering'].includes(transitionStatus) ? false : { stagger:0.2, opacity: 0, yPercent: 100, rotationX: 45, ease: Power3.easeInOut } } 
						        staggerTo={ ['exiting'].includes(transitionStatus) ? { stagger:0.2, opacity: 0, yPercent: 100, rotationX: 45, ease: Power3.easeInOut} : false } 
					        >

						        <ContextConsumer>
						          {({ data, set, TransitionState }) => (			

										  <Link 
											  onClick={() => set({ menuOpen: !data.menuOpen })} 
											  onMouseEnter={toggleHover}
						      			onMouseLeave={toggleHover} 
						      			className={ hovered ? 'hovered submenu_link' : 'submenu_link'}
						      			name="About us" 
						      			to="/BakeryAbout"
					      			>
												<MenuHeading className='white_text'>About Us</MenuHeading>
										  </Link>

						          )}
						        </ContextConsumer>

						        <ContextConsumer>
						          {({ data, set }) => (	

										  <Link 
											  onClick={() => set({ menuOpen: !data.menuOpen })} 
											  onMouseEnter={toggleHover}
						      			onMouseLeave={toggleHover} 
						      			className={ hovered ? 'hovered submenu_link' : 'submenu_link'}
						      			name="About us" 
						      			to="/BakeryWork"
					      			>
												<MenuHeading className='white_text'>Work</MenuHeading>
										  </Link>

						          )}
						        </ContextConsumer>

						        <ContextConsumer>
						          {({ data, set }) => (						  

										  <Link 
											  onClick={() => set({ menuOpen: !data.menuOpen })} 
											  onMouseEnter={toggleHover}
						      			onMouseLeave={toggleHover} 
						      			className={ hovered ? 'hovered submenu_link' : 'submenu_link'}
						      			name="About us" 
						      			to="/BakeryFamily"
					      			>
												<MenuHeading className='white_text'>Future Bakery family</MenuHeading>
										  </Link>

						          )}
						        </ContextConsumer>

						        <ContextConsumer>
						          {({ data, set }) => (						  

										  <Link 
											  onClick={() => set({ menuOpen: !data.menuOpen })} 
											  onMouseEnter={toggleHover}
						      			onMouseLeave={toggleHover} 
						      			className={ hovered ? 'hovered submenu_link' : 'submenu_link'}
						      			name="About us" 
						      			to="/BakeryContact"
					      			>
												<MenuHeading className='white_text'>Contact</MenuHeading>
										  </Link>					  

						          )}
						        </ContextConsumer>		

					    	  </Tween>

							  </div>

							  <MenuBackground/>

							</div>

						</ContextProviderComponent>

					</>

			  );	

	  	}}

		</TransitionState>	

	)

};
