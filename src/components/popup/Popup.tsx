import * as React from 'react';
import { TweenMax, TimelineMax, Power3} from "gsap";
import { Tween } from 'react-gsap';
import { TransitionState } from "gatsby-plugin-transition-link";
import { Location } from "@reach/router"
import { HeadingTwo } from 'components/heading/HeadingTwo';
import { Link } from 'components/link/Link';
import { Row } from 'components/row/Row';
import { PlainParagraph } from 'components/paragraph/PlainParagraph';
import s from './Popup.scss';

export class Popup extends React.Component {

  constructor(props){
    super(props);
    this.state = {
        showComponent: true,
    };    
    this.hide_overlay = this.hide_overlay.bind(this);
  }

	hide_overlay() {
	  this.setState({
	    showComponent: false
	  })
	}  

  render() {

		return (

			<Location>
			  {({ location }) => (  		
						
				  <TransitionState>
				  	{({ transitionStatus }) => {
						  return (  

			            <Tween duration={2} 
			            from={ ['entering'].includes(transitionStatus) ? false : { yPercent: 100, opacity: 1, ease: 'Power3.easeInOut' } } 
			            to={ ['exiting'].includes(transitionStatus) ? { yPercent: -100, opacity: 1, ease: 'Power3.easeInOut' } : false  } >  

										<div style={ this.state.showComponent ? {visibility: 'visible'} : {visibility: 'hidden'} } className={s.background} onClick={this.hide_overlay}>

					            <Tween duration={2} 
					            from={ ['entering'].includes(transitionStatus) ? false : { yPercent: -200, opacity: 0, ease: 'Power3.easeInOut' } } 
					            to={ ['exiting'].includes(transitionStatus) ? { yPercent: 200, opacity: 1, ease: 'Power3.easeInOut' } : false  } >  

													<div className={s.background_logo} style={{backgroundImage: 'url(/svg/popupBakers.svg)'}}>															

														<HeadingTwo className={s.heading}>MILÍ PŘÁTELÉ FUTURE BAKERY, JSTE TADY SPRÁVNĚ.</HeadingTwo>
														<PlainParagraph className={s.paragraph}>Spustili jsme nový web, kde jsme obsáhli všechna zákoutí naší činnosti, celou naší nabídku, čemu se věnujeme a s čím dokážeme pomoci. 
A zároveň jsme zdokonalili online prostředí pro ty z vás, kdo nápady máte a rádi je nabídnete těm, kteří je potřebují.</PlainParagraph>
														<Row >
															<Link onClick={this.hide_overlay} bakers arrow button className="popup_button" to={location.pathname}>POKRAČOVAT</Link>
														</Row>

													</div>

											</Tween>

										</div>

			            </Tween>

						  );	

				  	}}

					</TransitionState>	

				)}
			</Location> 

		)

  }

}
