import * as React from 'react';
import { graphql } from 'gatsby';
import Helmet from 'react-helmet';
import ReactCursorPosition from 'react-cursor-position';
import TransitionLink from 'gatsby-plugin-transition-link'
import SVGicon from 'components/svgicon/SVGicon';
import SVGiconReverse from 'components/svgiconreverse/SVGiconReverse';
import { Row } from 'components/row/Row';
import { Heading } from 'components/heading/Heading';
import { HeadingTwo } from 'components/heading/HeadingTwo';
import { Paragraph } from 'components/paragraph/Paragraph';
import Texticon from 'components/texticon/Texticon';
import { Link } from 'components/link/Link';
import { Footer } from 'components/footer/Footer';
import { Controller, Scene } from 'react-scrollmagic';


const BakersLogin = ({ data, className }) => {

  return (

  <div className='wrapper'>

      <ReactCursorPosition className='fullscreen_cursor_position'>

        <Helmet title='Login' />

          <div className='bakers_login__main'>

            <Row>

            <div className='bakers_login__main_image'>
              <img src="../images/planekid.jpg" />
            </div>


            <div className='bakers_login__main_header'>
              <h1>Vymýšlejte s námi nápady — odměnujeme ty nejlepší</h1>
            </div>


            <div className='bakers_login__main_subheader'>
              <p>Jsou nás tu tisíce, co to už udělali. Ale stále je více těch, kteří vaše nápady potřebují.</p>
            </div>


            <div className='bakers_login__main_login'>
              <p>login</p>
            </div>


            <div className='bakers_login__main_joinus'>
              <p>join us</p>
            </div>

            </Row>
            <Row>

              <div className='bakers_login__main_projects'>
                <p>CHECK OUT ACTUAL PROJECTS</p>
              </div>


              <div className='bakers_login__main_briefs'>
                <p>CHECK OUT OLD BRIEFS</p>
              </div>

            </Row>

          </div>
        


          <div className='bakers_login__projects'>

            <Row>
              <div className="bakers_login__projects_boxl">
                <img src="../images/rum.jpg" />
                <p>Recepty s Captain Morgan</p>
                <p>Ukonceny projektu 12.06.2019.</p>
                <p>zaobrazit projekt</p>
              </div>
              <div className="bakers_login__projects_boxr">
                <img src="../images/dogs.jpg" />
                <p>Some new brief headline</p>
                <p>Ukonceny projektu 23.08.2019.</p>
                <p>zaobrazit projekt</p>
              </div>
            </Row>  
            <Row>
              <div className="bakers_login__projects_boxl">
                <img src="../images/rum.jpg" />
                <p>Recepty s Captain Morgan</p>
                <p>Ukonceny projektu 12.06.2019.</p>
                <p>zaobrazit projekt</p>
              </div>
              <div className="bakers_login__projects_boxr">
                <img src="../images/dogs.jpg" />
                <p>Some new brief headline</p>
                <p>Ukonceny projektu 23.08.2019.</p>
                <p>zaobrazit projekt</p>
              </div>
            </Row>  
          </div>
   

      </ReactCursorPosition>  

  </div>

  )
}

export default BakersLogin