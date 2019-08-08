import * as React from 'react';
import Helmet from 'react-helmet';
import { Heading } from 'components/heading/Heading';
import { Paragraph } from 'components/paragraph/Paragraph';
import { Link } from 'components/link/Link';
import ReactCursorPosition from 'react-cursor-position';
import SVGicon from 'components/svgicon/SVGicon';
import SVGiconReverse from 'components/svgiconreverse/SVGiconReverse';
import ReactPlayer from 'react-player'
import { Footer } from 'components/footer/Footer';
import { graphql } from 'gatsby'
import { If, Then, Else, Switch, Case, Default } from 'react-if'
import { ScrollTo } from "react-scroll-to";

import { SmoothScrollbar } from 'smooth-scrollbar';
import Scrollbar from 'react-smooth-scrollbar';

import { TweenMax, TimelineMax, Power3} from "gsap";
import { Tween } from 'react-gsap';
import { TransitionState } from "gatsby-plugin-transition-link";

import s from './CrowdersWork.scss';

export default class Work extends React.Component {

  constructor(props){
    super(props);
    this.videoPreview = React.createRef();
    this.videoEmbed = React.createRef();    
    this.videoOverlay = React.createRef();    
    this.videoPlayer = React.createRef();     
    this.playVideo = this.playVideo.bind(this);  
    //this.handleClick= this.handleClick.bind(this);
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
    // Scrollbar.init(document.querySelector('#topper'));
    console.log("TO SCROLL", this.videoEmbed.current)
  }

  playVideo(){
    this.videoPreview.current.style.zIndex = -5;
    this.videoEmbed.current.style.zIndex = 10;    
    this.videoOverlay.current.style.visibility = 'hidden';
    this.setState({ playing: true },() => {
      console.log("PLAYING", this.state.playing)
    })
  }


  handleClick(){
    console.log("TO SCROLL X", this.videoEmbed.current)    
    
/*
    scrollbar.scrollIntoView(document.querySelector('#video'), {
      offsetLeft: 34,
      offsetBottom: 12,
      alignToTop: false,
      onlyScrollIfNeeded: true,
    }); 

*/

  }  

    render() {

  const { prev, next } = this.props.pageContext


  return (



      <TransitionState>
        {({ transitionStatus }) => {
          return (

            <>

            <Tween duration={2} 
            from={ ['entering'].includes(transitionStatus) ? false : { yPercent: 100, opacity: 1, ease: 'Power3.easeInOut' } } 
            to={ ['exiting'].includes(transitionStatus) ? { yPercent: -100, opacity: 1, ease: 'Power3.easeInOut' } : false  } >  

          
  <Scrollbar className="scrollbar" damping={0.1} renderByPixels={true} alwaysShowTracks={false} syncCallbacks={true}>   
    

<>
  <div id ="topper">
    <div className='wrapper'>
      <ReactCursorPosition className='fullscreen_cursor_position'>


        <Helmet title={this.props.data.gravCrowdersWork.title} />
        <div className={s.row}>

        <Heading className={s.column__col1_heading}>{this.props.data.gravCrowdersWork.heading_one}</Heading>
        <p className={s.paragraph}>{this.props.data.gravCrowdersWork.paragraph}</p>

          <div className={s.detail_wrapper}>
            <div className={s.row__threetop}> 
              <div className={s.column__col5}>
                <ScrollTo>
                  {({ scrollTo }) => (
                    <p onClick={ this.handleClick} className={s.control}>EXPLORE <img className={s.explore} src='../images/explore_arrow.png' /></p>                    
                  )}
                </ScrollTo>
              </div>
              <div className={s.column__col6}>
                <p onClick={ this.playVideo } className={s.control}>{'WATCH VIDEO'} <img className={s.explore} src='../images/video_play.png' /></p>
              </div>
            </div>

      

            <div className={s.row__threebot} ref={this.videoOverlay}>
              <div className={s.column__col7}>
                <img className={s.client_logo} src={ 'https://future.stratego.ba/en/crowders/work/'+ this.props.data.gravCrowdersWork.title.toLowerCase() + '/' + this.props.data.gravCrowdersWork.logo_light } />              
                <p className={s.award}>{this.props.data.gravCrowdersWork.title.toUpperCase()}</p>
                <h1 className={s.award_heading}>BEAUTY AND FUNCTION COMBINED</h1>
              </div>
            </div>
            <img src={ 'https://future.stratego.ba/en/crowders/work/'+ this.props.data.gravCrowdersWork.title.toLowerCase() + '/' + this.props.data.gravCrowdersWork.big_image } ref={this.videoPreview} className={s.fiat_img} />
            <div id="video" className={s.embedded_video} ref={this.videoEmbed}>
              <ReactPlayer controls ref={this.videoPlayer} url={this.props.data.gravCrowdersWork.video} playing={this.state.playing} />            
            </div>


          </div>
          <div className={s.row__four}>
            <div className={s.column__col8}>
            <Link to={'/bakery-work'}>
              <p className={s.control_dark}><span className={s.arrow_ml}>&lt;</span>&nbsp;&nbsp;ALL CASES</p>
            </Link>
            </div>

            <If condition={next}>
              <Then>
                <Link className={s.column__col9} to={next ? "/crowders-work/" + next.title.toLowerCase() : '/'}>
                  <p className={s.control_dark}>NEXT CASE</p>
                </Link>
              </Then>
              <Else>
                <div className={s.column__col9}>
                  <p className={s.control_dark}>&nbsp;</p>
                </div>
              </Else>              
            </If>


            <div className={s.column__col10}>
              <p className={s.control_dark_right}>START A PROJECT WITH US&nbsp;&nbsp;<span className={s.arrow_ml}>&gt;</span></p>
            </div>
          </div>
          <div className={s.row__five}>
            <div className={s.column__col11}>

                <Link className={s.column__col9} to={next ? "/crowders-work/" + next.title.toLowerCase() : '/'}>
                  <p className={s.topic}>{next ? next.title : ''}</p>
                </Link>

              
            </div>
            <div className={s.column__col12}>
              <p className={s.project}>This and much more we have already solved with a team of 25.000 friends from the crowd.</p>
            </div>
          </div>
        </div>
      </ReactCursorPosition>
    </div>
  </div>
  </>
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