import React from "react"
import Img from "gatsby-image"
import { StaticQuery, graphql } from "gatsby"
import { TransitionState } from "gatsby-plugin-transition-link";
import { Tween } from 'react-gsap'
import { Power3 } from "gsap/TweenMax";
import { Link } from 'components/link/Link';
import LinkArrow from 'assets/svg/link_arrow.svg'
import s from './Item.scss';

export class Item extends React.Component {

  constructor(props){
    super(props);
    this.state ={
      hover: this.props.hovered ? true : false,
    };
    this.toggleHoverLeave = this.toggleHoverLeave.bind(this);  
    this.toggleHoverEnter = this.toggleHoverEnter.bind(this);      
  }

  toggleHoverLeave() {

      if (this.props.hovered) {
        this.setState({hover: false});
      } else {
        this.setState({hover: !this.state.hover});
      }      

  }

  toggleHoverEnter() {


      if (this.props.hovered) {
        this.setState({hover: true});
      } else {
        this.setState({hover: !this.state.hover});
      }      

  }  


  componentDidMount(){
    

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
                  <Tween duration={2} delay={this.props.delay}
                  from={ ['entering'].includes(transitionStatus) ? false : {clipPath:'inset(0% 0% 100% 0%)', ease: 'Power2.easeOut', opacity: 0} } 
                  to={ ['exiting'].includes(transitionStatus) ? {clipPath:'inset(0% 0% 100% 0%)', ease: 'Power2.easeIn', opacity: 0 } : false } >
                    <div className={`${s.figure} ${this.props.className}`} onMouseEnter={this.toggleHoverEnter} onMouseLeave={this.toggleHoverLeave}>
                      <Tween duration={.2} to={ this.state.hover ? {ease: 'Power2.easeOut', clipPath:'inset(0.001% 0.002% 0.003% 0.005%)'} : {ease: 'Power2.easeOut', clipPath:'inset(0.001% 100% 0.003% -2%)'}} >
                        <img className={s.arrow} src={'../svg/work_arrow.svg'} />
                      </Tween>
                      <Tween duration={.2} to={ this.state.hover ? {ease: 'Power2.easeOut', opacity: 1} : {ease: 'Power2.easeOut',  opacity: 0}} >                      
                        <h4 className={s.arrow_heading}>Creative strategy</h4>     
                      </Tween>
                      <Tween duration={1} to={ this.state.hover ? { opacity: 1, delay: 1, ease: 'Power2.easeOut'} : {ease: 'Power2.easeOut',  opacity: 0, delay: .5}} >                               
                        <img className={s.client_logo} src='../images/client.png'/>
                      </Tween>
                      <Tween duration={1} to={ this.state.hover ? { opacity: 1, delay: 1, ease: 'Power2.easeOut'} : {ease: 'Power2.easeOut',  opacity: 0, delay: .5}} >                      
                        <h4 className={s.top_title}>FIAT 500X</h4>
                      </Tween>
                      <Tween duration={2} to={ this.state.hover ? {delay: 1, ease: 'Power2.easeOut', clipPath:'inset(0.001% 0.002% 0.003% 0.005%)'} : {delay: 1, ease: 'Power2.easeOut', clipPath:'inset(0.001% 100% 0.003% 0.004%)'}} >                      
                        <h2 className={s.client_title}>BEAUTY AND FUNCTION COMBINED</h2>
                      </Tween>
                      <Tween duration={1} to={ this.state.hover ? { opacity: 1, delay: 1, ease: 'Power2.easeOut'} : {ease: 'Power2.easeOut',  opacity: 0, delay: .5}} >  
                        <h3 className={s.client_more}><Link to={'/fiat-study'}>FIND OUT MORE <LinkArrow className="link_arrow"/></Link></h3>
                      </Tween>                      
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