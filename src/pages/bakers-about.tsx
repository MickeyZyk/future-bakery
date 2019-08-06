import * as React from 'react';
import { graphql } from 'gatsby';
import Helmet from 'react-helmet';
import ReactCursorPosition from 'react-cursor-position';
import TransitionLink from 'gatsby-plugin-transition-link'
import SVGicon from 'components/svgicon/SVGicon';
import SVGiconReverse from 'components/svgiconreverse/SVGiconReverse';
import { Row } from 'components/row/Row';
import { Figure3 } from 'components/figure3/Figure3';
import { Figure4 } from 'components/figure4/Figure4';
import { Split } from 'components/split/Split';
import { Heading } from 'components/heading/Heading';
import { HeadingTwo } from 'components/heading/HeadingTwo';
import { AnimatedHeading  } from 'components/heading/AnimatedHeading';
import { AnimatedHeadingTwo  } from 'components/heading/AnimatedHeadingTwo';
import { AnimatedHeadingThree } from 'components/heading/AnimatedHeadingThree';
import { Paragraph } from 'components/paragraph/Paragraph';
import Texticon from 'components/texticon/Texticon';
import { Link } from 'components/link/Link';
import { DarkTeam} from 'components/team/DarkTeam';
import { Footer } from 'components/footer/Footer';
import { TweenMax, TimelineMax, Power3 } from "gsap";
import { Tween, SplitWords } from 'react-gsap'
import { Controller, Scene } from 'react-scrollmagic';
import LinkArrow from 'assets/svg/link_arrow.svg'


import { TransitionState } from "gatsby-plugin-transition-link";

import SmoothScrollbar from 'smooth-scrollbar';
import Scrollbar from 'react-smooth-scrollbar';

const BakersAbout = ({ data, className }) => {
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
      <Helmet title={data.gravBakersAbout.title} />
      <SVGicon className='bakers_about__talk_bubbles' src='talk_bubbles.svg'  />
      <Row>
        <Figure3 className="bakers_about__image_one hide_on_mobile dropped"/>
        <AnimatedHeading className='bakers_about__heading_one'>{data.gravBakersAbout.heading_one}</AnimatedHeading>
        <HeadingTwo className='bakers_about__heading_two'>A space for creative people with amazing ideas.</HeadingTwo>      
        <Figure3 className="show_on_mobile"/>
      </Row>
      <Row>
        <Paragraph className='bakers_about__paragraph paragraph'>A safe place where those who are searching for the great idea meet with the ones that have them. And where they have access not just to one amazing idea, but to several of them. A place, where the idea creators – who we call BAKERS get rewarded if their idea is selected by the client. We are a constantly growing group of bakers and creative thinkers. We believe it is important to provide a space for ideas and wonderful creations. We want to give everybody a chance to contribute. We believe the more idea makers we have, the more we can all move forward.</Paragraph>
      </Row>
      <SVGicon className='bakers_about__brains' src='brains.svg' /> 
      <Row>
        <Figure4 className="bakers_about__image_two hide_on_mobile"/>            
        <Split className='bakers_about__heading_three'>We are a group of enthusiasts and passionate thinkers</Split>      
        <Paragraph className='bakers_we__paragraph paragraph'>We believe that a great idea can pop up anywhere: in a bar, during a wonderfully peaceful weekend, while running, before going to bed, while chatting with your loved one, from a student, retiree or stay-at-home mom or dad.</Paragraph>
        <Link className="bakers_about__join_link" to={'/contact'}>JOIN US&nbsp;&nbsp;<LinkArrow className="link_arrow"/></Link>
        <Figure4 className="show_on_mobile"/>
      </Row>
      <Row className="tags_row">
        <Controller refreshInterval={1}>
          <Scene duration={'135%'} triggerHook={.85}>
            <Tween 
              staggerFrom={{ opacity: 0, ease: 'Power3.easeInOut'}}
              stagger={2} duration={10}
              ease="Power3.easeInOut"
            >
              <div className="tags_heading hide_on_mobile"><HeadingTwo>Problem</HeadingTwo></div>
              <div className="tag_01">
              <p className="tag">how can be a name for fishermans beer?</p>
              </div>
              <div className="tags_heading show_on_mobile"><AnimatedHeading>Problem</AnimatedHeading></div>
              <div className="tag_02">
              <p className="tag">how can be a name for fishermans beer?</p>
              </div>
              <div className="tag_03">
              <p className="tag">how can be a name for fishermans beer?</p>
              </div>
              <div className="tag_04">
              <p className="tag">how can be a name for fishermans beer?</p>
              </div>
              <img className="tag_arrow_01" src="../images/tag_arow_01.png" />
              <img className="tag_arrow_01l show_on_mobile" src="../images/tag_arow_01l.png" />
              <img className="phone_logo" src="../images/phone_logo.png " /> 
              <div className="tags_heading_middle show_on_mobile"><HeadingTwo>Spousta lidy spousta napadu</HeadingTwo></div>
              <img className="tag_arrow_02 hide_on_mobile" src="../images/tag_arow_02.png" /> 
              <img className="hip hide_on_mobile" src="../svg/hip.svg"/>
              <img className="nerd hide_on_mobile" src="../svg/nerd.svg"/> 
              <p className="tag nerd_text hide_on_mobile">Marketa grafik miluje horska kola</p>
              <img className="granny hide_on_mobile" src="../svg/granny.svg"/>
              <p className="tag granny_text hide_on_mobile">Marketa grafik miluje horska kola</p>
              <img className="afro hide_on_mobile" src="../svg/afro.svg"/>                  
              <img className="dude hide_on_mobile" src="../svg/dude.svg"/>   
              <p className="tag dude_text hide_on_mobile">Honza marketer miluje reklamu</p>
              <img className="smart hide_on_mobile" src="../svg/smart.svg"/>
              <p className="tag smart_text hide_on_mobile">Marketa grafik miluje horska kola</p> 
              <img className="kid hide_on_mobile" src="../svg/kid.svg"/>
              <p className="tag kid_text hide_on_mobile">Honza marketer miluje reklamu</p> 
              <div className="tags_heading_middle hide_on_mobile"><HeadingTwo>Spousta lidy spousta napadu</HeadingTwo></div> 
              <img className="fireman hide_on_mobile" src="../svg/fireman.svg"/>
              <p className="tag fireman_text hide_on_mobile">Karel hasic</p>
              <img className="girl hide_on_mobile" src="../svg/girl.svg"/>
              <p className="tag girl_text hide_on_mobile">Marketa grafik miluje horska kola</p>
              <img className="mlada hide_on_mobile" src="../svg/mlada.svg"/>   
              <img className="tag_arrow_03 hide_on_mobile" src="../images/tag_arow_03.png" /> 
              <img className="vial hide_on_mobile" src="../svg/vial.svg"/>  
              <div className="people_doodles show_on_mobile">
                <img className="people_doodle hip" src="../svg/hip.svg"/>
                <img className="people_doodle nerd" src="../svg/nerd.svg"/> 
                <p className="people_doodle tag nerd_text">Marketa grafik miluje horska kola</p>
                <img className="people_doodle granny" src="../svg/granny.svg"/>
                <p className="people_doodle tag granny_text">Marketa grafik miluje horska kola</p>
                <img className="people_doodle afro" src="../svg/afro.svg"/>                  
                <img className="people_doodle dude" src="../svg/dude.svg"/>   
                <p className="people_doodle tag dude_text">Honza marketer miluje reklamu</p>
                <img className="people_doodle smart" src="../svg/smart.svg"/>
                <p className="people_doodle tag smart_text">Marketa grafik miluje horska kola</p> 
                <img className="people_doodle kid" src="../svg/kid.svg"/>
                <p className="people_doodle tag kid_text">Honza marketer miluje reklamu</p> 
                <img className="people_doodle fireman" src="../svg/fireman.svg"/>
                <p className="people_doodle tag fireman_text">Karel hasic</p>
                <img className="people_doodle girl" src="../svg/girl.svg"/>
                <p className="people_doodle tag girl_text">Marketa grafik miluje horska kola</p>
                <img className="people_doodle mlada" src="../svg/mlada.svg"/>   
                <img className="people_doodle tag_arrow_03" src="../images/tag_arow_03.png" /> 
                <img className="people_doodle vial" src="../svg/vial.svg"/>
              </div>
            </Tween>
          </Scene>
        </Controller>
      </Row>
      <Split className="tags_heading_bottom">Reseni</Split>
      <Link className="bakers_about__join_link_two" to={'/bakerscontact'}>JOIN US&nbsp;&nbsp;<LinkArrow className="link_arrow"/></Link>
      <div className="divider_text">or find out how to</div>
      <Link className="bakers_about__join_link_three" to={'/bakerscontact'}>BRIEF US&nbsp;&nbsp;<LinkArrow className="link_arrow"/></Link>          
      <SVGicon className='bakers_about_chef' src='bakers_about_chef.svg' />
      <SVGiconReverse className='bakers_about_soldier' src='bakers_about_soldier.svg' />    
      <Row className="bakers_about_team_row">
        <div className="bakers_about__orange_heading_background">
            <Split className="bakers_about__heading_four">Who is behind the scenes of Future Bakers?</Split>
        </div>  
      </Row>
      <div className="meet">
        <AnimatedHeadingTwo className="bakers_about_team_heading">Meet the team</AnimatedHeadingTwo>
      </div>
      <Row>
        <DarkTeam/>
      </Row>


     
    </ReactCursorPosition>
  </div>



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

export const BakersAboutquery = graphql`
  query BakersAboutPageQuery {
    gravBakersAbout {
      heading_one
      subheading_one
      icon01_text
      icon02_text
      icon03_text
      icon04_text
      icon05_text
      icon06_text
      icon07_text
      image_one
      image_two
      link_one
      link_one_text
      link_two
      link_two_text
      paragraph_one
      paragraph_two
      problem_heading_one
      problem_heading_three
      problem_heading_two
      problem_text
      subheading_two
      team_heading
      title
      bakers_paragraph_two
      bakers_paragraph_one
      bakers_heading
    }   
  }
`

export default BakersAbout
