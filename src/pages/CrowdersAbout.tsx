import * as React from 'react';
import { graphql } from 'gatsby';
import Helmet from 'react-helmet';
import ReactCursorPosition from 'react-cursor-position';
import TransitionLink from 'gatsby-plugin-transition-link'
import SVGicon from 'components/svgicon/SVGicon';
import SVGiconReverse from 'components/svgiconreverse/SVGiconReverse';
import { Link } from 'components/link/Link';
import { Row } from 'components/row/Row';
import { Figure2 } from 'components/figure2/Figure2';
import { Split } from 'components/split/Split';
import { Heading } from 'components/heading/Heading';
import { HeadingTwo } from 'components/heading/HeadingTwo';
import { AnimatedHeading } from 'components/heading/AnimatedHeading';
import { AnimatedImage } from 'components/image/AnimatedImage';
import { Paragraph } from 'components/paragraph/Paragraph';
import Texticon from 'components/texticon/Texticon';
import { Footer } from 'components/footer/Footer';
import { Controller, Scene } from 'react-scrollmagic';


const BakeryAbout = ({ data, className }) => {
  return (

  <div className='wrapper'>

      <ReactCursorPosition className='fullscreen_cursor_position'>

        <Helmet title="About" />

        <SVGicon className='bakery_about__green_rainbow' src='green_rainbow.svg'  />
          <Row> 

          <AnimatedHeading className='crowders_about_heading'>About us</AnimatedHeading>         

          <AnimatedImage className='crowders_about_image' src='../images/crowders_cone.jpg' />    


            <Paragraph className='crowders_about_paragraph paragraph'>We are a team of thousands individuals strong in opinion and power to change things.
            We can address important topics / things in a way we are heard without having to be seen. 
            Future crowders are a part of Future Bakery family - a strategic and innovation group of thousand individuals, lead by experienced team of strategic, 
            creative and innovative minds. We work according to a validated methodology how to initiate change and create demand.</Paragraph>

            <Link className='crowders_button' to={'/'}>START A PROJECT WITH US&nbsp;&nbsp;<span>&gt;</span></Link>

          </Row>
      

        <div className="bakery_about__greenboard" style={{backgroundImage: `url(../images/how_we_do_it_image.jpg)`}}>

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

                <Texticon className='bakery_about__graph_icon' name='CAMPAIGN DEVELOPMENT &amp; PRODUCTION' src='gauge.svg' />

                <Texticon className='bakery_about__graph_icon last' name='COMMUNITY BUILDING' src='rainbow.svg' />

                <Texticon className='bakery_about__graph_icon first' name='CROWD SOURCING' src='fiver.svg' />

                <Texticon className='bakery_about__graph_icon' name='INNOVATION' src='bang.svg' />

                <Texticon className='bakery_about__graph_icon last' name='ANALYTICS &amp; ON-LINE COMMUNITY' src='phones.svg' />  
                 

            </div>          

      </Row>

      <Row className="bakery_about__row_four">
          <div className="bakery_about__column_four">

              <Split className="bakery_about__heading_four">Meet the team</Split>

              <Paragraph className="bakery_about__paragraph_four">Alena Pelcova</Paragraph>


          </div>


      </Row>

      </ReactCursorPosition>  

      

  </div>

  )
}

export const query = graphql`
  query BakersAboutPageQuery {
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