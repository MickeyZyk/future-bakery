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
import { Team } from 'components/team/Team';


const BakeryAbout = ({ data, className }) => {
  return (

  <div className='wrapper'>

      <ReactCursorPosition className='fullscreen_cursor_position'>

        <Helmet title={data.gravCrowdersAbout.title} />

        <SVGicon className='crowders_icecream' src='crowders_icecream.svg'  />
        <SVGiconReverse className='crowders_cheese' src='crowders_cheese.svg' />        

          <Row> 

            <div className="crowders_about_first_left">

              <AnimatedHeading className='crowders_about_heading'>{data.gravCrowdersAbout.heading_one}</AnimatedHeading>   

              <AnimatedImage className='crowders_about_image responsive_image show_on_mobile' src={data.gravCrowdersAbout.image_one} />         

              <Paragraph className='crowders_about_paragraph paragraph'>{data.gravCrowdersAbout.paragraph_one}</Paragraph>

              <Link className='crowders_about_button' to={data.gravCrowdersAbout.link_one}>{data.gravCrowdersAbout.link_one_text}&nbsp;&nbsp;<span>&gt;</span></Link>            

            </div>

            <AnimatedImage className='crowders_about_image responsive_image hide_on_mobile' src={data.gravCrowdersAbout.image_two} />   


          </Row>
      

        <div className="crowders_about_blueboard" style={{backgroundImage: `url(../images/how_we_do_it_image.jpg)`}}>

          <Row>

            <Heading className='crowders_about_heading_two'>{data.gravCrowdersAbout.heading_two}</Heading>  

          </Row>

          <Row>

            <Paragraph className="crowders_about_paragraph_two">{data.gravCrowdersAbout.subheading_two}</Paragraph>

          </Row>

          <Row>

          <div className='crowders_phases_row'>

            <div className='crowders_phase_column'>

              <img src='../svg/crowders_arrowz.svg' />

              <Paragraph>CHANGE THEME IDENTIFICATION</Paragraph>

            </div>

            <div className='crowders_phase_column arrow_column'>

              <img src='../images/crowders_about_down_arrow.png' />


            </div>

            <div className='crowders_phase_column'>

              <img src='../svg/crowders_turntable.svg' />

              <Paragraph>THEME/TOPIC AMPLIFICATION</Paragraph> 

            </div>

            <div className='crowders_phase_column arrow_column'>

              <img src='../images/crowders_about_up_arrow.png' />


            </div>

            <div className='crowders_phase_column'>

              <img src='../svg/crowders_tablet.svg' />

              <Paragraph>COMMUNITY BUILD UP</Paragraph>

            </div>

            <div className='crowders_phase_column arrow_column'>

              <img src='../images/crowders_about_down_arrow.png' />


            </div>

            <div className='crowders_phase_column'>

              <img src='../svg/crowders_clipboard.svg' />

              <Paragraph>DEMAND AND CONTENT</Paragraph>

            </div>                                                

          </div>




          </Row>

          <Row>

            <Link className="crowders_about_button_two" to={'/'} >START A PROJECT WITH US</Link>

          </Row>

        </div>



        <Row>



            <div className="crowders_about_heading_background">

              <Heading className="crowders_about_heading_three">What we do</Heading>     

              <AnimatedImage src="../images/nail_sharpener.jpg" className="crowders_about_middle_image" />                 

            </div>



              <div className="crowders_about_right_icons">

                  <Texticon className='bakery_about__graph_icon first' name='COMMUNITY BUILDING' src='rainbow.svg' />

                  <Texticon className='bakery_about__graph_icon' name='STRATEGIC PLANNING &amp; CONSULTANCY' src='graph.svg' />

                  <Texticon className='bakery_about__graph_icon last' name='CREATIVE STRATEGY' src='target.svg' />

              </div> 

              <div className="crowders_about_right_icons">


                  <Texticon className='bakery_about__graph_icon first' name='CAMPAIGN PLANNING' src='network.svg' />

                  <Texticon className='bakery_about__graph_icon' name='CAMPAIGN DEVELOPMENT &amp; PRODUCTION' src='gauge.svg' />
                  
                  <Texticon className='bakery_about__graph_icon last' name='IDEATION' src='bulb.svg' />

              </div>





      </Row>

              <Team/>      

      </ReactCursorPosition>   

      

  </div>

  )
}


export const CrowdersAboutquery = graphql`
  query CrowdersAboutPageQuery {
    gravCrowdersAbout {
      heading_one
      heading_three
      heading_two
      image_one
      image_two
      link_one
      link_one_text
      link_two
      link_two_text
      paragraph_one
      subheading_two
      title
      svg_icons_two {
        svg_two
        svg_text_two
      }
      svg_icons {
        svg_text
        svg
      }
    }    
  }
`

export default BakeryAbout