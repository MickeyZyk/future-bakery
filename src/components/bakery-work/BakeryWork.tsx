import * as React from 'react';
import Helmet from 'react-helmet';
import { Slider } from 'components/slider/Slider';
import { Heading } from 'components/heading/Heading';
import { Item } from 'components/item/Item';
import ReactDOM from 'react-dom';
import { Split } from 'components/split/Split';
import SVGicon from 'components/svgicon/SVGicon';
import SVGiconReverse from 'components/svgiconreverse/SVGiconReverse';
import ReactCursorPosition from 'react-cursor-position';
import { Link } from 'components/link/Link';
import LinkArrow from 'assets/svg/link_arrow.svg'
import { Footer } from 'components/footer/Footer';

import SmoothScrollbar from 'smooth-scrollbar';
import Scrollbar from 'react-smooth-scrollbar';

import { TweenMax, TimelineMax, Power3} from "gsap";
import { Tween } from 'react-gsap';
import { TransitionState } from "gatsby-plugin-transition-link";

export default class BakeryWork extends React.Component {


  constructor(props){
    super(props);
    this.hovered_item = React.createRef();
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



	fireEvent(elementId, eventName) {
	  if(document.getElementById(elementId) != null) {   
	    if(document.getElementById(elementId).fireEvent) {
	      document.getElementById(elementId).fireEvent('on' + eventName);     
	    } else {   
	      var evObj = document.createEvent('Events');
	      evObj.initEvent(eventName, true, false);
	      document.getElementById(elementId).dispatchEvent(evObj);
	    }
	  }
	}

  componentDidMount(){
    
    var hovered = ReactDOM.findDOMNode(this.hovered_item.current);
    this.fireEvent(this.hovered_item.current, "mouseover"); 

  }

  render() {



var item=(




            <TransitionState>
              {({ transitionStatus }) => {
                return (
                  <Tween duration={2} delay={this.props.delay}
                  from={ ['entering'].includes(transitionStatus) ? false : {clipPath:'inset(0% 0% 100% 0%)', ease: 'Power2.easeOut', opacity: 0} } 
                  to={ ['exiting'].includes(transitionStatus) ? {clipPath:'inset(0% 0% 100% 0%)', ease: 'Power2.easeIn', opacity: 0 } : false } >
                    <div className={`${s.figure} ${this.props.className}`} onMouseEnter={this.toggleHoverEnter} onMouseLeave={this.toggleHoverLeave}>
                      <Tween duration={.2} to={ this.state.hover ? {ease: 'Power2.easeOut', clipPath:'inset(0.001% 0.002% 0.003% 0.005%)'} : {ease: 'Power2.easeOut', clipPath:'inset(0.001% 100% 0.003% -2%)'}} >
                        <img className={s.arrow} src={'../svg/work_arrow.svg'} />
                      </Tween>
                      <Tween duration={.2} to={ this.state.hover ? {ease: 'Power2.easeOut', opacity: 1} : {ease: 'Power2.easeOut',  opacity: 0}} >                      
                        <h4 className={s.arrow_heading}>Creative strategy</h4>     
                      </Tween>
                      <Tween duration={1} to={ this.state.hover ? { opacity: 1, delay: 1, ease: 'Power2.easeOut'} : {ease: 'Power2.easeOut',  opacity: 0, delay: .5}} >                               
                        <img className={s.client_logo} src='../images/client.png'/>
                      </Tween>
                      <Tween duration={1} to={ this.state.hover ? { opacity: 1, delay: 1, ease: 'Power2.easeOut'} : {ease: 'Power2.easeOut',  opacity: 0, delay: .5}} >                      
                        <h4 className={s.top_title}>FIAT 500X</h4>
                      </Tween>
                      <Tween duration={2} to={ this.state.hover ? {delay: 1, ease: 'Power2.easeOut', clipPath:'inset(0.001% 0.002% 0.003% 0.005%)'} : {delay: 1, ease: 'Power2.easeOut', clipPath:'inset(0.001% 100% 0.003% 0.004%)'}} >                      
                        <h2 className={s.client_title}>BEAUTY AND FUNCTION COMBINED</h2>
                      </Tween>
                      <Tween duration={1} to={ this.state.hover ? { opacity: 1, delay: 1, ease: 'Power2.easeOut'} : {ease: 'Power2.easeOut',  opacity: 0, delay: .5}} >  
                        <h3 className={s.client_more}><Link to={'/fiat-study'}>FIND OUT MORE <LinkArrow className="link_arrow"/></Link></h3>
                      </Tween>                      
                      <img className={s.bw} style={this.state.hover ? {opacity:0}:{opacity:1}} src='../images/fiat_bw.jpg'/>                        
                      <img className={s.color} src='../images/fiat_color.jpg'/>
                    </div>
                  </Tween>                   
                )
              }}
            </TransitionState>
 





)



    return (



  <Scrollbar className="scrollbar" damping={0.1} renderByPixels={true} alwaysShowTracks={false} syncCallbacks={true}>      


      <>
        <Helmet title="Work" />

        <TransitionState>
          {({ transitionStatus }) => {
            return (

              <>



              <Tween duration={2} 
              from={ ['entering'].includes(transitionStatus) ? false : { yPercent: 100, opacity: 1, ease: 'Power3.easeInOut' } } 
              to={ ['exiting'].includes(transitionStatus) ? { yPercent: -100, opacity: 1, ease: 'Power3.easeInOut' } : false  } >  


              <ReactCursorPosition className='fullscreen_cursor_position'>  

                <SVGicon className='bakery_work_icon' src='swirl.svg' /> 
                <SVGiconReverse className='bakery_work_harmonica' src='harmonica.svg' />                

                <Split className="bakery_work_headline">COLLECTIVE INTELLIGENCE AND CREATIVE POWER IN ACTION</Split>

                <div className='wrapper work-wrapper'>




                  <Item hovered='true' key='i01' delay={1} ref={this.hovered_item} className='no1'/>
                  <Item key='i02' delay={1.5} className='no2'/>
                  <Item key='i03' delay={2} className='no3'/>
                  <Item key='i04' delay={2.5} className='no4'/>



                </div>

                <Link className="bakery_work_download" to={'/'}>DOWNLOAD MORE PROJECTS&nbsp;&nbsp;<LinkArrow className="link_arrow"/></Link>

              </ReactCursorPosition>                

              </Tween>


              <Tween duration={2} 
              from={ ['entering'].includes(transitionStatus) ? false : { yPercent: 100, opacity: 1, ease: 'Power3.easeInOut' } } 
              to={ ['exiting'].includes(transitionStatus) ? { backgroundColor: '#222222', yPercent: -100, opacity: 1, ease: 'Power3.easeInOut' } : false  } >  

                <div className='fulscreen_white' style={{zIndex: -1, backgroundColor: '#ffffff', position: 'absolute', width: '100vw', height: '100vh', top: 0, bottom: 0, left: 0, right: 0}}></div>

              </Tween>



              </>





            )
          }}
        </TransitionState>

      </>

<Footer/>
</Scrollbar>

    )

  } 



}
