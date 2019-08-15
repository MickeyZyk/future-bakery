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
import { graphql } from 'gatsby'
import { Location } from '@reach/router';
import SmoothScrollbar from 'smooth-scrollbar';
import Scrollbar from 'react-smooth-scrollbar';

import { TweenMax, TimelineMax, Power3} from "gsap";
import { Tween } from 'react-gsap';
import { TransitionState } from "gatsby-plugin-transition-link";

import s from '../components/item/Item.scss';

export default class Work extends React.Component {


  constructor(props){
    super(props);
    this.hovered_item = React.createRef();    
    this.state ={
      hover: this.props.hovered ? true : false,
    };
    this.toggleHoverLeave = this.toggleHoverLeave.bind(this);  
    this.toggleHoverEnter = this.toggleHoverEnter.bind(this);  
    this.unhideMore = this.unhideMore.bind(this);    
  }


  unhideMore(){
   var x = document.querySelector(".work_item_wrapper:nth-child(5)");
   var s = document.querySelector(".spacer_top");
   x.style.display = "block";
   s.style.marginBottom = '37vw';
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

  //console.log(this.props.data.allGravBakeryWork.edges)
    
    var hovered = this.hovered_item.current; 

    //var hovered = ReactDOM.findDOMNode(this.hovered_item.current);
    var hover_el = hovered.querySelector('.hover_element');
  //console.log("HHOVERR",hover_el)
    this.fireEvent('hover_element', "mouseover");

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

                <div className='wrapper work-wrapper' ref={this.hovered_item}>



                {this.props.data.allGravBakeryWork.edges.map(( node, i ) => (
                  <div className="work_item_wrapper" key={i}>
                    <Item data={node} i={i} />
                  </div>

                ))}


                </div>


                <div className="spacer_top"></div>

              <Location>
                {({ location }) => (
                  <Link gray arrow className="bakery_work_download" onClick={ this.unhideMore } to={location.pathname}>DOWNLOAD MORE PROJECTS</Link>
                )}
              </Location> 

                  <Link gray arrow className="bakery_work_project" to={'/bakerycontact'}>START A PROJECT WITH US</Link>                

                <div className="spacer_bottom"></div>


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


export const query = graphql`
  query AllBakeryWork {
    allGravBakeryWork {
      edges {
        node {
          id
          title
          one_way
          new_way
          logo_light
          logo_dark
          heading_two
          heading_one
          big_image
          video
          category
          category_name
          heading_tag
        }
      }
    }
  }

`