import React from "react"
import Img from "gatsby-image"
import { StaticQuery, graphql } from "gatsby"
import { TransitionState } from "gatsby-plugin-transition-link";
import { Tween } from 'react-gsap'
import { Power3 } from "gsap/TweenMax";
import s from './Item.scss';

export class Item extends React.Component {

  constructor(props){
    super(props);
    this.state ={
      hover: false,
    };
    this.toggleHover = this.toggleHover.bind(this);    
  }

  toggleHover() {
    this.setState({hover: !this.state.hover},
    () => console.log(this.state.hover));
  }

  render() {

    return (

      <>
        <StaticQuery
          query={graphql`
              query ImagesQuery{
                colorImage: file(relativePath: { eq: "fiat_color.jpg" }) {
                  childImageSharp {
                    fluid(maxWidth: 2000, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
                bwImage: file(relativePath: { eq: "fiat_bw.jpg" }) {
                  childImageSharp {
                    fluid(maxWidth: 2000, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            ` 
          }
          render={data => (
            <TransitionState>
              {({ transitionStatus }) => {
                return (
                  <Tween duration={1} delay={1} 
                  from={ ['entering','entered'].includes(transitionStatus) ? {clipPath:'inset(0% 0% 100% 0%)', ease: 'Power3.easeOut', opacity: 1}: false } 
                  to={ ['exiting','exited'].includes(transitionStatus) ? {clipPath:'inset(0% 0% 100% 0%)', ease: 'Power3.easeIn', opacity: 0 } : false } >
                    <div className={s.figure} onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover}>
                    { ['entering','entered'].includes(transitionStatus) ? 'true' : 'false' } { ['exiting','exited'].includes(transitionStatus) ? 'true' : 'false' }
                      <img style={this.state.hover ? {opacity: 1}:{opacity:0}} className={s.arrow} src={'../svg/work_arrow.svg'} />
                      <Img style={this.state.hover ? {opacity:0}:{opacity:1}} fluid={data.bwImage.childImageSharp.fluid} className={s.bw} />                        
                      <Img fluid={data.colorImage.childImageSharp.fluid} className={s.color}/>
                    </div>
                  </Tween>                   
                )
              }}
            </TransitionState>
          )}
        />
      </> 

    )

  }

}