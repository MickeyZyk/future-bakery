import * as React from 'react';
import Helmet from 'react-helmet';
import { Slider } from 'components/slider/Slider';
import { Row } from 'components/row/Row';
import { Heading } from 'components/heading/Heading';
import { CrowdersItem } from 'components/item/CrowdersItem';
import ReactDOM from 'react-dom';
import { Split } from 'components/split/Split';
import SVGicon from 'components/svgicon/SVGicon';
import SVGiconReverse from 'components/svgiconreverse/SVGiconReverse';
import ReactCursorPosition from 'react-cursor-position';
import { Link } from 'components/link/Link';
import { ExternalLink } from 'components/link/ExternalLink';
import LinkArrow from 'assets/svg/link_arrow.svg'
import { Footer } from 'components/footer/Footer';
import { Paragraph } from 'components/paragraph/Paragraph';
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
  }

  unhideMore(){   
   var x = document.querySelector(".crowders_work_item_wrapper:nth-child(5)"); 
   var x1 = document.querySelector(".crowders_work_item_wrapper:nth-child(6)");
   var x2 = document.querySelector(".crowders_work_item_wrapper:nth-child(7)");        
   var x3 = document.querySelector(".crowders_work_item_wrapper:nth-child(8)");    
   var s = document.querySelector(".spacer_top");  

   if (x) {x.style.display = "block";}
   if (x1) {x1.style.display = "block";}
   if (x2) {x2.style.display = "block";}
   if (x3) {x3.style.display = "block";}
   if (s) {s.style.marginTop = '12vw'};
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

  //console.log(this.props.data.allGravCrowdersWork.edges)
    
    var hovered = this.hovered_item.current; 

    //var hovered = ReactDOM.findDOMNode(this.hovered_item.current);
    var hover_el = hovered.querySelector('.hover_element');
  //console.log("HHOVERR",hover_el)
    this.fireEvent('hover_element', "mouseover");

  }

  render() {



    return (



  <Scrollbar className="scrollbar" damping={0.1} renderByPixels={true} alwaysShowTracks={false} syncCallbacks={false}>      


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


                  <SVGicon className='crowders_work_swirl' src='swirl.svg' />                


                  <Split className="crowders_work_headline">HEADLINE ABOUT CROWDERS WORK</Split>


                <div className='wrapper work-wrapper crowders_work_wrapper' ref={this.hovered_item}>



                {this.props.data.allGravCrowdersWork.edges.map(( node, i ) => (
                  <div className="crowders_work_item_wrapper" key={i}>
                    <CrowdersItem data={node} i={i} /> 
                  </div>

                ))}



                </div>

                  <Location>
                    {({ location }) => (
                      <>      

                        <Link gray arrow className="crowders_work_download" onClick={ this.unhideMore } to={location.pathname}>DOWNLOAD MORE PROJECTS</Link>
                      </>
                    )}
                  </Location> 


                  <Link gray arrow className="crowders_work_project" to={'/crowderscontact/'}>START A PROJECT WITH US</Link>  
                  <Row>
                    <p className="cw_paragraph_bottom crowders_work_cta_paragraph">We regularly measure sentiment of key segments and check “temperature”</p>
                  </Row>
                  <Row>  
                    <ExternalLink crowders button arrow className="crowders_work_cta_link" to={'../pdf/report.pdf'} >SEE A FUTURE REPORT</ExternalLink>
                  </Row>


                <div className="crowders_spacer_bottom"></div>

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
  query AllCrowdersWork {
    allGravCrowdersWork {
      edges {
        node {
          id
          title
          logo_light
          heading_two
          heading_one
          big_image
          video
          heading_tag
        }
      }
    }
  }

`