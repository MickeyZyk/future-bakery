import * as React from 'react';
import { graphql } from 'gatsby';
import Helmet from 'react-helmet';
import ReactCursorPosition from 'react-cursor-position';
import TransitionLink from 'gatsby-plugin-transition-link'
import SVGicon from 'components/svgicon/SVGicon';
import SVGiconReverse from 'components/svgiconreverse/SVGiconReverse';
import { Row } from 'components/row/Row';
import { Link } from 'components/link/Link';
import { Figure } from 'components/figure/Figure';
import { Figure2 } from 'components/figure2/Figure2';
import { AnimatedHeading  } from 'components/heading/AnimatedHeading';
import { AnimatedHeadingTwo  } from 'components/heading/AnimatedHeadingTwo';
import { Heading } from 'components/heading/Heading';
import { HeadingTwo } from 'components/heading/HeadingTwo';
import { Paragraph } from 'components/paragraph/Paragraph';
import { Team } from 'components/team/Team';
import { MobileTeam } from 'components/team/MobileTeam';
import { Clients } from 'components/clients/Clients';
import { MobileClients } from 'components/clients/MobileClients';
import Texticon from 'components/texticon/Texticon';
import { Footer } from 'components/footer/Footer';
import { Location } from '@reach/router';
import { TweenMax, TimelineMax, Power3} from "gsap";
import { Tween } from 'react-gsap';
import { TransitionState } from "gatsby-plugin-transition-link";
import ImageTop from 'assets/images/our_process.png';
import ImageBottom from 'assets/images/usual_closed_process.png';
import { If, Then, Else, Switch, Case, Default } from 'react-if'
import SmoothScrollbar from 'smooth-scrollbar';
import Scrollbar from 'react-smooth-scrollbar';
import {Swipeable} from 'react-swipeable'
const slug = require('slug');

export default class BakeryAbout extends React.Component {

  constructor(props){
    super(props);
    this.clicked_item = React.createRef();    
    this.state ={
      clicked: this.props.clicked ? true : false,
      currentTopIcon: 0
    };
    this.toggleShow = this.toggleShow.bind(this);   
    this.prevTopIcon = this.prevTopIcon.bind(this);  
    this.nextTopIcon = this.nextTopIcon.bind(this);      
  }

  toggleShow() {
    this.setState(state => ({
      clicked: !state.clicked
    }));
  }

  prevTopIcon() {
    console.log(this.state.currentTopIcon)    
    this.state.currentTopIcon > 0 ? this.setState({ currentTopIcon: this.state.currentTopIcon - 1 }) : null

  }

  nextTopIcon() {
    console.log(this.state.currentIcon)      
    this.state.currentTopIcon < 8 ? this.setState({ currentTopIcon: this.state.currentTopIcon + 1 }) : null    
  } 

render() {

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

  var titleSlug = slug(this.props.data.gravBakeryAbout.title.toLowerCase());

  function getImages(item) {
    var image = ['https://future.stratego.ba/en/bakery/pages/'  + titleSlug + '/' + item.image];
    return image;
  }  

  function getAuthorTexts(item) {
    var text = [item.text];
    return text;
  }   

  const members = this.props.data.gravBakeryAbout.team.map(getMembers)
  var mergedMembers = [].concat.apply([], members);

  const links = this.props.data.gravBakeryAbout.team.map(getLinks)
  var mergedLinks = [].concat.apply([], links);

  const texts = this.props.data.gravBakeryAbout.team.map(getTexts)
  var mergedTexts = [].concat.apply([], texts);

  const images = this.props.data.gravBakeryAbout.team.map(getImages)
  var mergedImages = [].concat.apply([], images);

  return (

      <TransitionState>
        {({ transitionStatus }) => {
          return (

            <> 

              <Scrollbar className="scrollbar" damping={0.1} renderByPixels={true} alwaysShowTracks={false} syncCallbacks={false}>

                <div className='wrapper about-wrapper bakery-about-wrapper'>
                  <ReactCursorPosition>
                    <Helmet title={this.props.data.gravBakeryAbout.title} />
                    <SVGicon className='bakery_about__green_rainbow' src='green_rainbow.svg'  />
                    <Row>
                      <div className='bakery_about__left_column_one'>
                        <AnimatedHeading className='__heading_one'>{this.props.data.gravBakeryAbout.heading_one}</AnimatedHeading>
                        <Paragraph className='bakery_about__paragraph paragraph'>{this.props.data.gravBakeryAbout.paragraph_one}</Paragraph>
                      </div>
                      <Figure src={ 'https://future.stratego.ba/user/pages/bakery/pages/about-us/' + this.props.data.gravBakeryAbout.image_one } 
                      className="bakery_about__image_one"/>
                    </Row>

                    <Row>
                      <h3 style={ transitionStatus == 'entered' ? {opacity:1} : {opacity:0} } className="family_subheading check_heading fade-in-small one">See what the crowd field of professionals can do</h3>
                    </Row>
                    <Row>
                      <Link bakery button arrow className= {` ${'bakery_about__button_link check_link fade-in-small one'} ${ transitionStatus == 'entered' ? 'see' : 'no_see'} `} to={'/bakery-work'}>CHECK IT</Link>
                    </Row>

                    <Row>
                      
                  <div className="family_row">          
                    <div className="family_wrapper family_bakery_wrapper family_about_wrapper ">
                        <SVGicon className='family_icon family_bakery_icon black_icon' src='family_bakery.svg' /> 
                        <h3 className="family_subheading black_text">Future Bakery</h3>
                        <p className="family_paragraph black_text">Fresh ideas and original content by and for your future consumers. (JE TO OK?)</p>  
                        <Link className="family_link family_bakery_link black_text" to={'/bakery'}>FIND OUT MORE</Link>                    
                    </div>
                    <div className=" family_wrapper family_bakers_wrapper family_about_wrapper" >
                        <SVGicon className='family_icon family_bakers_icon black_icon' src='family_bakers.svg' />
                        <h3 className="family_subheading black_text">Future Bakers</h3>
                        <p className="family_paragraph black_text">Unleash your creativity and ideas. Join thousands of other creative souls who are eager to share ideas.(JE TO OK?)</p>
                        <Link className="family_link family_bakers_link black_text" to={'/bakers'}>FIND OUT MORE</Link>                    
                    </div>
                    <div className=" family_wrapper family_crowders_wrapper family_about_wrapper" >
                        <SVGicon className='family_icon family_crowders_icon black_icon' src='family_crowders.svg' />
                        <h3 className="family_subheading black_text">Future Crowders</h3>
                        <p className="family_paragraph black_text">We create demand through seeking and developing cross-social topics. Communities building.(JE TO OK?)</p>                     
                        <Link className="family_link family_crowders_link black_text" to={'/crowders'}>FIND OUT MORE</Link>                    
                    </div>
                  </div>


                    </Row>



                    <div className="bakery_about__greenboard" style={{backgroundImage: `url(../images/greenboard.jpg)`}}>
                      <Row>
                        <div style={ {opacity: 1} } className="bakery_about__heading_two sw_heading_first">
                          <HeadingTwo>{this.props.data.gravBakeryAbout.heading_two}</HeadingTwo>
                        </div>
                        <div style={ {opacity: 0} } className="bakery_about__heading_two_alt sw_heading_second">
                          <HeadingTwo>{this.props.data.gravBakeryAbout.heading_two_alernate}</HeadingTwo>
                        </div>
                         <p style={ {opacity: 1} } 
                          className="bakery_about__green_text_one">{this.props.data.gravBakeryAbout.show_me_text}</p>
                        <p style={ {opacity: 0} } 
                          className="bakery_about__green_text_two">{this.props.data.gravBakeryAbout.show_me_two_text}</p>   

                      <Location>
                        {({ location }) => (
                          <>
                          <div  className="bakery_about__green_link_one" >          
                              <Link to={location.pathname} bakery arrow onClick={this.toggleShow} >SHOW ME</Link>
                          </div>
                          <div className="bakery_about__green_link_two">
                            <Link to={location.pathname} bakery arrow onClick={this.toggleShow} >SHOW ME</Link>    
                          </div>
                          </>
                        )} 
                      </Location> 

                      </Row>
                      <div className="bakery_about__white_company">

                        <Tween duration={3} delay={.5} to={ this.state.clicked ? { clipPath:'inset(0.001% 0.002% 0.003% 0.004%)', opacity:1, ease: 'Power2.easeInOut'} : { clipPath:'inset(0% 100% 0% 0%)', opacity:0, ease: 'Power2.easeInOut'  } } >
                          <img src={ImageBottom} className="switch_top_image visible"/>
                        </Tween>

                        <Tween duration={3} delay={.5} to={ this.state.clicked ? { clipPath:'inset(0 0% 0% 100%)', opacity:0, ease: 'Power2.easeInOut'  } : { clipPath:'inset(0.001% 0.002% 0.003% 0.004%)', opacity:1, ease: 'Power2.easeInOut'  } } >
                          <img src={ImageTop} className="switch_bottom_image visible"  />  
                        </Tween>            

                      </div>        
                      <Row className="centered-row">
                        <Link bakery button arrow className="bakery_about__button_link" to={'/bakerycontact'}>START A PROJECT WITH US</Link>
                      </Row>
                    </div>
                    </ReactCursorPosition>
                    <ReactCursorPosition>
                    <SVGicon className='bakery_about__white_hearts' src='white_hearts.svg' />
                    <SVGiconReverse className='bakery_about__white_pan' src='white_pan.svg' />        
                    <Row>
                    
                      <div className="bakery_about__green_heading_background">
                        <AnimatedHeadingTwo className="bakery_about__heading_three">{this.props.data.gravBakeryAbout.heading_three}</AnimatedHeadingTwo>     
                      </div>

                      <Swipeable
                        onSwipedRight={this.prevTopIcon}
                        onSwipedLeft={this.nextTopIcon} >

                        <div className="bakery_about__right_icons">
                          {this.props.data.gravBakeryAbout.svg_icons.map(({ svg, svg_text }, index) => (
                            <div key={svg_text}>
                              <Texticon style={ this.state.currentTopIcon == index ? {opacity:1} : {opacity:0} } className='bakery_about__graph_icon' name={svg_text} src={svg} />
                            </div>
                          ))}
                        </div>

                      </Swipeable>

                      <>
                        <div className="cr_mob_left">
                          <div onClick={this.prevTopIcon} className="mob_nextprev"><img src="/svg/mob_left.svg"/></div>
                        </div>
                        <div className="cr_mob_right"> 
                          <div onClick={this.nextTopIcon} className="mob_nextprev"><img src="/svg/mob_right.svg"/></div>
                        </div>
                      </>          

                      <div className="crowders_top_icons_indicators" style={{position: 'relative'}}>
                        {this.state.currentTopIcon + 1} / 9
                      </div> 

                    </Row>    
                    </ReactCursorPosition>
                    <ReactCursorPosition>  
                    <SVGicon className='bakery_about_chef' src='bakery_about_chef.svg' />
                    <SVGiconReverse className='bakery_about_soldier' src='bakery_about_soldier.svg' />  
                    <AnimatedHeadingTwo className="bakery_about_team_heading">Meet the team</AnimatedHeadingTwo>
                    <div className="bakery_team">

                      <Team members={mergedMembers} links={mergedLinks} texts={mergedTexts} images={mergedImages} className="crowders_about_team hide_on_mobile"/>      

                      <MobileTeam members={mergedMembers} links={mergedLinks} texts={mergedTexts} images={mergedImages} className="crowders_about_team show_on_mobile"/>   

                    </div>      
                    <div style={{backgroundImage: "url('../images/clients_bck.png')"}} className="bakery_about_clients_background">
                      <AnimatedHeadingTwo className="bakery_about_clients_heading">Whom we bake with</AnimatedHeadingTwo>
                      <Clients className="bakery_about_clients hide_on_mobile"/>
                      <MobileClients className="bakery_about_clients show_on_mobile"/>
                      <Row>
                        <Link gray arrow className="bakery_about_clients_contact_link" to={'/bakerycontact'}>CONTACT US</Link>
                      </Row>
                    </div>
                    </ReactCursorPosition>

                </div>
            <Footer/>
            </Scrollbar>


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


}

export const BakeryAboutquery = graphql`
  query BakeryAboutPageQuery {
    gravBakeryAbout {
      id
      heading_one
      heading_three
      heading_two
      heading_two_alernate      
      image_one
      paragraph_one
      show_me_link
      show_me_text
      show_me_two_text      
      title
      team {
        member_text
        member
        link_two
        image
      }
      svg_icons {
        svg_text
        svg
      }
      show_me_two_text
      show_me_two_link
    }  
  }
`
