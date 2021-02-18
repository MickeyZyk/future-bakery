import * as React from 'react';
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
import { Authors } from 'components/authors/Authors';
import { Footer } from 'components/footer/Footer';
import { TweenMax, TimelineMax, Power3 } from "gsap";
import { Tween, SplitWords } from 'react-gsap'
import { Controller, Scene } from 'react-scrollmagic';
import LinkArrow from 'assets/svg/link_arrow.svg'
import Circle from 'assets/svg/circle.svg';
import FullCircle from 'assets/svg/full_circle.svg';
const slug = require('slug')


import { TransitionState } from "gatsby-plugin-transition-link";

import SmoothScrollbar from 'smooth-scrollbar';
import Scrollbar from 'react-smooth-scrollbar';

const BakersAbout = ({ data, className }) => {


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
    var image = ['https://futurebakery.cz/grav/cz/czbakers/pages/'  + slug(data.gravBakersCzAbout.title.toLowerCase()) + '/' + item.image];
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

  const members = data.gravBakersCzAbout.team.map(getMembers)
  var mergedMembers = [].concat.apply([], members);

  const links = data.gravBakersCzAbout.team.map(getLinks)
  var mergedLinks = [].concat.apply([], links);

  const texts = data.gravBakersCzAbout.team.map(getTexts)
  var mergedTexts = [].concat.apply([], texts);

  const images = data.gravBakersCzAbout.team.map(getImages)
  var mergedImages = [].concat.apply([], images);

  const authorTexts = data.gravBakersCzAbout.author_texts.map(getAuthorTexts)
  var mergedAuthorTexts = [].concat.apply([], authorTexts);  

  const authorNames = data.gravBakersCzAbout.author_texts.map(getAuthorNames)
  var mergedAuthorNames = [].concat.apply([], authorNames);    


  return (




            <>


 <Scrollbar className="scrollbar" damping={0.1} renderByPixels={true} alwaysShowTracks={false} syncCallbacks={false}>      

  <div className='wrapper about-wrapper'>

      <Helmet title={data.gravBakersCzAbout.title} />
    <ReactCursorPosition>
              <SVGicon className='bakers_about__talk_bubbles' src='talk_bubbles.svg'  />



      <TransitionState>
        {({ transitionStatus }) => {
          return (


            <Tween duration={2} 
            from={ ['entering'].includes(transitionStatus) ? false : { yPercent: 100, ease: 'Power3.easeInOut' } } 
            to={ ['exiting'].includes(transitionStatus) ? { yPercent: -100, ease: 'Power3.easeInOut' } : false  } >  
              <div>
              
                <Row>

                    <Figure 
                    src={ 'https://futurebakery.cz/grav/cz/czbakers/pages/'+ slug(data.gravBakersCzAbout.title.toLowerCase()) + '/' + data.gravBakersCzAbout.image_one } 
                    className="bakers_about__image_one hide_on_mobile dropped"
                    />

                  <AnimatedHeading className='bakers_about__heading_one'>{data.gravBakersCzAbout.heading_one}</AnimatedHeading>
                  <HeadingTwo className='cz_bakers_about__heading_two'>{data.gravBakersCzAbout.subheading_one}</HeadingTwo>      
                  <Figure3 className="show_on_mobile"/>
                </Row>
                <Row>
                  <Paragraph className='bakers_about__paragraph paragraph'>{data.gravBakersCzAbout.paragraph_one}</Paragraph>
                </Row>
                <Row>
                  <Link className="bakers_cz_about__join_link_one_top" arrow bakers to={data.gravBakersCzAbout.link_one}>{data.gravBakersCzAbout.link_one_text}</Link>
                  <Paragraph className="divider_cz_text_one_top">{data.gravBakersCzAbout.link_one_divider}</Paragraph>
                  <Link bakers arrow className="bakers_cz_about__brief_link_one_top" to={data.gravBakersCzAbout.link_one_brief}>{data.gravBakersCzAbout.link_one_brief_text}</Link>          
                </Row>                

              </div>

            </Tween>



          )
        }}
      </TransitionState>






    </ReactCursorPosition>
      <ReactCursorPosition>

              <SVGicon className='bakers_about__brains' src='brains.svg' /> 
              <Row>
                <Figure
                src={ 'https://futurebakery.cz/grav/cz/czbakers/pages/'+ slug(data.gravBakersCzAbout.title.toLowerCase()) + '/' + data.gravBakersCzAbout.image_two } 
                className="bakers_about__image_two hide_on_mobile"
                />      
                <Split className='bakers_about__heading_three'>{data.gravBakersCzAbout.subheading_two}</Split>      
                <Paragraph className='bakers_we__paragraph_one paragraph'>{data.gravBakersCzAbout.paragraph_two}</Paragraph>

                <Link className="cz_bakers_about__join_link_one" arrow bakers to={data.gravBakersCzAbout.link_second}>{data.gravBakersCzAbout.link_second_text}</Link>
                <Paragraph className="cz_divider_text_one">{data.gravBakersCzAbout.link_second_divider}</Paragraph>
                <Link bakers arrow className="cz_bakers_about__brief_link_one" to={data.gravBakersCzAbout.link_second_brief}>{data.gravBakersCzAbout.link_second_brief_text}</Link>          



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
              <div className="tags_heading hide_on_mobile"><HeadingTwo>{data.gravBakersCzAbout.problem_heading_one}</HeadingTwo></div>
              <div className="tag_01">
              <p className="tag">{data.gravBakersCzAbout.problem_text}</p>
              </div>


              <div className="tags_heading show_on_mobile"><AnimatedHeading>{data.gravBakersCzAbout.problem_heading_one}</AnimatedHeading></div>


              <div className="tag_02">
              <p className="tag">{data.gravBakersCzAbout.problem_text_two}</p>
              </div>
              <div className="tag_03">
              <p className="tag">{data.gravBakersCzAbout.problem_text_three}</p>
              </div>
              <div className="tag_04">
              <p className="tag">{data.gravBakersCzAbout.problem_text_four}</p>
              </div>
              <img className="tag_arrow_01" src="../images/tag_arow_01.png" />
              <img className="tag_arrow_01l show_on_mobile" src="../images/tag_arow_01l.png" />
              <img className="phone_logo" src="../images/phone_logo.png " /> 
              <img className="tag_arrow_02 hide_on_mobile" src="../images/tag_arow_02.png" /> 
              <img className="hip hide_on_mobile" src="../svg/hip.svg"/>
              <img className="nerd hide_on_mobile" src="../svg/nerd.svg"/> 
              <p className="tag nerd_text hide_on_mobile">{data.gravBakersCzAbout.icon01_text}</p>
              <img className="granny hide_on_mobile" src="../svg/granny.svg"/>
              <p className="tag granny_text hide_on_mobile">{data.gravBakersCzAbout.icon02_text}</p>
              <img className="afro hide_on_mobile" src="../svg/afro.svg"/>                  
              <img className="dude hide_on_mobile" src="../svg/dude.svg"/>   
              <p className="tag dude_text hide_on_mobile">{data.gravBakersCzAbout.icon03_text}</p>
              <img className="smart hide_on_mobile" src="../svg/smart.svg"/>
              <p className="tag smart_text hide_on_mobile">{data.gravBakersCzAbout.icon04_text}</p> 
              <img className="kid hide_on_mobile" src="../svg/kid.svg"/>
              <p className="tag kid_text hide_on_mobile">{data.gravBakersCzAbout.icon05_text}</p> 
              <div className="tags_heading_middle hide_on_mobile"><HeadingTwo>{data.gravBakersCzAbout.problem_heading_two}</HeadingTwo></div> 
              <img className="fireman hide_on_mobile" src="../svg/fireman.svg"/>
              <p className="tag fireman_text hide_on_mobile">{data.gravBakersCzAbout.icon06_text}</p>
              <img className="girl hide_on_mobile" src="../svg/girl.svg"/>
              <p className="tag girl_text hide_on_mobile">{data.gravBakersCzAbout.icon07_text}</p>
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
      <Split className="tags_heading_bottom">{data.gravBakersCzAbout.problem_heading_three}</Split>
      <Row>
        <Link bakers arrow className="cz_bakers_about__join_link_two" to={data.gravBakersCzAbout.icons_link_one}>{data.gravBakersCzAbout.icons_link_one_text}</Link>
        <Paragraph className="cz_divider_text">{data.gravBakersCzAbout.icons_links_divider}</Paragraph>
        <Link bakers arrow className="cz_bakers_about__join_link_three" to={data.gravBakersCzAbout.icons_link_two}>{data.gravBakersCzAbout.icons_link_two_text}&nbsp;&nbsp;<LinkArrow className="link_arrow"/></Link>          
      </Row>

    <ReactCursorPosition>
      <SVGicon className='bakers_about_chef' src='bakers_about_chef.svg' />
      <SVGiconReverse className='bakers_cz_about_soldier' src='bakers_about_soldier.svg' />    
      

        <Row className="cz_bakers_about_team_row">
          <div className="bakers_about__orange_heading_background">
              <Split className="bakers_about__heading_four">{data.gravBakersCzAbout.team_section_heading}</Split>
          </div>  

        </Row>
          <Heading className="bakers_about_team_heading">{data.gravBakersCzAbout.team_heading}</Heading>

          <DarkTeam members={mergedMembers} links={mergedLinks} texts={mergedTexts} images={mergedImages}/> 


         </ReactCursorPosition>
         <ReactCursorPosition>     

      <SVGicon className='bakers_about_treasure' src='treasure.svg' />

        <Row>
          <Heading className="bakers_about_bakers_heading">{data.gravBakersCzAbout.bakers_heading}</Heading>

          <Figure 
          src="../images/kid.jpg" className="bakers_about_bakers_image"
          />

            <Paragraph className="bakers_about_bakers_p_one">{data.gravBakersCzAbout.bakers_paragraph_one}</Paragraph>
            <Paragraph className="bakers_about_bakers_p_two">{data.gravBakersCzAbout.bakers_paragraph_two}</Paragraph>

        </Row>  

        <Row>
          <Link bakers arrow button className="bakers_about_flip_button" to={data.gravBakersCzAbout.link_two}>{data.gravBakersCzAbout.link_two_text}</Link>
        </Row>


          </ReactCursorPosition>


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


          {data.gravBakersCzAbout.svg_icons.map((svg, i) => (
            <img key={i} className="bakers_about_step_icons" 
            src={ 'https://futurebakery.cz/grav/cz/czbakers/pages/'+ slug(data.gravBakersCzAbout.title.toLowerCase()) + '/' + svg.svg }
            />       
          ))}

        </Row>

        <Row className="bakers_about_steps_three">

          {data.gravBakersCzAbout.svg_icons.map((svg, i) => (
            <div key={i} className="bakers_about_steps_text" dangerouslySetInnerHTML={{ __html: svg.svg_text }}/>
          ))}

        </Row>   
  <ReactCursorPosition>
      <SVGicon className='bakers_about_like' src='like.svg' />
      <SVGiconReverse className='bakers_about_book' src='book.svg' />         

        <Row className="bakers_about_authors">


          <SmallFigure
          src={ 'https://futurebakery.cz/grav/cz/czbakers/pages/'+ slug(data.gravBakersCzAbout.title.toLowerCase()) + '/' + data.gravBakersCzAbout.authors_image } 
          className="bakers_about_authors_image"
          />

          <Heading className="bakers_about_authors_heading">{data.gravBakersCzAbout.authors_heading}</Heading>


          <Authors texts={mergedAuthorTexts} names={mergedAuthorNames}/>

          <Link bakers arrow button to={'/czbakerslogin'} className="bakers_about_authors_flip_button">PŘIPOJ SE K NÁM</Link>


        </Row> 


 </ReactCursorPosition>     

        <Row className="bakers_about_authors">

          <HeadingTwo className="bakers_about_in_numbers_heading">{data.gravBakersCzAbout.bakers_in_numbers}</HeadingTwo>

        </Row>

        <Row className="bakers_about_in_numbers">
          <div className="bakers_about_in_numbers_icons_first"><img src="../svg/gold.svg"/></div>
          <div className="bakers_about_in_numbers_icons"><img src="../svg/bulb.svg"/></div>
          <div className="bakers_about_in_numbers_icons"><img src="../svg/fiver.svg"/></div>
        </Row>
        <Row className="bakers_about_in_numbers_two">
          <div className="cz_bakers_about_in_numbers_numbers_first">{data.gravBakersCzAbout.reward}</div>
          <div className="bakers_about_in_numbers_numbers">{data.gravBakersCzAbout.ideas}</div>
          <div className="bakers_about_in_numbers_numbers">{data.gravBakersCzAbout.bakers}</div>
        </Row>
        <Row className="bakers_about_in_numbers_three">
          <div className="bakers_about_in_numbers_texts_first">{data.gravBakersCzAbout.reward_label}</div>
          <div className="bakers_about_in_numbers_texts">{data.gravBakersCzAbout.ideas_label}</div>
          <div className="bakers_about_in_numbers_texts">{data.gravBakersCzAbout.bakers_label}</div>

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
  query BakersCzAboutPageQuery {
    gravBakersCzAbout {
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
      bakers_in_numbers
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
