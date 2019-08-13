import * as React from 'react';
import ReactDOM from 'react-dom'
import Helmet from 'react-helmet';
import { Heading } from 'components/heading/Heading';
import { AnimatedHeading } from 'components/heading/AnimatedHeading';
import { Paragraph } from 'components/paragraph/Paragraph';
import { Link } from 'components/link/Link';
import { LeftLink } from 'components/link/LeftLink';
import { ExternalLink } from 'components/link/ExternalLink';
import ReactCursorPosition from 'react-cursor-position';
import SVGicon from 'components/svgicon/SVGicon';
import SVGiconReverse from 'components/svgiconreverse/SVGiconReverse';
import ReactPlayer from 'react-player'
import { Footer } from 'components/footer/Footer';
import { Row } from 'components/row/Row';
import { graphql } from 'gatsby'
import { If, Then, Else, Switch, Case, Default } from 'react-if'
import { ScrollTo } from "react-scroll-to";

import { SmoothScrollbar } from 'smooth-scrollbar';
import Scrollbar from 'react-smooth-scrollbar';

import { TweenMax, TimelineMax, Power3} from "gsap";
import { Tween } from 'react-gsap';
import { TransitionState } from "gatsby-plugin-transition-link";

import s from './CrowdersWork.scss';
const slug = require('slug')

export default class Work extends React.Component {

  constructor(props){
    super(props);
    this.videoPreview = React.createRef();
    this.videoEmbed = React.createRef();    
    this.videoOverlay = React.createRef();    
    this.videoPlayer = React.createRef();     
    this.playVideo = this.playVideo.bind(this);  
    this.handleClick= this.handleClick.bind(this);
    this.state = {
      url: null,
      pip: false,
      playing: false,
      controls: false,
      light: false,
      volume: 1,
      muted: false,
      played: 0,
      loaded: 0,
      duration: 0,
      playbackRate: 1.0,
      loop: false
    }
      
  } 

  componentDidMount(){

  }

  playVideo(){
    this.videoPreview.current.style.zIndex = -5;
    this.videoPreview.current.style.opacity = 0;    
    this.videoEmbed.current.style.zIndex = 10;    
    //this.videoOverlay.current.style.visibility = 'hidden';
    this.setState({ playing: true },() => {
    //console.log("PLAYING", this.state.playing)
    })
  }


  handleClick(){
  //console.log("ANCHOR" + document.querySelector('#video_image_anchor'))    
    const { scrollbar } = this.$container;
    scrollbar.scrollIntoView(document.querySelector('#video_image_anchor'), {
      alignToTop: true,
      onlyScrollIfNeeded: false,
    });
  }  

   scrollPlay(event) {
      this.handleClick();
      this.playVideo();
   }


  render() {

  const { prev, next } = this.props.pageContext


  return (


<>



          
  <Scrollbar ref={c => this.$container = c} className="scrollbar" damping={0.1} renderByPixels={true} alwaysShowTracks={false} syncCallbacks={false}>   
    





<>


      <TransitionState>
        {({ transitionStatus }) => {
          return (

            <>

            <Tween duration={2} 
            from={ ['entering'].includes(transitionStatus) ? false : { yPercent: 100, opacity: 1, ease: 'Power3.easeInOut' } } 
            to={ ['exiting'].includes(transitionStatus) ? { yPercent: -100, opacity: 1, ease: 'Power3.easeInOut' } : false  } >  

  <div id ="topper" style={{overflowX: 'hidden'}}>
    <div className='wrapper' style={{overflowX: 'hidden'}}>
      <ReactCursorPosition className='fullscreen_cursor_position'>


        <Helmet title={this.props.data.gravCrowdersWork.title} />

        <div className={s.row}>


        <AnimatedHeading className={s.column__col1_heading}>{this.props.data.gravCrowdersWork.heading_one}</AnimatedHeading>


        <p className={s.paragraph}>{this.props.data.gravCrowdersWork.paragraph}</p>

          <div id="video_image_anchor" className={s.detail_wrapper}>
            <div className={s.row__threetop}> 
              <div className={s.column__col5}>
                <ScrollTo>
                  {({ scrollTo }) => (
                    <p onClick={ this.handleClick} className={s.control}>EXPLORE <img className={s.explore} src='../images/explore_arrow.png' /></p>                    
                  )}
                </ScrollTo>
              </div>
              <If condition={this.props.data.gravCrowdersWork.video != 'null'}>
                <Then>
                  <div className={s.column__col6}>
                    <p onClick={ this.scrollPlay } className={s.control}>{'WATCH VIDEO'} <img className={s.explore} src='../images/video_play.png' /></p>
                  </div>
                </Then>
              </If>
            </div>
            <div className={s.row__threebot} ref={this.videoOverlay}>
              <div className={s.column__col7}>
                <If condition={this.props.data.gravCrowdersWork.video != 'null'}>
                  <Then>
                    <img className={s.client_logo} src={ 'https://future.stratego.ba/en/crowders/work/'+ slug(this.props.data.gravCrowdersWork.title.toLowerCase()) + '/' + this.props.data.gravCrowdersWork.logo_light } />              
                  </Then>
                  <Else>
                    <div style={{height: '2.8vw'}}></div>
                  </Else>
                </If>
                <If condition={this.props.data.gravCrowdersWork.video != 'null'}>
                  <Then>
                    <p className={s.award}>{this.props.data.gravCrowdersWork.title.toUpperCase()}</p>
                  </Then>
                  <Else>
                    <div style={{height: '2.8vw'}}></div>
                  </Else>
                </If>                

              </div>
            </div>
            <div style={{
              opacity: 0,
              backgroundColor: '#000',
              width: '100%',
              height: '46.5vw',
              position: 'absolute',
              zIndex: 1,
              top: '4vw',
              mixBlendMode: 'darken'
            }}></div>
            <img id="video_image" src={ 'https://future.stratego.ba/en/crowders/work/'+ slug(this.props.data.gravCrowdersWork.title.toLowerCase()) + '/' + this.props.data.gravCrowdersWork.big_image } ref={this.videoPreview} className={s.fiat_img} />
            <div id="video" className={s.embedded_video} ref={this.videoEmbed}>
              <ReactPlayer controls ref={this.videoPlayer} url={this.props.data.gravCrowdersWork.video} playing={this.state.playing} />            
            </div>

          </div>








          <div className={s.bottom_wrapper}>

            <div className={s.bottom_row}>

                <LeftLink className={s.all_cases} gray arrow to={'/crowders-work'}>ALL CASES</LeftLink>

                <If condition={next}>
                  <Then>

                    <Link gray arrow className={s.next_case} 
                    to={ "/crowders-work/" + slug( next ? next.title.toLowerCase() : '') }>
                      NEXT CASE
                    </Link>

                  </Then>
                </If>

                <Link className={s.start_project} gray arrow 
                to={"/crowderscontact/"}>
                  START A PROJECT WITH US
                </Link>
          
            </div>
            <div className={s.bottom_row}>

                <If condition={next}>
                  <Then>
                    <Link gray className={s.next_case_link} 
                    to={ "/crowders-work/" + slug( next ? next.title.toLowerCase() : '') }>
                      <p className={s.topic}>{next ? next.title : ''}</p>
                    </Link>

                  </Then>

                </If>



            </div>

          </div>

          <Row>
            <p className="cw_paragraph_bottom">We regularly measure sentiment of key segments and check “temperature”</p>
          </Row>

          <Row>
            <ExternalLink crowders button arrow className={s.bottom_button} to={'../pdf/report.pdf'} >SEE A FUTURE REPORT</ExternalLink>
          </Row>          


       </div>

      </ReactCursorPosition>
    </div>
  </div>



            </Tween>

            </>

          )
        }}
      </TransitionState>



  </>
  <Footer/>  



  </Scrollbar>

             

      <TransitionState>
        {({ transitionStatus }) => {
          return (

            <>

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
  
)}
}


export const query = graphql`
  query CrowdersWorkQueryByTitle($id: String!) {
    gravCrowdersWork(id: {eq: $id}) {
        id
        big_image
        paragraph
        logo_light
        heading_two
        heading_tag
        heading_one
        video
        title
    }
  }

`