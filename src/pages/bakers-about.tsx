import React, { useState } from 'react';
import { graphql } from 'gatsby';
import Helmet from 'react-helmet';
import ReactCursorPosition from 'react-cursor-position';
import TransitionLink from 'gatsby-plugin-transition-link'
import SVGicon from 'components/svgicon/SVGicon';
import SVGiconReverse from 'components/svgiconreverse/SVGiconReverse';
import { Row } from 'components/row/Row';
import { SmallFigure } from 'components/figure/SmallFigure';
import { Figure3 } from 'components/figure3/Figure3';
import { Figure4 } from 'components/figure4/Figure4';
import { Split } from 'components/split/Split';
import { Heading } from 'components/heading/Heading';
import { Figure } from 'components/figure/Figure';
import { HeadingTwo } from 'components/heading/HeadingTwo';
import { AnimatedHeading  } from 'components/heading/AnimatedHeading';
import { AnimatedHeadingTwo  } from 'components/heading/AnimatedHeadingTwo';
import { AnimatedHeadingThree } from 'components/heading/AnimatedHeadingThree';
import { Paragraph } from 'components/paragraph/Paragraph';
import Texticon from 'components/texticon/Texticon';
import { Link } from 'components/link/Link';
import { DarkTeam } from 'components/team/DarkTeam';
import { DarkMobileTeam } from 'components/team/DarkMobileTeam';
import { Authors } from 'components/authors/Authors';
import { MobileAuthors } from 'components/authors/MobileAuthors';
import { Footer } from 'components/footer/Footer';
import { TweenMax, TimelineMax, Power3 } from "gsap";
import { Tween, SplitWords } from 'react-gsap'
import { Controller, Scene } from 'react-scrollmagic';
import LinkArrow from 'assets/svg/link_arrow.svg'
import Circle from 'assets/svg/circle.svg';
import FullCircle from 'assets/svg/full_circle.svg';
import {Swipeable} from 'react-swipeable';
import Bubbles from 'assets/svg/talk_bubbles.svg';
import Brains from 'assets/svg/brains.svg';
const slug = require('slug')


import { TransitionState } from "gatsby-plugin-transition-link";

import SmoothScrollbar from 'smooth-scrollbar';
import Scrollbar from 'react-smooth-scrollbar';

const BakersAbout = ({ data, className }) => {

  const [currentTopIcon, setCurrentTopIcon] = useState(0);

  function prevTopIcon() {
   
    currentTopIcon > 0 ? setCurrentTopIcon(currentTopIcon - 1) : null

  }

  function nextTopIcon() {
     
    currentTopIcon < 5 ? setCurrentTopIcon(currentTopIcon + 1) : null    
  } 

  const [currentIcon, setCurrentIcon] = useState(0);

  function prevIcon() {
   
    currentIcon > 0 ? setCurrentIcon(currentIcon - 1) : null

  }

  function nextIcon() {
     
    currentIcon < 2 ? setCurrentIcon(currentIcon + 1) : null    
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
    var image = ['https://future.stratego.ba/en/bakers/pages/'  + slug(data.gravBakersAbout.title.toLowerCase()) + '/' + item.image];
    return image;
  }  

  function getAuthorTexts(item) {
    var text = [item.text];
    return text;
  }   

  function getAuthorNames(item) {
    var text = [item.name];
    return text;
  }   

  const members = data.gravBakersAbout.team.map(getMembers)
  var mergedMembers = [].concat.apply([], members);

  const links = data.gravBakersAbout.team.map(getLinks)
  var mergedLinks = [].concat.apply([], links);

  const texts = data.gravBakersAbout.team.map(getTexts)
  var mergedTexts = [].concat.apply([], texts);

  const images = data.gravBakersAbout.team.map(getImages)
  var mergedImages = [].concat.apply([], images);

  const authorTexts = data.gravBakersAbout.author_texts.map(getAuthorTexts)
  var mergedAuthorTexts = [].concat.apply([], authorTexts);  

  const authorNames = data.gravBakersAbout.author_texts.map(getAuthorNames)
  var mergedAuthorNames = [].concat.apply([], authorNames);    


  return (

            <>


 <Scrollbar className="scrollbar" damping={0.1} renderByPixels={true} alwaysShowTracks={false} syncCallbacks={false}>      

  <div className='wrapper about-wrapper bakers-about-wrapper'>

      <Helmet title={data.gravBakersAbout.title} />
    <ReactCursorPosition>
              <SVGicon className='bakers_about__talk_bubbles hide_on_mobile' src='talk_bubbles.svg'  />



      <TransitionState>
        {({ transitionStatus }) => {
          return (


            <Tween duration={2} 
            from={ ['entering'].includes(transitionStatus) ? false : { yPercent: 100, ease: 'Power3.easeInOut' } } 
            to={ ['exiting'].includes(transitionStatus) ? { yPercent: -100, ease: 'Power3.easeInOut' } : false  } >  
              <div>
                <Bubbles className='bakers_about__talk_bubbles show_on_mobile' />
                <Row>

                    <Figure 
                    src={ 'https://future.stratego.ba/en/bakers/pages/'+ slug(data.gravBakersAbout.title.toLowerCase()) + '/' + data.gravBakersAbout.image_one } 
                    className="bakers_about__image_one hide_on_mobile dropped"
                    />

                  <AnimatedHeading className='bakers_about__heading_one'>{data.gravBakersAbout.heading_one}</AnimatedHeading>
                  <HeadingTwo className='bakers_about__heading_two'>{data.gravBakersAbout.subheading_one}</HeadingTwo>      
                  <Figure3 className="show_on_mobile"/>
                </Row>
                <Row>
                  <Paragraph className='bakers_about__paragraph paragraph'>{data.gravBakersAbout.paragraph_one}</Paragraph>
                </Row>
                <Row>
                  <Link className="bakers_about__join_link_one_top" arrow bakers to={data.gravBakersAbout.link_one}>{data.gravBakersAbout.link_one_text}</Link>
                  <Paragraph className="divider_text_one_top">{data.gravBakersAbout.link_one_divider}</Paragraph>
                  <Link bakers arrow className="bakers_about__brief_link_one_top" to={data.gravBakersAbout.link_one_brief}>{data.gravBakersAbout.link_one_brief_text}</Link>          
                </Row>

              </div>

            </Tween>



          )
        }}
      </TransitionState>

    </ReactCursorPosition>
      <ReactCursorPosition>

              <SVGicon className='bakers_about__brains hide_on_mobile' src='brains.svg' />
              <Brains className='bakers_about__brains show_on_mobile' /> 
              <Row>
                <Figure
                src={ 'https://future.stratego.ba/en/bakers/pages/'+ slug(data.gravBakersAbout.title.toLowerCase()) + '/' + data.gravBakersAbout.image_two } 
                className="bakers_about__image_two hide_on_mobile"
                />      
                <Split className='bakers_about__heading_three'>{data.gravBakersAbout.subheading_two}</Split>      
                <Paragraph className='bakers_we__paragraph_one paragraph'>{data.gravBakersAbout.paragraph_two}</Paragraph>

                <Link className="bakers_about__join_link_one" arrow bakers to={data.gravBakersAbout.link_second}>{data.gravBakersAbout.link_second_text}</Link>
                <Paragraph className="divider_text_one">{data.gravBakersAbout.link_second_divider}</Paragraph>
                <Link bakers arrow className="bakers_about__brief_link_one" to={data.gravBakersAbout.link_second_brief}>{data.gravBakersAbout.link_second_brief_text}</Link>          

                <Figure4 className="show_on_mobile"/>
              </Row>


        </ReactCursorPosition>

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
              <p className="tag">{data.gravBakersAbout.problem_text_two}</p>
              </div>
              <div className="tag_03">
              <p className="tag">{data.gravBakersAbout.problem_text_three}</p>
              </div>
              <div className="tag_04">
              <p className="tag">{data.gravBakersAbout.problem_text_four}</p>
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
                <div className="people_doodle show_on_mobile">
                  <div className="tags_heading_middle"><HeadingTwo>{data.gravBakersAbout.problem_heading_two}</HeadingTwo></div>
                </div> 
                <img className="tag_arrow_04" src="../images/tag_arow_04.png" /> 
                <div className="people_doodle show_on_mobile">
                  <img className="hip" src="../svg/hip.svg"/>
                </div>
                <div className="people_doodle show_on_mobile">
                  <img className="nerd" src="../svg/nerd.svg"/> 
                </div>
                <div className="people_doodle show_on_mobile">
                  <p className="tag nerd_text">{data.gravBakersAbout.icon01_text}</p>
                </div>
                <div className="people_doodle show_on_mobile">
                  <img className="granny" src="../svg/granny.svg"/>
                </div>
                <div className="people_doodle show_on_mobile">
                  <p className="tag granny_text">{data.gravBakersAbout.icon02_text}</p>
                </div>
                <div className="people_doodle show_on_mobile">
                  <img className="fireman" src="../svg/fireman.svg"/>
                </div>
                <div className="people_doodle show_on_mobile">
                  <p className="tag fireman_text">{data.gravBakersAbout.icon06_text}</p>
                </div>
                <div className="people_doodle show_on_mobile">
                  <img className="girl" src="../svg/girl.svg"/>
                </div>
                <div className="people_doodle show_on_mobile">
                  <p className="tag girl_text">{data.gravBakersAbout.icon07_text}</p>
                </div>
                <div className="people_doodle show_on_mobile">
                  <img className="kid" src="../svg/kid.svg"/>
                </div>
                <div className="people_doodle show_on_mobile">
                  <p className="tag kid_text">{data.gravBakersAbout.icon05_text}</p> 
                </div>
                <div className="people_doodle show_on_mobile">
                  <img className="smart" src="../svg/smart.svg"/>
                </div>
                <div className="people_doodle show_on_mobile">
                  <p className="tag smart_text">{data.gravBakersAbout.icon04_text}</p> 
                </div>
                <div className="people_doodle show_on_mobile">
                  <img className="afro" src="../svg/afro.svg"/>     
                </div>
                <div className="people_doodle show_on_mobile">
                  <img className="vial" src="../svg/vial.svg"/>
                </div>
              </div>

            </Tween>
          </Scene>
        </Controller>
      </Row>
      <Split className="tags_heading_bottom">{data.gravBakersAbout.problem_heading_three}</Split>
      <Row>
        <Link bakers arrow className="bakers_about__join_link_two" to={data.gravBakersAbout.icons_link_one}>{data.gravBakersAbout.icons_link_one_text}</Link>
        <Paragraph className="divider_text">{data.gravBakersAbout.icons_links_divider}</Paragraph>
        <Link bakers arrow className="bakers_about__join_link_three" to={data.gravBakersAbout.icons_link_two}>{data.gravBakersAbout.icons_link_two_text}&nbsp;&nbsp;<LinkArrow className="link_arrow"/></Link>          
      </Row>

    <ReactCursorPosition>
      <SVGicon className='bakers_about_chef' src='bakers_about_chef.svg' />
      <SVGiconReverse className='bakers_about_soldier' src='bakers_about_soldier.svg' />    
      

        <Row className="bakers_about_team_row">
          <div className="bakers_about__orange_heading_background">
              <Split className="bakers_about__heading_four">{data.gravBakersAbout.team_section_heading}</Split>
          </div>  

        </Row>
          <AnimatedHeadingTwo className="bakers_about_team_heading">{data.gravBakersAbout.team_heading}</AnimatedHeadingTwo>

          <DarkTeam members={mergedMembers} links={mergedLinks} texts={mergedTexts} images={mergedImages} className="hide_on_mobile"/> 
          <DarkMobileTeam members={mergedMembers} links={mergedLinks} texts={mergedTexts} images={mergedImages} className="show_on_mobile"/>           

         </ReactCursorPosition>
         <ReactCursorPosition>     

      <SVGicon className='bakers_about_treasure' src='treasure.svg' />

        <Row>
          <Heading className="bakers_about_bakers_heading">{data.gravBakersAbout.bakers_heading}</Heading>

          <Figure 
          src="../images/kid.jpg" className="bakers_about_bakers_image"
          />

            <Paragraph className="bakers_about_bakers_p_one">{data.gravBakersAbout.bakers_paragraph_one}</Paragraph>
            <Paragraph className="bakers_about_bakers_p_two">{data.gravBakersAbout.bakers_paragraph_two}</Paragraph>

        </Row>  

        <Row>
          <Link bakers arrow button className="bakers_about_flip_button" to={data.gravBakersAbout.link_two}>{data.gravBakersAbout.link_two_text}</Link>
        </Row>


          </ReactCursorPosition>



      <Swipeable
        onSwipedRight={prevTopIcon}
        onSwipedLeft={nextTopIcon} >  

        <Row className="bakers_about_steps">
          <div className="bakers_about_numbers_first" style={currentTopIcon == 0 ? {opacity : 1} : {opacity : 0}}>1</div>
          <div className="bakers_about_arrows"><img src="../svg/process_arrow.svg"/></div>
          <div className="bakers_about_numbers" style={currentTopIcon == 1 ? {opacity : 1} : {opacity : 0}}>2</div>
          <div className="bakers_about_arrows"><img src="../svg/process_arrow.svg"/></div>
          <div className="bakers_about_numbers" style={currentTopIcon == 2 ? {opacity : 1} : {opacity : 0}}>3</div>
          <div className="bakers_about_arrows"><img src="../svg/process_arrow.svg"/></div>
          <div className="bakers_about_numbers" style={currentTopIcon == 3 ? {opacity : 1} : {opacity : 0}}>4</div>
          <div className="bakers_about_arrows"><img src="../svg/process_arrow.svg"/></div> 
          <div className="bakers_about_numbers" style={currentTopIcon == 4 ? {opacity : 1} : {opacity : 0}}>5</div>
          <div className="bakers_about_arrows"><img src="../svg/process_arrow.svg"/></div> 
          <div className="bakers_about_numbers" style={currentTopIcon == 5 ? {opacity : 1} : {opacity : 0}}>6</div>
        </Row>

        <Row className="bakers_about_steps_two">


          {data.gravBakersAbout.svg_icons.map((svg, i) => (
            <img key={i} className="bakers_about_step_icons" style={currentTopIcon == i ? {opacity : 1} : {opacity : 0}}
            src={ 'https://future.stratego.ba/en/bakers/pages/'+ slug(data.gravBakersAbout.title.toLowerCase()) + '/' + svg.svg }
            />       
          ))}

        </Row>

        <Row className="bakers_about_steps_three">

          {data.gravBakersAbout.svg_icons.map((svg, i) => (
            <div key={i} className="bakers_about_steps_text" style={currentTopIcon == i ? {opacity : 1} : {opacity : 0}} dangerouslySetInnerHTML={{ __html: svg.svg_text }}/>
          ))}

        </Row>   


        </Swipeable>

        <Row>
              <>
                <div className="cr_mob_left">
                  <div onClick={prevTopIcon} className="mob_nextprev"><img src="/svg/mob_left.svg"/></div>
                </div>
                <div className="cr_mob_right"> 
                  <div onClick={nextTopIcon} className="mob_nextprev"><img src="/svg/mob_right.svg"/></div>
                </div>
              </>          

              <div className="crowders_top_icons_indicators" style={{position: 'relative'}}>
                {currentTopIcon + 1} / 6
              </div>   
        </Row>
    <ReactCursorPosition>
      <SVGicon className='bakers_about_like' src='like.svg' />
      <SVGiconReverse className='bakers_about_book' src='book.svg' />         

        <Row className="bakers_about_authors">


          <SmallFigure
          src={ 'https://future.stratego.ba/en/bakers/pages/'+ slug(data.gravBakersAbout.title.toLowerCase()) + '/' + data.gravBakersAbout.authors_image } 
          className="bakers_about_authors_image"
          />

          <Heading className="bakers_about_authors_heading">{data.gravBakersAbout.authors_heading}</Heading>

          <Authors texts={mergedAuthorTexts} names={mergedAuthorNames} className="hide_on_mobile"/>
          <MobileAuthors texts={mergedAuthorTexts} names={mergedAuthorNames} className="show_on_mobile" />

          <Link bakers arrow button to={'/bakers-about'} className="bakers_about_authors_flip_button">JOIN US</Link>


        </Row> 


 </ReactCursorPosition>     

        <Row className="bakers_about_authors">

          <HeadingTwo className="bakers_about_in_numbers_heading">Our bakers in numbers</HeadingTwo>

        </Row>

      <Swipeable
        onSwipedRight={prevIcon}
        onSwipedLeft={nextIcon} >  

        <Row className="bakers_about_in_numbers">
          <div className="bakers_about_in_numbers_icons_first" style={ currentIcon == 0 ? {opacity: 1} : {opacity: 0} }><img src="../svg/gold.svg"/></div>
          <div className="bakers_about_in_numbers_icons" style={ currentIcon == 1 ? {opacity: 1} : {opacity: 0} }><img src="../svg/bulb.svg"/></div>
          <div className="bakers_about_in_numbers_icons" style={ currentIcon == 2 ? {opacity: 1} : {opacity: 0} }><img src="../svg/fiver.svg"/></div>
        </Row>
        <Row className="bakers_about_in_numbers_two">
          <div className="bakers_about_in_numbers_numbers_first" style={ currentIcon == 0 ? {opacity: 1} : {opacity: 0} }>{data.gravBakersAbout.reward}</div>
          <div className="bakers_about_in_numbers_numbers" style={ currentIcon == 1 ? {opacity: 1} : {opacity: 0} }>{data.gravBakersAbout.ideas}</div>
          <div className="bakers_about_in_numbers_numbers" style={ currentIcon == 2 ? {opacity: 1} : {opacity: 0} }>{data.gravBakersAbout.bakers}</div>
        </Row>
        <Row className="bakers_about_in_numbers_three">
          <div className="bakers_about_in_numbers_texts_first" style={ currentIcon == 0 ? {opacity: 1} : {opacity: 0} }>Reward</div>
          <div className="bakers_about_in_numbers_texts" style={ currentIcon == 1 ? {opacity: 1} : {opacity: 0} }>creative ideas</div>
          <div className="bakers_about_in_numbers_texts" style={ currentIcon == 2 ? {opacity: 1} : {opacity: 0} }>Bakers</div>

        </Row>

      </Swipeable>        
        <Row>
              <>
                <div className="cr_mob_left">
                  <div onClick={prevIcon} className="mob_nextprev"><img src="/svg/mob_left.svg"/></div>
                </div>
                <div className="cr_mob_right"> 
                  <div onClick={nextIcon} className="mob_nextprev"><img src="/svg/mob_right.svg"/></div>
                </div>
              </>          

              <div className="crowders_top_icons_indicators" style={{position: 'relative'}}>
                {currentIcon + 1} / 3
              </div>   
        </Row>



  </div>

<Footer/>
</Scrollbar>


      <TransitionState>
        {({ transitionStatus }) => {
          return (          


            <Tween duration={2} 
            from={ ['entering'].includes(transitionStatus) ? false : { yPercent: 100, opacity: 1, ease: 'Power3.easeInOut' } } 
            to={ ['exiting'].includes(transitionStatus) ? { backgroundColor: '#222222', yPercent: -100, opacity: 1, ease: 'Power3.easeInOut' } : false  } >  

              <div className='fulscreen_white' style={{zIndex: -1, backgroundColor: '#ffffff', position: 'absolute', width: '100vw', height: '100vh', top: 0, bottom: 0, left: 0, right: 0}}></div>

            </Tween>



          )
        }}
      </TransitionState>

            </>
  )
}

export const BakersAboutquery = graphql`
  query BakersAboutPageQuery {
    gravBakersAbout {
      svg_icons {
        svg
        svg_text
      }
      title
      team_section_heading
      team_heading
      team {
        member_text
        member
        link_two
        image
      }
      subheading_two
      subheading_one
      problem_text
      problem_text_two
      problem_text_three
      problem_text_four            
      problem_heading_two
      problem_heading_three
      problem_heading_one
      paragraph_two
      paragraph_one
      link_two_text
      link_two
      link_one_text
      link_one
      link_one_divider
      link_one_brief
      link_one_brief_text
      link_second
      link_second_text
      link_second_divider
      link_second_brief
      link_second_brief_text
      image_two
      image_one
      icons_link_two_text
      icons_link_two
      icons_link_one_text
      icons_link_one
      icons_links_divider
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
      authors_image
      authors_heading
      author_texts {
        text
        name
      }
      ideas
      reward
      bakers 
      ideas_label
      reward_label
      bakers_label       
    }   
  }
`

export default BakersAbout
