import * as React from 'react';
import { graphql } from 'gatsby';
import Helmet from 'react-helmet';
import ReactCursorPosition from 'react-cursor-position';
import TransitionLink from 'gatsby-plugin-transition-link'
import SVGicon from 'components/svgicon/SVGicon';
import SVGiconReverse from 'components/svgiconreverse/SVGiconReverse';
import { Row } from 'components/row/Row';
import { Figure3 } from 'components/figure3/Figure3';
import { Figure4 } from 'components/figure4/Figure4';
import { Split } from 'components/split/Split';
import { Heading } from 'components/heading/Heading';
import { HeadingTwo } from 'components/heading/HeadingTwo';
import { Paragraph } from 'components/paragraph/Paragraph';
import Texticon from 'components/texticon/Texticon';
import { Link } from 'components/link/Link';
import { Footer } from 'components/footer/Footer';
import { Controller, Scene } from 'react-scrollmagic';


const BakersAbout = ({ data, className }) => {
  return (

  <div className='wrapper'>

      <ReactCursorPosition className='fullscreen_cursor_position'>

        <Helmet title="About" />

        <SVGicon className='bakers_about__talk_bubbles' src='talk_bubbles.svg'  /> 

        <Row>

          <div className='bakers_about__left_column_one'>

            <Split className='bakers_about__heading_one'>Who we are</Split>

            <Figure3 className="show_on_mobile"/>

            <Split className='bakers_about__heading_two'>A space for creative people with amazing ideas.</Split>      

            <Paragraph className='bakers_about__paragraph paragraph'>A safe place where those who are searching for the great idea meet with the ones that have them. And where they have access not just to one amazing idea, but to several of them. A place, where the idea creators – who we call BAKERS get rewarded if their idea is selected by the client. We are a constantly growing group of bakers and creative thinkers. We believe it is important to provide a space for ideas and wonderful creations. We want to give everybody a chance to contribute. We believe the more idea makers we have, the more we can all move forward.</Paragraph>
          </div>

          <Figure3 className="bakers_about__image_one hide_on_mobile dropped"/>

        </Row>

        <SVGicon className='bakers_about__brains' src='brains.svg'  /> 

        <Row>

          <div className='bakers_about__right_column_one'>

            <Figure4 className="show_on_mobile"/>

            <Split className='bakers_about__heading_three'>We are a group of enthusi- asts and passionate thinkers</Split>      

            <Paragraph className='bakers_we__paragraph paragraph'>We believe that a great idea can pop up anywhere: in a bar, during a wonderfully peaceful weekend, while running, before going to bed, while chatting with your loved one, from a student, retiree or stay-at-home mom or dad.</Paragraph>

            <Link to={'/'}>LEARN MORE&nbsp;&nbsp;<div className='more_arrow'>&gt;</div></Link>

          </div>

          <Figure4 className="bakers_about__image_one hide_on_mobile"/>

        </Row>     

        <Row>


            <div className="bakers_about__right_icons">


                <Texticon className='bakers_about__graph_icon' name='STRATEGIC PLANNING &amp; CONSULTANCY' src='asset 23.svg' />

                <Texticon className='bakers_about__graph_icon' name='IDEATION' src='asset 35.svg' />

                <Texticon className='bakers_about__graph_icon last' name='CREATIVE STRATEGY' src='asset 36.svg' />

                <Texticon className='bakers_about__graph_icon first' name='CAMPAIGN PLANNING' src='asset 38.svg' />

                <Texticon className='bakers_about__graph_icon' name='CAMPAIGN DEVELOPMENT &amp; PRODUCTION' src='asset 39.svg' />

                <Texticon className='bakers_about__graph_icon last' name='COMMUNITY BUILDING' src='asset 40.svg' />

                <Texticon className='bakers_about__graph_icon first' name='CROWD SOURCING' src='asset 41.svg' />

                <Texticon className='bakers_about__graph_icon' name='INNOVATION' src='asset 42.svg' />

                <Texticon className='bakers_about__graph_icon last' name='ANALYTICS &amp; ON-LINE COMMUNITY' src='asset 43.svg' />

                <Texticon className='bakers_about__graph_icon' name='INNOVATION' src='asset 44.svg' />

                 

            </div>       
 

      </Row>
      
      <div className="bakers_about__orange_heading_background">

          <Heading className="bakers_about__heading_three">Who is behind the scenes of Future Bakers?</Heading>     

      </div>  

      <div className="meet">

        <Row>
            <div className="bakers_about__column_four">

                <Split className="bakers_about__heading_four">Meet the team</Split>

                <Paragraph className="bakers_about__paragraph_four">Alena Pelcova</Paragraph>


            </div>


        </Row>

      </div>

      </ReactCursorPosition>  

      

  </div>

  )
}

export const query = graphql`
  query BakersAboutQuery {
    file(relativePath: { eq: "painter.jpg" }) {
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

export default BakersAbout