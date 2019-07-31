import * as React from 'react';
import { graphql } from 'gatsby';
import Helmet from 'react-helmet';
import ReactCursorPosition from 'react-cursor-position';
import TransitionLink from 'gatsby-plugin-transition-link'
import SVGicon from 'components/svgicon/SVGicon';
import SVGiconReverse from 'components/svgiconreverse/SVGiconReverse';
import { Row } from 'components/row/Row';
import { Figure } from 'components/figure/Figure';
import { Figure2 } from 'components/figure2/Figure2';
import { AnimatedHeading  } from 'components/heading/AnimatedHeading';
import { AnimatedHeadingTwo  } from 'components/heading/AnimatedHeadingTwo';
import { Heading } from 'components/heading/Heading';
import { HeadingTwo } from 'components/heading/HeadingTwo';
import { Paragraph } from 'components/paragraph/Paragraph';
import { Team } from 'components/team/Team';
import { Clients } from 'components/clients/Clients';
import Texticon from 'components/texticon/Texticon';
import { Footer } from 'components/footer/Footer';


const BakeryAbout = ({ data, className, query }) => {
  return (

  <div className='wrapper'>

      <ReactCursorPosition className='fullscreen_cursor_position'>

        <Helmet title="About us" />

        <SVGicon className='bakery_about__green_rainbow' src='green_rainbow.svg'  /> 

        <Row>

          <div className='bakery_about__left_column_one'>

            <AnimatedHeading className='__heading_one'>{data.gravBakeryPages.heading_one}</AnimatedHeading>  

            <Figure2 className="show_on_mobile"/>

            <Paragraph className='bakery_about__paragraph paragraph'>{data.gravBakeryPages.paragraph_one}</Paragraph>      

          </div>

          <Figure src={ 'http://admin.aptours.ba/en/bakery/about-us/' + data.gravBakeryPages.image_one } className="bakery_about__image_one hide_on_mobile"/>

        </Row>

        <div className="bakery_about__greenboard" style={{backgroundImage: `url(../images/greenboard.jpg)`}}>

          <Row>

            <HeadingTwo className="bakery_about__heading_two">Our creation process “From people to people”</HeadingTwo>

            <img src="../images/mobile_company.png" className="bakery_about__white_company show_on_mobile" />   

            <div className="bakery_about__green_block">

              <p className="bakery_about__green_text">Usual closed innovation process “From office desks to people”</p>

              <TransitionLink className="bakery_about__green_link" to={'/'} exit={{ length: 1 }} entry={{ delay: 1 }}>SHOW ME&nbsp;&nbsp;&#10095;</TransitionLink>

            </div>

          </Row>

          <img src="../images/company.png" className="bakery_about__white_company hide_on_mobile" />

          <Row className="centered-row">

            <TransitionLink className="bakery_about__button_link" to={'/'} exit={{ length: 1 }} entry={{ delay: 1 }}>START A PROJECT WITH US</TransitionLink>

          </Row>

        </div>

        <SVGicon className='bakery_about__white_hearts' src='white_hearts.svg' />

        <SVGiconReverse className='bakery_about__white_pan' src='white_pan.svg' />        

        <Row>

            <div className="bakery_about__green_heading_background">

              <AnimatedHeadingTwo className="bakery_about__heading_three">What we bake?</AnimatedHeadingTwo>     

            </div>

            <div className="bakery_about__right_icons">
              <div><Texticon className='bakery_about__graph_icon' name='STRATEGIC PLANNING &amp; CONSULTANCY' src='graph.svg' /></div>
              <div><Texticon className='bakery_about__graph_icon' name='IDEATION' src='bulb.svg' /></div>
              <div><Texticon className='bakery_about__graph_icon last' name='CREATIVE STRATEGY' src='target.svg' /></div>
              <div><Texticon className='bakery_about__graph_icon first' name='CAMPAIGN PLANNING' src='network.svg' /></div>
              <div><Texticon className='bakery_about__graph_icon' name='CAMPAIGN DEVELOPMENT &amp; PRODUCTION' src='gauge.svg' /></div>
              <div><Texticon className='bakery_about__graph_icon last' name='COMMUNITY BUILDING' src='rainbow.svg' /></div>
              <div><Texticon className='bakery_about__graph_icon first' name='CROWD SOURCING' src='fiver.svg' /></div>
              <div><Texticon className='bakery_about__graph_icon' name='INNOVATION' src='bang.svg' /></div>
              <div><Texticon className='bakery_about__graph_icon last' name='ANALYTICS &amp; ON-LINE COMMUNITY' src='phones.svg' /></div>
            </div>          

      </Row>

      
      <SVGicon className='bakery_about_chef' src='bakery_about_chef.svg' />
      <SVGiconReverse className='bakery_about_soldier' src='bakery_about_soldier.svg' />  
      <AnimatedHeadingTwo className="bakers_about_team_heading">Meet the team</AnimatedHeadingTwo>
      <div className="bakery_team">
        <Team />
      </div>

      
      <div style={{backgroundImage: "url('../images/clients_bck.png')"}} className="bakery_about_clients_background">

        <AnimatedHeadingTwo className="bakery_about_clients_heading">Whom we bake with</AnimatedHeadingTwo>
        <Clients className="bakery_about_clients"/>

      </div>      
      

      </ReactCursorPosition>  


  </div>

  )
}

export const BakeryAboutquery = graphql`
  query BakeryAboutPageQuery {
    gravBakeryPages {
      heading_one
      paragraph_one
      image_one
    }    
  }
`

export default BakeryAbout