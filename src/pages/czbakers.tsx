import * as React from 'react';
import Helmet from 'react-helmet';
import { Slider } from 'components/slider/Slider';
import { Heading } from 'components/heading/Heading';
import SVGicon from 'components/svgicon/SVGicon';
import { Link } from 'components/link/Link';
import { Popup } from 'components/popup/Popup';
import { Row } from 'components/row/Row';
import SVGiconReverse from 'components/svgiconreverse/SVGiconReverse';
import ReactCursorPosition from 'react-cursor-position';
import { graphql } from 'gatsby'

import { TweenMax, TimelineMax, Power3} from "gsap";
import { Tween } from 'react-gsap';
import { TransitionState } from "gatsby-plugin-transition-link";

export default class BakersIndex extends React.Component {

  constructor(props){
    super(props);   
  }


  componentDidMount(){



  }  


  render() {

   


  function getSubheadings(item) {
    var sub = [item.node.subheading];
    return sub;
  }

  function getLinks(item) {
    var link = [item.node.link];
    return link;
  }  

  function getTitles(item) {
    var title = [item.node.title];
    return title;
  } 

  function getImages(item) {
    var image = ['https://futurebakery.cz/grav/en/bakers/' + item.node.image];
    return image;
  }     

  const subs = this.props.data.allBakersCzSlideCz.edges.map(getSubheadings)
  var mergedSubs = [].concat.apply([], subs);

  const links = this.props.data.allBakersCzSlideCz.edges.map(getLinks)
  var mergedLinks = [].concat.apply([], links);

  const titles = this.props.data.allBakersCzSlideCz.edges.map(getTitles)
  var mergedTitles = [].concat.apply([], titles);

  const images = this.props.data.allBakersCzSlideCz.edges.map(getImages)
  var mergedImages = [].concat.apply([], images);
  
     return (


  <ReactCursorPosition className='fullscreen_cursor_position'>  
    <Helmet title="Bakers" />

    <Popup/>

    <SVGicon className='bakers_home__bakers_crown' src='bakers_crown.svg'  /> 
    <SVGiconReverse className='bakers_home__bakers_bulb' src='bakers_bulb.svg'  /> 

      <TransitionState>
        {({ transitionStatus }) => {
          return (

            <>

            <Tween duration={2} 
            from={ ['entering'].includes(transitionStatus) ? false : { yPercent: 100, opacity: 1, ease: 'Power3.easeInOut' } } 
            to={ ['exiting'].includes(transitionStatus) ? { yPercent: -100, opacity: 1, ease: 'Power3.easeInOut' } : false  } >  

        	    <div className='fulscreen_slider'>
        	    	<Slider auto={true} 
                timeInBetween={2000}
                subs={mergedSubs} 
                titles={mergedTitles} 
                links={mergedLinks} 
                images={mergedImages}  
                className='new-slider'/>
        	    </div>

            </Tween>

            <Tween duration={2} 
            from={ ['entering'].includes(transitionStatus) ? false : { yPercent: 200, opacity: 0, ease: 'Power3.easeInOut' } } 
            to={ ['exiting'].includes(transitionStatus) ? { yPercent: -200, opacity: 0, ease: 'Power3.easeInOut' } : false  } >             


                <div className="bakers_home_flip_button">
                  <Row>
                    <Link bakers arrow button className="home_cta_button" to={'/czbakerslogin'}>PŘIPOJ SE K NÁM</Link>
                  </Row>
                </div>

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
      
  </ReactCursorPosition>

);

  }


}



export const query = graphql`
  query AllBakersCzSlides {
    allBakersCzSlideCz {
      edges {
        node {
          id
          image
          link
          subheading
          title
        }
      }
    }
  }

`