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

        <Helmet title="About" />

        <SVGicon className='crowders_icecream' src='crowders_icecream.svg'  />
        <SVGiconReverse className='crowders_cheese' src='crowders_cheese.svg' />        

          <Row> 

            <div className="crowders_about_first_left">

              <AnimatedHeading className='crowders_about_heading'>About us</AnimatedHeading>   

              <AnimatedImage className='crowders_about_image responsive_image show_on_mobile' src='../images/crowders_cone.jpg' />         

              <Paragraph className='crowders_about_paragraph paragraph'>We are a team of thousands individuals strong in opinion and power to change things.
              We can address important topics / things in a way we are heard without having to be seen. 
              Future crowders are a part of Future Bakery family - a strategic and innovation group of thousand individuals, lead by experienced team of strategic, 
              creative and innovative minds. We work according to a validated methodology how to initiate change and create demand.</Paragraph>

              <Link className='crowders_about_button' to={'/'}>START A PROJECT WITH US&nbsp;&nbsp;<span>&gt;</span></Link>            

            </div>

            <AnimatedImage className='crowders_about_image responsive_image hide_on_mobile' src='../images/crowders_cone.jpg' />   


          </Row>
      

        <div className="crowders_about_blueboard" style={{backgroundImage: `url(../images/how_we_do_it_image.jpg)`}}>

          <Row>

            <Heading className='crowders_about_heading_two'>How we do it</Heading>  

          </Row>

          <Row>

            <Paragraph className="crowders_about_paragraph_two">There are 4 key phases to demonstrate our method to create demand.</Paragraph>

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



export default BakeryAbout