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
import Circle from 'assets/svg/circle.svg';
import FullCircle from 'assets/svg/full_circle.svg';


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
        <HeadingTwo className='bakers_about__heading_two'>{data.gravBakersAbout.subheading_one}</HeadingTwo>      
        <Figure3 className="show_on_mobile"/>
      </Row>
      <Row>
        <Paragraph className='bakers_about__paragraph paragraph'>{data.gravBakersAbout.paragraph_one}</Paragraph>
      </Row>
      <SVGicon className='bakers_about__brains' src='brains.svg' /> 
      <Row>
        <Figure4 className="bakers_about__image_two hide_on_mobile"/>
        <Split className='bakers_about__heading_three'>{data.gravBakersAbout.subheading_two}</Split>      
        <Paragraph className='bakers_we__paragraph paragraph'>{data.gravBakersAbout.paragraph_one}</Paragraph>
        <Link className="bakers_about__join_link" to={data.gravBakersAbout.link_one}>{data.gravBakersAbout.link_one_text}&nbsp;&nbsp;<LinkArrow className="link_arrow"/></Link>
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
              <div className="tags_heading hide_on_mobile"><HeadingTwo>{data.gravBakersAbout.problem_heading_one}</HeadingTwo></div>
              <div className="tag_01">
              <p className="tag">{data.gravBakersAbout.problem_text}</p>
              </div>


              <div className="tags_heading show_on_mobile"><AnimatedHeading>{data.gravBakersAbout.problem_heading_one}</AnimatedHeading></div>


              <div className="tag_02">
              <p className="tag">{data.gravBakersAbout.problem_text}</p>
              </div>
              <div className="tag_03">
              <p className="tag">{data.gravBakersAbout.problem_text}</p>
              </div>
              <div className="tag_04">
              <p className="tag">{data.gravBakersAbout.problem_text}</p>
              </div>
              <img className="tag_arrow_01" src="../images/tag_arow_01.png" />
              <img className="tag_arrow_01l show_on_mobile" src="../images/tag_arow_01l.png" />
              <img className="phone_logo" src="../images/phone_logo.png " /> 
              <img className="tag_arrow_02 hide_on_mobile" src="../images/tag_arow_02.png" /> 
              <img className="hip hide_on_mobile" src="../svg/hip.svg"/>
              <img className="nerd hide_on_mobile" src="../svg/nerd.svg"/> 
              <p className="tag nerd_text hide_on_mobile">{data.gravBakersAbout.icon01_text}</p>
              <img className="granny hide_on_mobile" src="../svg/granny.svg"/>
              <p className="tag granny_text hide_on_mobile">{data.gravBakersAbout.icon02_text}</p>
              <img className="afro hide_on_mobile" src="../svg/afro.svg"/>                  
              <img className="dude hide_on_mobile" src="../svg/dude.svg"/>   
              <p className="tag dude_text hide_on_mobile">{data.gravBakersAbout.icon03_text}</p>
              <img className="smart hide_on_mobile" src="../svg/smart.svg"/>
              <p className="tag smart_text hide_on_mobile">{data.gravBakersAbout.icon04_text}</p> 
              <img className="kid hide_on_mobile" src="../svg/kid.svg"/>
              <p className="tag kid_text hide_on_mobile">{data.gravBakersAbout.icon05_text}</p> 
              <div className="tags_heading_middle hide_on_mobile"><HeadingTwo>{data.gravBakersAbout.problem_heading_two}</HeadingTwo></div> 
              <img className="fireman hide_on_mobile" src="../svg/fireman.svg"/>
              <p className="tag fireman_text hide_on_mobile">{data.gravBakersAbout.icon06_text}</p>
              <img className="girl hide_on_mobile" src="../svg/girl.svg"/>
              <p className="tag girl_text hide_on_mobile">{data.gravBakersAbout.icon07_text}</p>
              <img className="mlada hide_on_mobile" src="../svg/mlada.svg"/>   
              <img className="tag_arrow_03 hide_on_mobile" src="../images/tag_arow_03.png" /> 
              <img className="vial hide_on_mobile" src="../svg/vial.svg"/>  


              <div className="people_doodles show_on_mobile">
                <div className="people_doodle">
                  <div className="tags_heading_middle"><HeadingTwo>Spousta lidy spousta napadu</HeadingTwo></div>
                </div> 
                <img className="tag_arrow_04" src="../images/tag_arow_04.png" /> 
                <div className="people_doodle">
                  <img className="hip" src="../svg/hip.svg"/>
                </div>
                <div className="people_doodle">
                  <img className="nerd" src="../svg/nerd.svg"/> 
                </div>
                <div className="people_doodle">
                  <p className="tag nerd_text">Marketa grafik miluje horska kola</p>
                </div>
                <div className="people_doodle">
                  <img className="granny" src="../svg/granny.svg"/>
                </div>
                <div className="people_doodle">
                  <p className="tag granny_text">Marketa grafik miluje horska kola</p>
                </div>
                <div className="people_doodle">
                  <img className="fireman" src="../svg/fireman.svg"/>
                </div>
                <div className="people_doodle">
                  <p className="tag fireman_text">Karel hasic</p>
                </div>
                <div className="people_doodle">
                  <img className="girl" src="../svg/girl.svg"/>
                </div>
                <div className="people_doodle">
                  <p className="tag girl_text">Marketa grafik miluje horska kola</p>
                </div>
                <div className="people_doodle">
                  <img className="kid" src="../svg/kid.svg"/>
                </div>
                <div className="people_doodle">
                  <p className="tag kid_text">Honza marketer miluje reklamu</p> 
                </div>
                <div className="people_doodle">
                  <img className="smart" src="../svg/smart.svg"/>
                </div>
                <div className="people_doodle">
                  <p className="tag smart_text">Marketa grafik miluje horska kola</p> 
                </div>
                <div className="people_doodle">
                  <img className="afro" src="../svg/afro.svg"/>     
                </div>
                <div className="people_doodle">
                  <img className="vial" src="../svg/vial.svg"/>
                </div>
              </div>



            </Tween>
          </Scene>
        </Controller>
      </Row>
      <Split className="tags_heading_bottom">{data.gravBakersAbout.problem_heading_three}</Split>
      <Row>
        <Link className="bakers_about__join_link_two" to={data.gravBakersAbout.icons_link_one}>{data.gravBakersAbout.icons_link_one_text}&nbsp;&nbsp;<LinkArrow className="link_arrow"/></Link>
        <div className="divider_text">or find out how to</div>
        <Link className="bakers_about__join_link_three" to={data.gravBakersAbout.icons_link_two}>{data.gravBakersAbout.icons_link_two_text}&nbsp;&nbsp;<LinkArrow className="link_arrow"/></Link>          
      </Row>
      <SVGicon className='bakers_about_chef' src='bakers_about_chef.svg' />
      <SVGiconReverse className='bakers_about_soldier' src='bakers_about_soldier.svg' />    
      

        <Row className="bakers_about_team_row">
          <div className="bakers_about__orange_heading_background">
              <Split className="bakers_about__heading_four">{data.gravBakersAbout.team_section_heading}</Split>
          </div>  

        </Row>
          <AnimatedHeadingTwo className="bakers_about_team_heading">{data.gravBakersAbout.team_heading}</AnimatedHeadingTwo>









          <DarkTeam/> 











      <SVGicon className='bakers_about_treasure' src='treasure.svg' />

        <Row>
          <Heading className="bakers_about_bakers_heading">{data.gravBakersAbout.bakers_heading}</Heading>
          <img src="../images/kid.jpg" className="bakers_about_bakers_image"/>
            <Paragraph className="bakers_about_bakers_p_one">{data.gravBakersAbout.bakers_paragraph_one}</Paragraph>
            <Paragraph className="bakers_about_bakers_p_two">{data.gravBakersAbout.bakers_paragraph_two}</Paragraph>

          <div className="bakers_about_flip_button bakers_flip">
            <Link to={data.gravBakersAbout.link_two}>
              <div className="front">{data.gravBakersAbout.link_two_text}</div>
              <div className="back">{data.gravBakersAbout.link_two_text}</div>
            </Link>
          </div>

        </Row>  

        <Row className="bakers_about_steps">
          <div className="bakers_about_numbers_first">1</div>
          <div className="bakers_about_arrows"><img src="../svg/process_arrow.svg"/></div>
          <div className="bakers_about_numbers">2</div>
          <div className="bakers_about_arrows"><img src="../svg/process_arrow.svg"/></div>
          <div className="bakers_about_numbers">3</div>
          <div className="bakers_about_arrows"><img src="../svg/process_arrow.svg"/></div>
          <div className="bakers_about_numbers">4</div>
          <div className="bakers_about_arrows"><img src="../svg/process_arrow.svg"/></div> 
          <div className="bakers_about_numbers">5</div>
          <div className="bakers_about_arrows"><img src="../svg/process_arrow.svg"/></div> 
          <div className="bakers_about_numbers">6</div>
        </Row>
        <Row className="bakers_about_steps_two">
          <img className="bakers_about_step_icons_first" src="../svg/register.svg"/>
          <img className="bakers_about_step_icons" src="../svg/location.svg"/>
          <img className="bakers_about_step_icons" src="../svg/envelope.svg"/>
          <img className="bakers_about_step_icons" src="../svg/clock.svg"/>
          <img className="bakers_about_step_icons" src="../svg/gold.svg"/>
          <img className="bakers_about_step_icons" src="../svg/smile.svg"/>
        </Row>
        <Row className="bakers_about_steps_three">
          <div className="bakers_about_steps_text_first"><span style={{fontWeight: 'bold'}}>REGISTER</span> and you will be a part of our global creative family</div>
          <div className="bakers_about_steps_text">Choose your Areas of Interest</div>
          <div className="bakers_about_steps_text">Send your ideas</div>
          <div className="bakers_about_steps_text">Then you can wait and see if you are the selected baker</div>
          <div className="bakers_about_steps_text">If you are, enjoy your reward</div>
          <div className="bakers_about_steps_text">If not this time, no worries, there will be more projects</div>
        </Row>   

      <SVGicon className='bakers_about_like' src='like.svg' />
      <SVGiconReverse className='bakers_about_book' src='book.svg' />         

        <Row className="bakers_about_authors">

          <img className="bakers_about_authors_image" src="../images/hipster.jpg"/>
          <Heading className="bakers_about_authors_heading">What authors say...</Heading>
          <Paragraph className="bakers_about_authors_texts">”Let your creativity shine and your ideas out. We will have an abundance of great projects, that will inspire you. Help us solve them!! Have fun with it! Let your creativity shine and your ideas out. We will have an abundance of great projects, that will inspire you. Help us solve them!! Have fun with it! Let your creativity shine and your ideas out. We will have an abundance of great projects, that will inspire you. Help us solve them!! Have fun with it!Let your creativity shine and your ideas out. We will have an abundance of great projects, that will inspire you. Help us solve them!! Have fun with it! ” </Paragraph>
          <div className="bakers_about_dots">
              <Dot isActive /><Dot/><Dot/><Dot/>
          </div>

          <div className="bakers_about_authors_flip_button bakers_flip">
            <Link to={'/bakerscontact'}>
              <div className="front">JOIN US</div>
              <div className="back">JOIN US</div>
            </Link>
          </div>          

        </Row> 

        <Row className="bakers_about_authors">

          <HeadingTwo className="bakers_about_in_numbers_heading">Our bakers in numbers</HeadingTwo>

        </Row>

        <Row className="bakers_about_in_numbers">
          <div className="bakers_about_in_numbers_icons_first"><img src="../svg/gold.svg"/></div>
          <div className="bakers_about_in_numbers_icons"><img src="../svg/bulb.svg"/></div>
          <div className="bakers_about_in_numbers_icons"><img src="../svg/fiver.svg"/></div>
        </Row>
        <Row className="bakers_about_in_numbers_two">
          <div className="bakers_about_in_numbers_numbers_first">287 000 USD</div>
          <div className="bakers_about_in_numbers_numbers">42 587</div>
          <div className="bakers_about_in_numbers_numbers">11 893</div>
        </Row>
        <Row className="bakers_about_in_numbers_three">
          <div className="bakers_about_in_numbers_texts_first">Reward</div>
          <div className="bakers_about_in_numbers_texts">creative ideas</div>
          <div className="bakers_about_in_numbers_texts">Bakers</div>

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

export const BakersAboutquery = graphql`
  query BakersAboutPageQuery {
    gravBakersAbout {
      team {
        member_text
        member
        link_two
        image
      }
      title
      team_heading
      subheading_two
      subheading_one
      problem_text
      problem_heading_two
      problem_heading_three
      problem_heading_one
      path
      paragraph_two
      paragraph_one
      link_two_text
      link_two
      link_one_text
      link_one
      image_two
      image_one
      icon07_text
      icon06_text
      icon05_text
      icon04_text
      icon03_text
      icon02_text
      icon01_text
      heading_one
      bakers_paragraph_two
      bakers_paragraph_one
      bakers_heading
      team_section_heading
      icons_link_one
      icons_link_one_text
      icons_link_two
      icons_link_two_text
      authors_image
      authors_heading
      author_texts {
        text
      }  
    }   
  }
`

export default BakersAbout


class Dot extends React.Component {

  constructor (props){
    super(props);
  }

  render() {
    return (
        <div>{this.props.isActive ? <FullCircle/> : <Circle/>}</div>
    );
  }

}
