import * as React from 'react';
import { Link } from 'components/link/Link';
import { useState } from 'react';
import Helmet from 'react-helmet';
import { Power2 } from 'gsap/TweenMax';
import { Tween, Timeline, SplitWords, SplitLetters, Controls } from 'react-gsap';
import { TransitionState } from 'gatsby-plugin-transition-link';
import { MenuHeading } from 'components/heading/MenuHeading';
import { Row } from 'components/row/Row';
import { MenuBackground } from 'components/menubackground/MenuBackground';
import SVGicon from 'components/svgicon/SVGicon';
import SVGiconReverse from 'components/svgiconreverse/SVGiconReverse';
import ReactCursorPosition from 'react-cursor-position';
import LeftArrow from 'assets/svg/slider_arrow_left.svg'
import RightArrow from 'assets/svg/slider_arrow_right.svg'



export default ({ state }) => {

  const [hovered, setHovered, section] = useState(false);	
  const [current, setCurrent] = useState(0);	  
  const toggleHover = () => setHovered(!hovered);

  function moveLeft(){
  	if(current > 0){
    	setCurrent(current => current - 1);
			console.log(current);
  	}  	
  }

  function moveRight(){
  	if(current < 2){
    	setCurrent(current => current + 1);
			console.log(current);
  	}  	
  }  


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
									<h2 className="family_heading">FUTURE BAKERY FAMILY</h2>
									<div className="family_row">		      
										<div className="family_wrapper family_bakery_wrapper" onMouseEnter={toggleHover} onMouseLeave={toggleHover} style={ current==0 ? {opacity: 1, left: 0} : {opacity: 0, left: 0} }>
								      <SVGicon className='family_icon family_bakery_icon' src='family_bakery.svg' /> 
								      <h3 className="family_subheading">Future Bakery</h3>
								      <p className="family_paragraph">Unleash your creativity and ideas. Join thousands of other creative souls who are eager to share ideas.</p>	
								      <Link className="family_link family_bakery_link" to={'/bakery'}>FIND OUT MORE</Link>							      
										</div>
										<div className=" family_wrapper family_bakers_wrapper" onMouseEnter={toggleHover} onMouseLeave={toggleHover} style={ current==1 ?  {opacity: 1, left: '-89vw'} : {opacity: 0, left: 0} }>
								      <SVGicon className='family_icon family_bakers_icon' src='family_bakers.svg' />
								      <h3 className="family_subheading">Future Bakers</h3>
								      <p className="family_paragraph">Unleash your creativity and ideas. Join thousands of other creative souls who are eager to share ideas.</p>
								      <Link className="family_link family_bakers_link" to={'/bakers'}>FIND OUT MORE</Link>							      
										</div>
										<div className=" family_wrapper family_crowders_wrapper" onMouseEnter={toggleHover} onMouseLeave={toggleHover} style={ current==2 ?  {opacity: 1, left: '-178vw'} : {opacity: 0, left: 0} }>
								      <SVGicon className='family_icon family_crowders_icon' src='family_crowders.svg' />
								      <h3 className="family_subheading">Future Crowders</h3>
								      <p className="family_paragraph">Unleash your creativity and ideas. Join thousands of other creative souls who are eager to share ideas.</p>								      
								      <Link className="family_link family_crowders_link" to={'/crowders'}>FIND OUT MORE</Link>							      
										</div>
									</div>
									<div className="mobile_slider_controls">
										<LeftArrow onClick={moveLeft}/>
										<RightArrow onClick={moveRight}/> 
										<h4 className="mobile_slider_indicator">0{current+1}/<span>03</span></h4>
									</div>
						    </ReactCursorPosition>
						</div>
					</>

			  );	

	  	}}

		</TransitionState>	

	)

};
