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


const BakersLoginDal = ({ data, className }) => {

  return (

  <div className='wrapper'>

      <ReactCursorPosition className='fullscreen_cursor_position'>

        <Helmet title='Login' />

          <div className='bakers_login__main'>

            <Row>

              <div className='bakers_login__main_image'>
                <img src="../images/planekid.jpg" />
              </div>

              <img src="../images/form arrow.png" className="bakers_login_form__form_arrow"/>

              <div className='bakers_login_dal__main_header'>
                <h1>Staňte se součástí největší kreativní komunity u nás</h1>
              </div>


              <div className='bakers_login_dal__form'>
                <p>BACK</p>
                <p>REGISTUJ SE PRES FACEBOOK</p>
                <p>nebo</p>
                <p>Jméno</p>
                <p>Prijmeni</p>
                <p>E-mail</p>
                <p>Heslo</p>
                <p>Heslo znovu</p>
                <p>Souhlasim.....GDPR text.........</p>
              </div>

            </Row>

          </div>

      </ReactCursorPosition>  

  </div>

  )
}

export default BakersLoginDal