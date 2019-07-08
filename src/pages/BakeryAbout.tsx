import * as React from 'react';
import { graphql } from 'gatsby';
import Helmet from 'react-helmet';
import ReactCursorPosition from 'react-cursor-position';
import TransitionLink from 'gatsby-plugin-transition-link'
import SVGicon from 'components/svgicon/SVGicon';
import SVGiconReverse from 'components/svgiconreverse/SVGiconReverse';
import { Row } from 'components/row/Row';
import { Figure2 } from 'components/figure2/Figure2';
import { Split } from 'components/split/Split';
import { Heading } from 'components/heading/Heading';
import { HeadingTwo } from 'components/heading/HeadingTwo';
import { Paragraph } from 'components/paragraph/Paragraph';
import Texticon from 'components/texticon/Texticon';


const BakeryAbout = ({ data, className }) => {
  return (

  <div className='wrapper'>

      <ReactCursorPosition className='fullscreen_cursor_position'>

        <Helmet title="About" />

        <SVGicon className='bakery_about__green_rainbow' src='green_rainbow.svg'  /> 

        <Row>

          <div className='bakery_about__left_column_one'>

            <Split className='__heading_one'>One way or new way.</Split>

            <Figure2 className="show_on_mobile"/>

            <Paragraph className='bakery_about__paragraph paragraph'>We have liaised top creative and strategic minds with creativity, life experience and levity of thousands people from the crowd. People who don’t sit in the office or development centre, but have a real life… with real problems and needs. We link ideas and insights, trends or strategies. We look for future. We seek diversity, new perspective and link together what seems incompatible. We listen and get inspired by the crowd. We look into numbers but do not make the average. We regularly check “temperature” to know what people really feel. We want to know what our future will look like and we want to participate on it. We help individuals as well as organizations to find their place in the future. We fuel the brands with relevant product and experience concepts, offer a fresh perspective on your business and ideate original campaign ideas.</Paragraph>      

          </div>

          <Figure2 className="bakery_about__image_one hide_on_mobile"/>

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

              <Heading className="bakery_about__heading_three">What we bake?</Heading>     

            </div>

            <div className="bakery_about__right_icons">


                <Texticon className='bakery_about__graph_icon' name='STRATEGIC PLANNING &amp; CONSULTANCY' src='graph.svg' />

                <Texticon className='bakery_about__graph_icon' name='IDEATION' src='bulb.svg' />

                <Texticon className='bakery_about__graph_icon last' name='CREATIVE STRATEGY' src='target.svg' />

                <Texticon className='bakery_about__graph_icon first' name='CAMPAIGN PLANNING' src='network.svg' />

                <Texticon className='bakery_about__graph_icon' name='IDEATION' src='gauge.svg' />

                <Texticon className='bakery_about__graph_icon last' name='IDEATION' src='rainbow.svg' />

                <Texticon className='bakery_about__graph_icon first' name='IDEATION' src='fiver.svg' />

                <Texticon className='bakery_about__graph_icon' name='IDEATION' src='bang.svg' />

                <Texticon className='bakery_about__graph_icon last' name='IDEATION' src='phones.svg' />  
                 

            </div>          

      </Row>


      </ReactCursorPosition>  
  

  </div>

  )
}

export const query = graphql`
  query HomePageQuery {
    file(relativePath: { eq: "desk.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid(maxWidth: 1600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default BakeryAbout