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
import { globalHistory, Location } from "@reach/router"
import { If, Then, Else, Switch, Case, Default } from 'react-if'
import { ContextProviderComponent } from "utils/Context";
import ContextConsumer from "utils/Context";

export default class BakersMenu extends React.Component {

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
							<div className='fullscreen mob_menu_wrapper'>
						    <ReactCursorPosition className='fullscreen_cursor_position'>   
						      <Helmet title="Bakery" />
						      <SVGicon className='bakers_menu_crown' src='bakers_menu_crown.svg' /> 
						      <SVGiconReverse  className='bakers_menu_baloons' src='bakers_menu_baloons.svg' /> 
						      <SVGicon className='bakers_menu_temple' src='bakers_menu_temple.svg' /> 						      
									<div className='menu_row bakers_menu'>
											<ul ref={this.unorderedList}>
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
								  </div>
						    </ReactCursorPosition>
							</div>

				      <div className='fb_linkedin_menu'>
				        <a href='https://facebook.com/FutureBakery' target='_blank'>FACEBOOK</a><a href='https://www.linkedin.com/company/the-future-bakery/about/' target='_blank'>LINKEDIN</a>
				      </div>



			         <Location>
			            {({ location }) => (   
			                <>

			              <If condition={location.pathname.includes('bakers') && !location.pathname.includes('cz')}>

			                <Then>

			                <ContextConsumer>
			                  {({ data, set  }) => (
			                    <Link 
			                    className={ 'submenu_link switcher_link mobile_switcher'} 
			                    onClick={() => set({ logo: 'bakers' })} name="FUTURE BAKERY" to="/czbakers">CZ / <span className="bold">EN</span></Link>
			                  )}
			                </ContextConsumer>

			                </Then>

			              </If>

			              <If condition={location.pathname.includes('czbakers')}>

			                <Then>

			                <ContextConsumer>
			                  {({ data, set  }) => (
			                    <Link 
			                    className={ 'submenu_link switcher_link mobile_switcher'} 
			                    onClick={() => set({ logo: 'bakers' })} name="FUTURE BAKERY" to="/bakers"><span className="bold">CZ</span> / EN</Link>
			                  )}
			                </ContextConsumer>

			                </Then>

			              </If>              

			              </>
			            )}
			          </Location> 


					</>


			  );	

	  	}}

		</TransitionState>	

	)

}

}
