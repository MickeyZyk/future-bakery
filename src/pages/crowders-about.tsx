import React, { useState } from 'react';
import { graphql } from 'gatsby';
import Helmet from 'react-helmet';
import ReactCursorPosition from 'react-cursor-position';
import TransitionLink from 'gatsby-plugin-transition-link'
import SVGicon from 'components/svgicon/SVGicon';
import SVGiconReverse from 'components/svgiconreverse/SVGiconReverse';
import { Link } from 'components/link/Link';
import { Row } from 'components/row/Row';
import { Split } from 'components/split/Split';
import { Heading } from 'components/heading/Heading';
import { Figure } from 'components/figure/Figure';
import { ReverseFigure } from 'components/figure/ReverseFigure';
import { CrowdersSmallFigure } from 'components/figure/CrowdersSmallFigure';
import { HeadingTwo } from 'components/heading/HeadingTwo';
import { AnimatedHeading } from 'components/heading/AnimatedHeading';
import { AnimatedHeadingTwo } from 'components/heading/AnimatedHeadingTwo';
import { AnimatedImage } from 'components/image/AnimatedImage';
import { Paragraph } from 'components/paragraph/Paragraph';
import CrowdersTexticon from 'components/texticon/CrowdersTexticon';
import { Footer } from 'components/footer/Footer';
import { Controller, Scene } from 'react-scrollmagic';
import LinkArrow from 'assets/svg/link_arrow.svg'
import { Team } from 'components/team/Team';
import { MobileTeam } from 'components/team/MobileTeam';
import {Swipeable} from 'react-swipeable'

import { TweenMax, TimelineMax, Power3} from "gsap";
import { Tween } from 'react-gsap';
import { TransitionState } from "gatsby-plugin-transition-link";

import SmoothScrollbar from 'smooth-scrollbar';
import Scrollbar from 'react-smooth-scrollbar';
const slug = require('slug')

const CrowdersAbout = ({ data, className, state }) => {

  const [currentIcon, setCurrentIcon] = useState(0);

  function prevIcon() {
    console.log(currentIcon)    
    currentIcon > 0 ? setCurrentIcon(currentIcon - 1) : null

  }

  function nextIcon() {
    console.log(currentIcon)      
    currentIcon < 5 ? setCurrentIcon(currentIcon + 1) : null    
  }  


 function getMembers(item) {
    var sub = [item.member];
    return sub;
  }

  function getLinks(item) {
    var link = [item.link_two];
    return link;
  }  

  function getTexts(item) {
    var title = [item.member_text];
    return title;
  } 

  function getImages(item) {
    var image = ['https://future.stratego.ba/en/bakery/pages/'  + slug(data.gravCrowdersAbout.title.toLowerCase()) + '/' + item.image];
    return image;
  }  

  function getAuthorTexts(item) {
    var text = [item.text];
    return text;
  }   


  const members = data.gravCrowdersAbout.team.map(getMembers)
  var mergedMembers = [].concat.apply([], members);

  const links = data.gravCrowdersAbout.team.map(getLinks)
  var mergedLinks = [].concat.apply([], links);

  const texts = data.gravCrowdersAbout.team.map(getTexts)
  var mergedTexts = [].concat.apply([], texts);

  const images = data.gravCrowdersAbout.team.map(getImages)
  var mergedImages = [].concat.apply([], images);

  return (

      <TransitionState>
        {({ transitionStatus }) => {
          return (

            <>

            <Tween duration={2} 
            from={ ['entering'].includes(transitionStatus) ? false : { yPercent: 100, opacity: 1, ease: 'Power3.easeInOut' } } 
            to={ ['exiting'].includes(transitionStatus) ? { yPercent: -100, opacity: 1, ease: 'Power3.easeInOut' } : false  } >  


  <Scrollbar className="scrollbar crowders_about_scrollbar" damping={0.1} renderByPixels={true} alwaysShowTracks={false} syncCallbacks={true} >   

  <div className='wrapper about-wrapper'>

      <ReactCursorPosition>

        <Helmet title={data.gravCrowdersAbout.title} />

        <SVGicon className='crowders_icecream' src='crowders_icecream.svg'  />
        <SVGiconReverse className='crowders_cheese' src='crowders_cheese.svg' />        

          <Row> 

            <div className="crowders_about_first_left">

              <AnimatedHeading className='crowders_about_heading'>{data.gravCrowdersAbout.heading_one}</AnimatedHeading>   

              <ReverseFigure className='crowders_about_image responsive_image show_on_mobile' src={'https://future.stratego.ba/en/crowders/pages/about-us/' + data.gravCrowdersAbout.image_one} />         

              <Paragraph className='crowders_about_paragraph paragraph'>{data.gravCrowdersAbout.paragraph_one}</Paragraph>

              <Link arrow crowders className='crowders_about_button' to={data.gravCrowdersAbout.link_one}>{data.gravCrowdersAbout.link_one_text}</Link>            

            </div>

            <ReverseFigure className='crowders_about_image responsive_image hide_on_mobile' src={'http://future.stratego.ba/en/crowders/pages/about-us/' + data.gravCrowdersAbout.image_one} />   

          </Row>

      </ReactCursorPosition>            
      

        <div className="crowders_about_blueboard" style={{backgroundImage: `url(../images/how_we_do_it_image.jpg)`}}>

          <Row>

            <Heading className='crowders_about_heading_two'>{data.gravCrowdersAbout.heading_two}</Heading>  

          </Row>

          <Row>

            <Paragraph className="crowders_about_paragraph_two">{data.gravCrowdersAbout.subheading_two}</Paragraph>

          </Row>

          <Row>

          <div className='crowders_phases_row'>

            <div className='crowders_phase_column'>

              <img src='../svg/crowders_arrowz.svg' />

              <Paragraph>CHANGE THEME IDENTIFICATION</Paragraph>

            </div>

            <div className='crowders_phase_column arrow_column'>

              <img src='../images/crowders_about_down_arrow.png' />


            </div>

            <div className='crowders_phase_column'>

              <img src='../svg/crowders_turntable.svg' />

              <Paragraph>THEME/TOPIC AMPLIFICATION</Paragraph> 

            </div>

            <div className='crowders_phase_column arrow_column'>

              <img src='../images/crowders_about_up_arrow.png' />


            </div>

            <div className='crowders_phase_column'>

              <img src='../svg/crowders_tablet.svg' />

              <Paragraph>COMMUNITY BUILD UP</Paragraph>

            </div>

            <div className='crowders_phase_column arrow_column'>

              <img src='../images/crowders_about_down_arrow.png' />


            </div>

            <div className='crowders_phase_column'>

              <img src='../svg/crowders_clipboard.svg' />

              <Paragraph>DEMAND AND CONTENT</Paragraph>

            </div>                                                

          </div>

          </Row>

          <Row>

            <Link button crowders arrow className="crowders_about_button_two" to={'/crowderscontact'} >START A PROJECT WITH US</Link>

          </Row>

        </div>

        <Row>

            <div className="crowders_about_heading_background">

              <Heading className="crowders_about_heading_three">What we do</Heading>     

              <CrowdersSmallFigure src="../images/nail_sharpener.jpg" className="crowders_about_middle_image" />                 

            </div>

      <Swipeable
        onSwipedRight={nextIcon}
        onSwipedLeft={prevIcon} >





              <div className="crowders_about_right_icons cr_one">

                  <CrowdersTexticon className='crowders_about__graph_icon' style={ currentIcon == 0 ? {opacity:1} : {opacity:0} } name='COMMUNITY BUILDING' src='cr_rainbow.svg' />

                  <CrowdersTexticon className='crowders_about__graph_icon' style={ currentIcon == 1  ? {opacity:1} : {opacity:0} } name='"CHANGE THEME" IDENTIFICATION' src='cr_recycle.svg' />

                  <CrowdersTexticon className='crowders_about__graph_icon' style={ currentIcon == 2 ? {opacity:1} : {opacity:0} } name='IDEA GENERATION' src='cr_bulb.svg' />

              </div>  

              <div className="crowders_about_right_icons cr_two">

                  <CrowdersTexticon className='crowders_about__graph_icon cr_first cr_second_row' style={ currentIcon == 3 ? {opacity:1} : {opacity:0} } name='STRATEGIC PLANNING' src='cr_target.svg' />

                  <CrowdersTexticon className='crowders_about__graph_icon cr_second_row' style={ currentIcon == 4 ? {opacity:1} : {opacity:0} } name='COMMUNICATION STEPS' src='cr_gauge.svg' />
                  
                  <CrowdersTexticon className='crowders_about__graph_icon cr_second_row' style={ currentIcon == 5 ? {opacity:1} : {opacity:0} } name='ON-LINE RESEARCH SPACE' src='cr_globe.svg' />

              </div>
              <div className="croders_icons_indicators" style={{position: 'relative'}}>
              <a href="#" onClick={prevIcon} className="prev_icon">PREV</a>       {currentIcon}     <a href="#" onClick={nextIcon} className="nextIcon">NEXT</a>   
              </div>   
       

      </Swipeable>
      </Row>
      
      <ReactCursorPosition>


        <SVGicon className='crowders_about_chef' src='blue_chef.svg' />
        <SVGiconReverse className='crowders_about_soldier' src='blue_soldier.svg' />  

        <AnimatedHeadingTwo className="crowders_about_team_heading">Meet the team</AnimatedHeadingTwo>

        <Team members={mergedMembers} links={mergedLinks} texts={mergedTexts} images={mergedImages} className="crowders_about_team hide_on_mobile"/>      

        <MobileTeam members={mergedMembers} links={mergedLinks} texts={mergedTexts} images={mergedImages} className="crowders_about_team show_on_mobile"/>        

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
  query CrowdersAboutPageQuery {
    gravCrowdersAbout {
      heading_one
      heading_three
      heading_two
      link_one
      link_one_text
      link_two
      link_two_text
      paragraph_one
      subheading_two
      svg_icons {
        svg
        svg_text
      }
      svg_icons_two {
        svg_text_two
        svg_two
      }
      title
      team {
        image
        link_two
        member
        member_text
      }
      image_two
      image_one
    }  
  }
`

export default CrowdersAbout