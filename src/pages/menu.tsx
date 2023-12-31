import * as React from 'react';
import { Link } from 'components/link/Link';
import { useState } from 'react';
import { Location } from "@reach/router"
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
import BakeryLogo from 'assets/svg/bakery-logo.svg';
import BakersLogo from 'assets/svg/bakers-logo.svg';
import CrowdersLogo from 'assets/svg/crowders-logo.svg';

export default class BakeryMenu extends React.Component {

  constructor(props) {
    super(props);
    this.unorderedList = React.createRef();
    this.unorderedList2 = React.createRef();
    this.unorderedList3 = React.createRef();
    this.state = {
      isHovered: false,
      setHovered: false,
      section: false,
    };
    this.chidrenNodes = [];
    this.toggleHover = this.toggleHover.bind(this);
  }

  toggleHover() {
    this.setState(prevState => ({
      isHovered: !prevState.isHovered
    }));
  }


  componentDidMount() {

    var uL = this.unorderedList.current;
    var listItems = uL.querySelectorAll('.menu_item_wrapper');

    var itemsTL = new TimelineMax();
    itemsTL.staggerFrom(listItems, 2, { yPercent: -200, opacity: 0, ease: 'Power3.easeInOut' }, .1, "+=0");

    var uL2 = this.unorderedList2.current;
    var listItems2 = uL2.querySelectorAll('.menu_item_wrapper');

    var itemsTL2 = new TimelineMax();
    itemsTL2.staggerFrom(listItems2, 2, { yPercent: -200, opacity: 0, ease: 'Power3.easeInOut' }, .1, "+=0");

    var uL3 = this.unorderedList3.current;
    var listItems3 = uL3.querySelectorAll('.menu_item_wrapper');

    var itemsTL3 = new TimelineMax();
    itemsTL3.staggerFrom(listItems3, 2, { yPercent: -200, opacity: 0, ease: 'Power3.easeInOut' }, .1, "+=0");

  }

  render() {

    return (



      <TransitionState>
	  	{({ transitionStatus }) => {
			  return (  



					<>
    				<Helmet title="Future Bakery" />

            <Tween duration={2} 
            from={ ['entering'].includes(transitionStatus) ? false : { yPercent: 100, opacity: 1, ease: 'Power3.easeInOut' } } 
            to={ ['exiting'].includes(transitionStatus) ? { yPercent: -100, opacity: 1, ease: 'Power3.easeInOut' } : false  } >  

					<MenuBackground/>

            </Tween>

							<div className='fullscreen mob_menu_wrapper'> 
						      

									<div className='menu_row'>


											<ul className="one_third" ref={this.unorderedList}>

											<Tween duration={2} 
											            from={ ['entering'].includes(transitionStatus) ? false : { yPercent: 200, opacity: 0, ease: 'Power3.easeInOut' } } 
											            to={ ['exiting'].includes(transitionStatus) ? { yPercent: -200, opacity: 0, ease: 'Power3.easeInOut' } :  false } >  


											  <li>
										          <Location>
										            {({ location }) => ( 	


																<img style={location.state != null ? ( location.state.prevUrlPath.includes('bakery') || location.state.prevUrlPath == '/' ? {opacity:1} : {opacity:0}) : {opacity:0} } className="here_now" src="../images/bakery_now.png"/> 


			                     
														
										            )}
										          </Location> 
									          </li>
											  <li>
											  	<BakeryLogo className="menu_logo"/> 
											  </li>

											  </Tween>

											  <li className='menu_item_wrapper'>
												  <Link bakery
													onMouseEnter={this.toggleHover}
							      			onMouseLeave={this.toggleHover} 
							      			className={ this.hovered ? 'hovered submenu_link' : 'submenu_link'}
							      			name="Home" 
							      			to="/bakery" 
				      						>
			      						
														<MenuHeading className='white_text'>Home</MenuHeading>
												  </Link>
											  </li>											
											  <li className='menu_item_wrapper'>
												  <Link bakery
													onMouseEnter={this.toggleHover}
							      			onMouseLeave={this.toggleHover} 
							      			className={ this.hovered ? 'hovered submenu_link' : 'submenu_link'}
							      			name="About us" 
							      			to="/bakery-about" 
				      						>
			      						
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
						      				
														<MenuHeading className='white_text'>Contact</MenuHeading>
												  </Link>
											  </li>
										  </ul>


											<ul className="one_third" ref={this.unorderedList2}>

											<Tween duration={2} 
											            from={ ['entering'].includes(transitionStatus) ? false : { yPercent: 200, opacity: 0, ease: 'Power3.easeInOut' } } 
											            to={ ['exiting'].includes(transitionStatus) ? { yPercent: -200, opacity: 0, ease: 'Power3.easeInOut' } : false  } >  



											  <li>
										          <Location>
										            {({ location }) => ( 	


																<img style={location.state != null ? (location.state.prevUrlPath.includes('bakers') ? {opacity:1} : {opacity:0}) : {opacity:0}} className="here_now" src="../images/bakers_now.png"/> 


														
										            )}
										          </Location> 
									          </li>											
											  <li>
											  	<BakersLogo className="menu_logo"/> 
											  </li>	

											 </Tween>	


											  <li className='menu_item_wrapper'>
												  <Link bakers
													onMouseEnter={this.toggleHover}
							      			onMouseLeave={this.toggleHover} 
							      			className={ this.hovered ? 'hovered submenu_link' : 'submenu_link'}
							      			name="Home" 
							      			to="/bakers" 
				      						>
			      						
														<MenuHeading className='white_text'>Home</MenuHeading>
												  </Link>
											  </li>												
											  <li className='menu_item_wrapper'>
												  <Link bakers
													onMouseEnter={this.toggleHover}
							      			onMouseLeave={this.toggleHover} 
							      			className={ this.hovered ? 'hovered submenu_link' : 'submenu_link'}
							      			name="About us" 
							      			to="/bakers-about"
				      						>
														<MenuHeading className='white_text'>About Us</MenuHeading>
												  </Link>
											  </li>
											  <li className='menu_item_wrapper'>
												  <Link bakers
													onMouseEnter={this.toggleHover}
							      			onMouseLeave={this.toggleHover} 
							      			className={ this.hovered ? 'hovered submenu_link' : 'submenu_link'}
							      			name="Join us" 
							      			to="/bakerslogin"
				      						>
														<MenuHeading className='white_text'>Join Us</MenuHeading>
												  </Link>
											  </li>											  
											  <li className='menu_item_wrapper'>
												  <Link bakers
												  onMouseEnter={this.toggleHover}
							      			onMouseLeave={this.toggleHover} 
							      			className={ this.hovered ? 'hovered submenu_link' : 'submenu_link'}
							      			name="Work"
							      			to="/bakers-work"
						      				>
														<MenuHeading className='white_text'>Work</MenuHeading>
												  </Link>
											  </li>
											  <li className='menu_item_wrapper'>
												  <Link bakers
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
												  <Link bakers
												  onMouseEnter={this.toggleHover}
							      			onMouseLeave={this.toggleHover} 
							      			className={ this.hovered ? 'hovered submenu_link' : 'submenu_link'}
							      			name="Contact" 
							      			to="/bakerscontact"
						      				>
														<MenuHeading className='white_text'>Contact</MenuHeading>
												  </Link>
											  </li>
										  </ul>


											<ul className="one_third" ref={this.unorderedList3}>

								            <Tween duration={2} 
											            from={ ['entering'].includes(transitionStatus) ? false : { yPercent: 200, opacity: 0, ease: 'Power3.easeInOut' } } 
											            to={ ['exiting'].includes(transitionStatus) ? { yPercent: -200, opacity: 0, ease: 'Power3.easeInOut' } : false  } >  


											  <li>
										          <Location>
										            {({ location }) => ( 	



																<img style={ location.state != null ? (location.state.prevUrlPath.includes('crowders') ? {opacity:1} : {opacity:0}) : {opacity:0} } className="here_now" src="../images/crowders_now.png"/>  




														
										            )}
										          </Location> 
									          </li>											
											  <li>
											  	<CrowdersLogo className="menu_logo"/> 
											  </li>		

											</Tween>									
											  <li className='menu_item_wrapper'>
												  <Link crowders
													onMouseEnter={this.toggleHover}
							      			onMouseLeave={this.toggleHover} 
							      			className={ this.hovered ? 'hovered submenu_link' : 'submenu_link'}
							      			name="Home" 
							      			to="/crowders" 
				      						>
			      						
														<MenuHeading className='white_text'>Home</MenuHeading>
												  </Link>
											  </li>												
											  <li className='menu_item_wrapper'>
												  <Link crowders
													onMouseEnter={this.toggleHover}
							      			onMouseLeave={this.toggleHover} 
							      			className={ this.hovered ? 'hovered submenu_link' : 'submenu_link'}
							      			name="About us" 
							      			to="/crowders-about"
				      						>
														<MenuHeading className='white_text'>About Us</MenuHeading>
												  </Link>
											  </li>
											  <li className='menu_item_wrapper'>
												  <Link crowders
												  onMouseEnter={this.toggleHover}
							      			onMouseLeave={this.toggleHover} 
							      			className={ this.hovered ? 'hovered submenu_link' : 'submenu_link'}
							      			name="Work"
							      			to="/crowders-work"
						      				>
														<MenuHeading className='white_text'>Work</MenuHeading>
												  </Link>
											  </li>
											  <li className='menu_item_wrapper'>
												  <Link crowders
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
												  <Link crowders
												  onMouseEnter={this.toggleHover}
							      			onMouseLeave={this.toggleHover} 
							      			className={ this.hovered ? 'hovered submenu_link' : 'submenu_link'}
							      			name="Contact" 
							      			to="/crowderscontact"
						      				>
														<MenuHeading className='white_text'>Contact</MenuHeading>
												  </Link>
											  </li>
										  </ul>



								  </div>			  

							</div>


				      <div className='fb_linkedin_menu'>
				        <a href='https://facebook.com/FutureBakery' target='_blank'>FACEBOOK</a><a href='https://www.linkedin.com/company/the-future-bakery/about/' target='_blank'>LINKEDIN</a>
				      </div>

					</>


			  );	

	  	}}

		</TransitionState>

    )

  }

}
