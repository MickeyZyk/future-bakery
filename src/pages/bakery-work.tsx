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

export default class Work extends React.Component {


  constructor(props){
    super(props);
    this.hovered_item = React.createRef();    
      
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
