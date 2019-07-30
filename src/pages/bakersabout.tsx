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


const BakersAbout = ({ data, className }) => {
  return (

  <div className='wrapper'>

      <ReactCursorPosition className='fullscreen_cursor_position'>

        <Helmet title="About" />

        <SVGicon className='bakers_about__talk_bubbles' src='talk_bubbles.svg'  /> 

        <Row>
          <Figure3 className="bakers_about__image_one hide_on_mobile dropped"/>

          <AnimatedHeading className='bakers_about__heading_one'>Who we are</AnimatedHeading>  

          <Figure3 className="show_on_mobile"/>

          <HeadingTwo className='bakers_about__heading_two'>A space for creative people with amazing ideas.</HeadingTwo>      
        </Row>
        <Row>
          <Paragraph className='bakers_about__paragraph paragraph'>A safe place where those who are searching for the great idea meet with the ones that have them. And where they have access not just to one amazing idea, but to several of them. A place, where the idea creators – who we call BAKERS get rewarded if their idea is selected by the client. We are a constantly growing group of bakers and creative thinkers. We believe it is important to provide a space for ideas and wonderful creations. We want to give everybody a chance to contribute. We believe the more idea makers we have, the more we can all move forward.</Paragraph>
        </Row>

        <SVGicon className='bakers_about__brains' src='brains.svg'  /> 

        <Row>

            <Figure4 className="show_on_mobile"/>

            <Figure4 className="bakers_about__image_two hide_on_mobile"/>            

            <Split className='bakers_about__heading_three'>We are a group of enthusiasts and passionate thinkers</Split>      

            <Paragraph className='bakers_we__paragraph paragraph'>We believe that a great idea can pop up anywhere: in a bar, during a wonderfully peaceful weekend, while running, before going to bed, while chatting with your loved one, from a student, retiree or stay-at-home mom or dad.</Paragraph>

            <Link className="bakers_about__join_link" to={'/Contact'}>JOIN US&nbsp;&nbsp;<span>&gt;</span></Link>





        </Row>     

  <Row className="tags_row">


            <Controller refreshInterval={1}>
              <Scene duration={'135%'} triggerHook={.85}>
                <Tween 
                  staggerFrom={{ opacity: 0, ease: 'Power3.easeInOut'}}
                  stagger={2} duration={10}
                  ease="Power3.easeInOut"
                >
                  <div className="tags_heading"><HeadingTwo>Problem</HeadingTwo></div>
                  <p className="tag tag_01">how can be a name for fishermans beer?</p>
                  <p className="tag tag_02">how can be a name for fishermans beer?</p>
                  <p className="tag tag_03">how can be a name for fishermans beer?</p>
                  <p className="tag tag_04">how can be a name for fishermans beer?</p>
                  <img className="tag_arrow_01" src="../images/tag_arow_01.png" />
                  <img className="phone_logo" src="../images/phone_logo.png " /> 
                  <img className="tag_arrow_02" src="../images/tag_arow_02.png" /> 
                  <img className="hip" src="../svg/hip.svg"/>
                  <img className="nerd" src="../svg/nerd.svg"/> 
                  <p className="tag nerd_text">Marketa grafik miluje horska kola</p>
                  <img className="granny" src="../svg/granny.svg"/>
                  <p className="tag granny_text">Marketa grafik miluje horska kola</p>
                  <img className="afro" src="../svg/afro.svg"/>                  
                  <img className="dude" src="../svg/dude.svg"/>   
                  <p className="tag dude_text">Honza marketer miluje reklamu</p>
                  <img className="smart" src="../svg/smart.svg"/>
                  <p className="tag smart_text">Marketa grafik miluje horska kola</p> 
                  <img className="kid" src="../svg/kid.svg"/>
                  <p className="tag kid_text">Honza marketer miluje reklamu</p> 
                  <div className="tags_heading_middle"><HeadingTwo>Spousta lidy spousta napadu</HeadingTwo></div> 
                  <img className="fireman" src="../svg/fireman.svg"/>
                  <p className="tag fireman_text">Karel hasic</p>
                  <img className="girl" src="../svg/girl.svg"/>
                  <p className="tag girl_text">Marketa grafik miluje horska kola</p>
                  <img className="mlada" src="../svg/mlada.svg"/>   
                  <img className="tag_arrow_03" src="../images/tag_arow_03.png" /> 
                  <img className="vial" src="../svg/vial.svg"/>   
              
                </Tween>
              </Scene>
            </Controller>   

  </Row>

    <Split className="tags_heading_bottom">Reseni</Split>
    <Link className="bakers_about__join_link_two" to={'/Contact'}>JOIN US&nbsp;&nbsp;<span>&gt;</span></Link>
    <div className="divider_text">or find out how to</div>
    <Link className="bakers_about__join_link_three" to={'/Contact'}>BRIEF US&nbsp;&nbsp;<span>&gt;</span></Link>    
          
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

  )
}

export const query = graphql`
  query BakersAboutQuery {
    file(relativePath: { eq: "painter.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid(maxWidth: 1600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default BakersAbout