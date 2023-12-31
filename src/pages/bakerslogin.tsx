import * as React from 'react';
import { graphql } from 'gatsby';
import Helmet from 'react-helmet';
import ReactCursorPosition from 'react-cursor-position';
import TransitionLink from 'gatsby-plugin-transition-link'
import SVGicon from 'components/svgicon/SVGicon';
import SVGiconReverse from 'components/svgiconreverse/SVGiconReverse';
import { Row } from 'components/row/Row';
import { Heading } from 'components/heading/Heading';
import { HeadingThree } from 'components/heading/HeadingThree';
import { Paragraph } from 'components/paragraph/Paragraph';
import Texticon from 'components/texticon/Texticon';
import { Link } from 'components/link/Link';
import { ExternalLink } from 'components/link/ExternalLink';
import { Footer } from 'components/footer/Footer';
import { Controller, Scene } from 'react-scrollmagic';
import LinkArrow from 'assets/svg/link_arrow.svg'
import SmoothScrollbar from 'smooth-scrollbar';
import Scrollbar from 'react-smooth-scrollbar';
import { ScrollTo } from "react-scroll-to";
import { Location } from '@reach/router';
import { TweenMax, TimelineMax, Power3} from "gsap";
import { Tween } from 'react-gsap';
import { TransitionState } from "gatsby-plugin-transition-link";

export default class bakersLogin extends React.Component { 

  constructor(props){
    super(props);
    //this.handleClick = this.handleClick.bind(this);    

  }

  componentDidMount(){

 
  }  
/*
  handleClick(){
  //console.log("ANCHOR" + document.querySelector('#video_image_anchor'))
    const { scrollbar } = this.$container;
    scrollbar.scrollIntoView(document.querySelector('#projects'), {
      alignToTop: true,
      onlyScrollIfNeeded: false,
    });
  }   
*/


  render() {


    return (


            <>


 <Scrollbar ref={c => this.$container = c} className="scrollbar" damping={0.1} renderByPixels={true} alwaysShowTracks={false} syncCallbacks={false}>



      <TransitionState>
        {({ transitionStatus }) => {
          return (



            <Tween duration={2} 
            from={ ['entering'].includes(transitionStatus) ? false : { yPercent: 100, opacity: 1, ease: 'Power3.easeInOut' } } 
            to={ ['exiting'].includes(transitionStatus) ? { yPercent: -100, opacity: 1, ease: 'Power3.easeInOut' } : false  } >  




    <div className='wrapper'>

        <ReactCursorPosition className='fullscreen_cursor_position'>

          <Helmet title='Login' />

            <div className='bakers_login__main'>

              <Row>

                      <Tween duration={2} 
                      from={ ['entering'].includes(transitionStatus) ? false : { yPercent: 100, opacity: 0, ease: 'Power3.easeInOut' } } 
                      to={ ['exiting'].includes(transitionStatus) ? { backgroundColor: '#222222', yPercent: -100, opacity: 1, ease: 'Power3.easeInOut' } : false  } >  


              <div className='bakers_login__main_image'>
                <img src="../images/planekid.jpg" />
              </div>



              <div className='bakers_login__main_header'>
                <h1>Let's create together - we reward the best </h1>
              </div>


              <div className='bakers_login__main_subheader'>
                <p>There are thousands of us who've done it. But there are still more people who need your ideas.</p>
              </div>
                  </Tween>

              <div className='bakers_login__main_login'>
                <ExternalLink className='bakers_login__main_login_link' gray arrow to={'https://futurebakers.com/cs/sign/in'}>LOGIN</ExternalLink>
              </div>

                <Row>
                 <ExternalLink className='bakers_login__main_joinus' bakers button gray arrow to={'https://futurebakers.com/cs/registrovat'}>JOIN US</ExternalLink>
                </Row>

              </Row>
              <Row>

                <ScrollTo>
                  {({ scrollTo }) => (


                  <Location>
                    {({ location }) => (             

                    <ExternalLink className='bakers_login__main_projects' to={'https://futurebakers.com/cs#projects'} >
                      CHECK OUT ACTUAL PROJECTS
                    </ExternalLink> 

                      )}
                  </Location> 


             
                  )}
                </ScrollTo>

                <ExternalLink arrow gray className='bakers_login__main_briefs' to={'https://futurebakers.com/cs/ukoncene'}>
                  CHECK OUT PREVIOUS PROJECTS
                </ExternalLink>

              </Row>

            </div>
          
            <div className='bakers_login__projects' id="projects">

              <Row>

<p>&nbsp;</p>


{/*

                  {this.props.data.allApiBakersLogin.edges.map(( i ) => (
                    <div className="bakers_login__projects_box" key={i.node.name}>


                      <Tween duration={2} 
                      from={ ['entering'].includes(transitionStatus) ? false : { yPercent: 100, opacity: 1, ease: 'Power3.easeInOut' } } 
                      to={ ['exiting'].includes(transitionStatus) ? { backgroundColor: '#222222', yPercent: -100, opacity: 1, ease: 'Power3.easeInOut' } : false  } >  


                          <div className="api_project_image" style={{backgroundImage: 'url(' + i.node.image + ')'}}></div>
                          <img src="../images/big arrow.png" className="bakers_login__projects_big_arrow"/>
                          <p className="bakers_login__projects_text_arrow">{i.node.reward}</p>
                          <HeadingThree className="bakers_login__projects_case_heading">{i.node.name}</HeadingThree>
                          <p>Ukonceny projektu <span className="black_text">{i.node.date}</span></p>
                          <ExternalLink className="api_projects_link"  button bakers arrow to={i.node.url}>ZAOBRAZIT PROJEKT</ExternalLink>



                      </Tween>



                    </div>

                  ))}


*/}


              </Row> 

            </div>
     

        </ReactCursorPosition>  

    </div>


            </Tween>

          )
        }}
      </TransitionState>


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



    )

  }


}



/*
export const ApiBakersLogin = graphql`
  query AllBakersLogin {
    allApiBakersLogin {
      edges {
        node {
          url
          reward
          name
          image
          date
        }
      }
    }
  }

`
*/



