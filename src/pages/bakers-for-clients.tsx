import * as React from 'react';
import { graphql } from 'gatsby';
import Helmet from 'react-helmet';
import ReactCursorPosition from 'react-cursor-position';
import TransitionLink from 'gatsby-plugin-transition-link'
import SVGicon from 'components/svgicon/SVGicon';
import SVGiconReverse from 'components/svgiconreverse/SVGiconReverse';
import { Link } from 'components/link/Link';
import { Row } from 'components/row/Row';
import { Figure2 } from 'components/figure2/Figure2';
import { Split } from 'components/split/Split';
import { Heading } from 'components/heading/Heading';
import { HeadingTwo } from 'components/heading/HeadingTwo';
import { AnimatedHeading } from 'components/heading/AnimatedHeading';
import { AnimatedHeadingTwo } from 'components/heading/AnimatedHeadingTwo';
import { AnimatedImage } from 'components/image/AnimatedImage';
import { Paragraph } from 'components/paragraph/Paragraph';
import Texticon from 'components/texticon/Texticon';
import { Footer } from 'components/footer/Footer';
import { Controller, Scene } from 'react-scrollmagic';
import LinkArrow from 'assets/svg/link_arrow.svg'
import { Team } from 'components/team/Team';

import { TweenMax, TimelineMax, Power3} from "gsap";
import { Tween } from 'react-gsap';
import { TransitionState } from "gatsby-plugin-transition-link";

import SmoothScrollbar from 'smooth-scrollbar';
import Scrollbar from 'react-smooth-scrollbar';


const BakeryAbout = ({ data, className }) => {
  return (


      <TransitionState>
        {({ transitionStatus }) => {
          return (

            <>

            <Tween duration={2} 
            from={ ['entering'].includes(transitionStatus) ? false : { yPercent: 100, opacity: 1, ease: 'Power3.easeInOut' } } 
            to={ ['exiting'].includes(transitionStatus) ? { yPercent: -100, opacity: 1, ease: 'Power3.easeInOut' } : false  } >  



  <Scrollbar className="scrollbar" damping={0.1} renderByPixels={true} alwaysShowTracks={false} syncCallbacks={true}>   

  <div className='wrapper'>

      <ReactCursorPosition className='fullscreen_cursor_position'>

        <Helmet title="For Clients" />


          <Row> 

            <div className="crowders_about_first_left">

              <HeadingTwo className='for_clients_about_heading'>We found thousands of creative people, who are ready to help you solve your problem, or find a direction for your business.</HeadingTwo>   

              <AnimatedImage className='for_clients_image responsive_image show_on_mobile' src="../images/rocket.jpg" />         

              <Paragraph className='for_clients_about_paragraph paragraph'>This is where you can submit your brief and generate wonderful ideas. We can provide additional services among others analysis of the ideas, creation of a strategy or plan of action. You can let us know, what exactly you need from Future Bakers.</Paragraph>


            </div>

            <AnimatedImage className='for_clients_image responsive_image hide_on_mobile' src="../images/rocket.jpg" />   


          </Row>

     <Row>
        <Link className="for__join_link_two" to={'/bakerscontact'}>BRIEF US&nbsp;&nbsp;<LinkArrow className="link_arrow"/></Link>
        <div className="for_divider_text">Or simply</div>
        <Link className="for__join_link_three" to={'/bakerscontact'}>CALL US&nbsp;&nbsp;<LinkArrow className="link_arrow"/></Link>          
      </Row>
      

      </ReactCursorPosition>   


        </div>


<Footer/>
</Scrollbar>



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




  )
}


export const CrowdersAboutquery = graphql`
  query ForClientsPageQuery {
    gravCrowdersAbout {
      heading_one
      heading_three
      heading_two
      image_one
      image_two
      link_one
      link_one_text
      link_two
      link_two_text
      paragraph_one
      subheading_two
      title
      svg_icons_two {
        svg_two
        svg_text_two
      }
      svg_icons {
        svg_text
        svg
      }
    }    
  }
`

export default BakeryAbout