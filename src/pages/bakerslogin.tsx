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
              <h1>Vymýšlejte s námi nápady - odměnujeme ty nejlepší</h1>
            </div>


            <div className='bakers_login__main_subheader'>
              <p>Jsou nás tu tisíce, co to uz udelali. Ale stále je více tech, kterí vase nápady potrebují.</p>
            </div>


            <div className='bakers_login__main_login'>
              <p>LOGIN&nbsp;&nbsp;<span>&gt;</span></p>
            </div>


            <div className='bakers_login__main_joinus'>
              <p>JOIN US&nbsp;&nbsp;<span>&gt;</span></p>
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
              <div className="bakers_login__projects_box_l">
                <img src="../images/rum.jpg" />
                <img src="../images/big arrow.png" className="bakers_login__projects_big_arrow"/>
                <p className="bakers_login__projects_text_arrow">3 x 3,000 CZK</p>
                <p>Recepty s Captain Morgan</p>
                <p>Ukonceny projektu 12.06.2019.</p>
                <p>zaobrazit projekt</p>
              </div>
              <div className="bakers_login__projects_box_r">
                <img src="../images/dogs.jpg" />
                <img src="../images/big arrow.png" className="bakers_login__projects_big_arrow"/>
                <p className="bakers_login__projects_text_arrow">3 x 3,000 CZK</p>
                <p>Some new brief headline</p>
                <p>Ukonceny projektu 23.08.2019.</p>
                <p>zaobrazit projekt</p>
              </div>
            </Row>  
            <Row>
              <div className="bakers_login__projects_box_l">
                <img src="../images/rum.jpg" />
                <img src="../images/big arrow.png" className="bakers_login__projects_big_arrow"/>
                <p className="bakers_login__projects_text_arrow">3 x 3,000 CZK</p>
                <p>Recepty s Captain Morgan</p>
                <p>Ukonceny projektu 12.06.2019.</p>
                <p>zaobrazit projekt</p>
              </div>
              <div className="bakers_login__projects_box_r">
                <img src="../images/dogs.jpg" />
                <img src="../images/big arrow.png" className="bakers_login__projects_big_arrow"/>
                <p className="bakers_login__projects_text_arrow">3 x 3,000 CZK</p>
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