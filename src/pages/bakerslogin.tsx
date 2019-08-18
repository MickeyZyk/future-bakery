import * as React from 'react';
import { graphql } from 'gatsby';
import Helmet from 'react-helmet';
import ReactCursorPosition from 'react-cursor-position';
import TransitionLink from 'gatsby-plugin-transition-link'
import SVGicon from 'components/svgicon/SVGicon';
import SVGiconReverse from 'components/svgiconreverse/SVGiconReverse';
import { Row } from 'components/row/Row';
import { Heading } from 'components/heading/Heading';
import { HeadingThree } from 'components/heading/HeadingThree';
import { Paragraph } from 'components/paragraph/Paragraph';
import Texticon from 'components/texticon/Texticon';
import { Link } from 'components/link/Link';
import { ExternalLink } from 'components/link/ExternalLink';
import { Footer } from 'components/footer/Footer';
import { Controller, Scene } from 'react-scrollmagic';
import LinkArrow from 'assets/svg/link_arrow.svg'
import SmoothScrollbar from 'smooth-scrollbar';
import Scrollbar from 'react-smooth-scrollbar';

export default class bakersLogin extends React.Component {

  constructor(props){
    super(props);

  }

  componentDidMount(){

    console.log(this.props.data.allApiBakersLogin.edges)

  }  



  render() {


    return (


 <Scrollbar className="scrollbar" damping={0.1} renderByPixels={true} alwaysShowTracks={false} syncCallbacks={false}>

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
                <Link gray arrow to={'/'}>LOGIN</Link>
              </div>



                <Row>
                 <Link className='bakers_login__main_joinus'bakers button gray arrow to={'/'}>JOIN US</Link>
                </Row>


              </Row>
              <Row>

                <Link arrow gray className='bakers_login__main_projects' to={'/'}>
                  CHECK OUT ACTUAL PROJECTS
                </Link>


                <Link arrow gray className='bakers_login__main_briefs' to={'/'}>
                  CHECK OUT OLD BRIEFS
                </Link>

              </Row>

            </div>
          
            <div className='bakers_login__projects'>

              <Row>

                  {this.props.data.allApiBakersLogin.edges.map(( i ) => (
                    <div className="bakers_login__projects_box" key={i.node.name}>
                      <div className="api_project_image" style={{backgroundImage: 'url(' + i.node.image + ')'}}></div>
                      <img src="../images/big arrow.png" className="bakers_login__projects_big_arrow"/>
                      <p className="bakers_login__projects_text_arrow">{i.node.reward}</p>
                      <HeadingThree className="bakers_login__projects_case_heading">{i.node.name}</HeadingThree>
                      <p>Ukonceny projektu <span className="black_text">{i.node.date}</span></p>
                      <ExternalLink className="api_projects_link"  button bakers arrow to={i.node.url}>ZAOBRAZIT PROJEKT</ExternalLink>
                    </div>

                  ))}

              </Row> 

            </div>
     

        </ReactCursorPosition>  

    </div>

 </Scrollbar>    

    )

  }


}

export const ApiBakersLogin = graphql`
  query AllBakersLogin {
    allApiBakersLogin {
      edges {
        node {
          url
          reward
          name
          image
          date
        }
      }
    }
  }

`