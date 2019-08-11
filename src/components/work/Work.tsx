import * as React from 'react';
import ReactDOM from 'react-dom'
import Scrollbar from 'react-smooth-scrollbar';
import { SmoothScrollbar } from 'smooth-scrollbar';
import Helmet from 'react-helmet';
import { Heading } from 'components/heading/Heading';
import { HeadingTwo } from 'components/heading/HeadingTwo';
import { Link } from 'components/link/Link';
import { LeftLink } from 'components/link/LeftLink';
import ReactCursorPosition from 'react-cursor-position';
import SVGicon from 'components/svgicon/SVGicon';
import SVGiconReverse from 'components/svgiconreverse/SVGiconReverse';
import ReactPlayer from 'react-player'
import { Footer } from 'components/footer/Footer';
import { graphql } from 'gatsby'
import { If, Then, Else, Switch, Case, Default } from 'react-if'
import { ScrollTo } from "react-scroll-to";

import { TweenMax, TimelineMax, Power3} from "gsap";
import { Tween } from 'react-gsap';
import { TransitionState } from "gatsby-plugin-transition-link";

import s from './Work.scss';
const slug = require('slug')

export default class Work extends React.Component {

  constructor(props){
    super(props);
    this.myRef = React.createRef();
    this.videoPreview = React.createRef();
    this.videoEmbed = React.createRef();    
    this.videoOverlay = React.createRef();    
    this.videoPlayer = React.createRef();     
    this.playVideo = this.playVideo.bind(this);  
    this.handleClick = this.handleClick.bind(this);  
    this.scrollPlay= this.scrollPlay.bind(this);
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
      console.log("PLAYING", this.state.playing)
    })
  }


  handleClick(){
    console.log("ANCHOR" + document.querySelector('#video_image_anchor'))
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
    


  <div id ="topper" style={{overflowX: 'hidden'}}>
    <div className='wrapper' style={{overflowX: 'hidden'}}>
      <ReactCursorPosition className='fullscreen_cursor_position'>


        <SVGicon className={this.props.data.gravBakeryWork.one_way ? s.work_details_no : s.hidden} src='work_details_no.svg'  />       
        <SVGiconReverse className={this.props.data.gravBakeryWork.one_way ? s.work_details_ok : s.hidden } src='work_details_ok.svg'  /> 


        <Helmet title={this.props.data.gravBakeryWork.title} />
        <div className={s.row}>
          <div className={s.row__one}>


            <TransitionState>
              {({ transitionStatus, ...props }) => {
                return (

                  <>

                  <Tween duration={2} 
                  from={ ['entering'].includes(transitionStatus) ? false : { yPercent: 100, opacity: 0, ease: 'Power3.easeInOut' } } 
                  to={ ['exiting'].includes(transitionStatus) ? { yPercent: -100, opacity: 0, ease: 'Power3.easeInOut'} : false  } >
                  <div className={s.column__col0}>
                    <div className={s.wrapper}>
                      <img className={s.arrow} src={'../svg/work_arrow.svg'} />
                      <h4 className={s.arrow_heading}>Creative Strategy</h4>
                    </div>
                  </div> 

                  </Tween>

                  </>

                )
              }}
            </TransitionState>


            <div className={s.column__col1}>


            <TransitionState>
              {({ transitionStatus, ...props }) => {
                return (

                  <>

                  <Tween duration={2} 
                  from={ ['entering'].includes(transitionStatus) ? false : { yPercent: 100, opacity: 0, ease: 'Power3.easeInOut' } } 
                  to={ ['exiting'].includes(transitionStatus) ? { yPercent: -100, opacity: 0, ease: 'Power3.easeInOut'} : false  } >
              

                    <img className={s.client_logo} src={ 'https://future.stratego.ba/en/bakery/work/'+ slug(this.props.data.gravBakeryWork.title.toLowerCase()) + '/' + this.props.data.gravBakeryWork.logo_dark } />


                  </Tween>

                  </>

                )
              }}
            </TransitionState>            

              <HeadingTwo className={s.column__col1_heading}>{this.props.data.gravBakeryWork.heading_one}</HeadingTwo>
            </div>
          </div>

              <If condition={() => this.props.data.gravBakeryWork.one_way}>
                  <Then>



      <TransitionState>
        {({ transitionStatus, ...props }) => {
          return (

            <>

            <Tween duration={2} 
            from={ ['entering'].includes(transitionStatus) ? false : { yPercent: 100, opacity: 0, ease: 'Power3.easeInOut' } } 
            to={ ['exiting'].includes(transitionStatus) ? { yPercent: -100, opacity: 0, ease: 'Power3.easeInOut'} : false  } >



                    <div className={s.row__two}>
                      <div className={s.column__col2}>
                        <p className={s.way}>one way</p>
                        <p className={s.advice}>{this.props.data.gravBakeryWork.one_way}</p>
                      </div>
                      <div className={s.column__col3}>
                        <p className={s.way}>new way</p>      
                        <p className={s.larger_advice}>{this.props.data.gravBakeryWork.new_way}</p>
                      </div>
                    </div>





            </Tween>

            </>

          )
        }}
      </TransitionState>




                  </Then>
              </If>


          <div id="video_image_anchor" className={s.detail_wrapper}>
            <div className={s.row__threetop}> 
              <div className={s.column__col5}>
                <ScrollTo>
                  {({ scrollTo }) => (
                    <p onClick={ this.handleClick } className={s.control}>EXPLORE <img className={s.explore} src='../images/explore_arrow.png' /></p>                    
                  )}
                </ScrollTo>
              </div>

              <If condition={this.props.data.gravBakeryWork.video != 'null'}>
                <Then>              
                  <div className={s.column__col6}>
                    <p onClick={ this.scrollPlay } className={s.control}>{'WATCH VIDEO'} <img className={s.explore} src='../images/video_play.png' /></p>
                  </div>
                </Then>
              </If>
            </div>

      <TransitionState>
        {({ transitionStatus, ...props }) => {
          return (

            <>

            <Tween duration={2} 
            from={ ['entering'].includes(transitionStatus) ? false : { yPercent: 100, opacity: 0, ease: 'Power3.easeInOut' } } 
            to={ ['exiting'].includes(transitionStatus) ? { yPercent: -100, opacity: 0, ease: 'Power3.easeInOut'} : false  } >

            <div className={s.row__threebot} ref={this.videoOverlay}>
              <div className={s.column__col7}>
                <img className={s.client_logo} src={ 'https://future.stratego.ba/en/bakery/work/'+ slug(this.props.data.gravBakeryWork.title.toLowerCase()) + '/' + this.props.data.gravBakeryWork.logo_light } />              
                <p className={s.award}>{this.props.data.gravBakeryWork.category ? this.props.data.gravBakeryWork.category : ' '}<span className={s.green}>{this.props.data.gravBakeryWork.category_name ? this.props.data.gravBakeryWork.category_name : ' '}</span></p>
                <h1 className={s.award_heading}>{this.props.data.gravBakeryWork.heading_two}</h1>
              </div>
            </div>
            </Tween>

          </>

        )
      }}
    </TransitionState>              
            
            <img id="video_image" src={ 'https://future.stratego.ba/en/bakery/work/'+ slug(this.props.data.gravBakeryWork.title.toLowerCase()) + '/' + this.props.data.gravBakeryWork.big_image } ref={this.videoPreview} className={s.fiat_img} />
              


            <div id="video" className={s.embedded_video} ref={this.videoEmbed}>
              <ReactPlayer controls ref={this.videoPlayer} url={this.props.data.gravBakeryWork.video} playing={this.state.playing} />            
            </div>





          </div>
          <div className={s.row__four}>
            <div className={s.column__col8}>
            <LeftLink gray arrow to={'/bakery-work'}>
              <p className={s.control_dark}>ALL CASES</p>
            </LeftLink>
            </div>

            <div className={s.column__col9}>
              <p className="bold">NEXT CASE</p>
            </div>

            <div className={s.column__col10}>
                <Link className="bakery_work_start_link" gray arrow to={next ? "/bakery-work/" + slug(next.title.toLowerCase()) : '/'}>
                  <p className={s.control_dark}>START A PROJECT WITH US</p>
                </Link>
            </div>
          </div>


          <div className={s.row__five}>
            <Link gray className={s.column__col11} to={next ? "/bakery-work/" + slug(next.title.toLowerCase()) : '/'}>
              <p className={s.topic}>{next ? next.title : ''}</p>
            </Link>
            <div className={s.column__col12}>
              <p className={s.project}>This and much more we have already solved with a team of 25.000 friends from the crowd.</p>
            </div>
          </div>
        </div>
      </ReactCursorPosition>
    </div>
  </div>


  <Footer/>  


</Scrollbar>

      <TransitionState>
        {({ transitionStatus, ...props }) => {
          return (

            <>

            <Tween duration={2} 
            from={ ['entering'].includes(transitionStatus) ? false : { yPercent: 100, opacity: 1, ease: 'Power3.easeInOut' } } 
            to={ ['exiting'].includes(transitionStatus) ? { backgroundColor: '#222222', yPercent: -100, opacity: 1, ease: 'Power3.easeInOut'} : false  } >  

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
  query BakeryWorkQueryByTitle($id: String!) {
    gravBakeryWork(id: {eq: $id}) {
      big_image
      category
      category_name
      heading_one
      heading_two
      logo_dark
      logo_light
      new_way
      one_way
      title
      video
      id
    }
  }

`