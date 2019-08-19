import * as React from 'react';
import Helmet from 'react-helmet';
import ReactCursorPosition from 'react-cursor-position';
import TransitionLink from 'gatsby-plugin-transition-link'
import SVGicon from 'components/svgicon/SVGicon';
import SVGiconReverse from 'components/svgiconreverse/SVGiconReverse';
import { Link } from 'components/link/Link';
import { LeftLink } from 'components/link/LeftLink';
import { Row } from 'components/row/Row';
import { Figure2 } from 'components/figure2/Figure2';
import { Split } from 'components/split/Split';
import { Heading } from 'components/heading/Heading';
import { HeadingTwo } from 'components/heading/HeadingTwo';
import { HeadingFour } from 'components/heading/HeadingFour';
import { AnimatedHeading } from 'components/heading/AnimatedHeading';
import { AnimatedHeadingTwo } from 'components/heading/AnimatedHeadingTwo';
import { AnimatedImage } from 'components/image/AnimatedImage';
import { Paragraph } from 'components/paragraph/Paragraph';
import Texticon from 'components/texticon/Texticon';
import { Footer } from 'components/footer/Footer';
import { Controller, Scene } from 'react-scrollmagic';
import LinkArrow from 'assets/svg/link_arrow.svg'
import { Team } from 'components/team/Team';
import { Location } from '@reach/router';
import { TweenMax, TimelineMax, Power3} from "gsap";
import { Tween } from 'react-gsap';
import { TransitionState } from "gatsby-plugin-transition-link";

import SmoothScrollbar from 'smooth-scrollbar';
import Scrollbar from 'react-smooth-scrollbar';

import SimpleReactValidator from 'simple-react-validator';

export default class BakersClients extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      email: '',
      active: false
    };
    this.validator = new SimpleReactValidator({autoForceUpdate: this});
    this.submitForm = this.submitForm.bind(this);    
    this.toggleClass = this.toggleClass.bind(this);      
  } 

  handleChange = e => {
    this.setState({ email: e.target.value })
  }

submitForm() {
  if (this.validator.allValid()) {
    alert('You submitted the form!');
  } else {
    this.validator.showMessages();
    // rerender to show messages for the first time
    // you can use the autoForceUpdate option to do this automatically`
    this.forceUpdate();
  }
}

    toggleClass() {
        const currentState = this.state.active;
        this.setState({ active: !currentState });
    };


  render() {


  return (


      <TransitionState>
        {({ transitionStatus }) => {
          return (

            <>

            <Tween duration={2} 
            from={ ['entering'].includes(transitionStatus) ? false : { yPercent: 100, opacity: 1, ease: 'Power3.easeInOut' } } 
            to={ ['exiting'].includes(transitionStatus) ? { yPercent: -100, opacity: 1, ease: 'Power3.easeInOut' } : false  } >  



    <Scrollbar className="scrollbar" damping={0.1} renderByPixels={true} alwaysShowTracks={false} syncCallbacks={false}>   

  <div className='wrapper'>

      <ReactCursorPosition className='fullscreen_cursor_position'>

        <Helmet title="For Clients" />


          <Row> 

            <div className="crowders_about_first_left">

              <HeadingTwo className='for_clients_about_heading'>We found thousands of creative people, who are ready to help you solve your problem, or find a direction for your business.</HeadingTwo>   

              <AnimatedImage className='for_clients_image responsive_image show_on_mobile' src="../images/rocket.jpg" />         

              <Paragraph className='for_clients_about_paragraph paragraph'>This is where you can submit your brief and generate wonderful ideas. We can provide additional services among others analysis of the ideas, creation of a strategy or plan of action. You can let us know, what exactly you need from Future Bakers.</Paragraph>

            </div>

            <AnimatedImage className='for_clients_image responsive_image hide_on_mobile' src="../images/rocket.jpg" />   


          </Row>

          <Row>

              <Link className="for_join_link_one" arrow bakers to={'/bakerscontact'}>BRIEF US</Link>
              <Paragraph className="for_divider_text_one">or simply</Paragraph>
              <Link bakers arrow className="for_brief_link_one" to={'/bakerscontact'}>CALL US</Link>  

          </Row>  


          <Row>

          <HeadingTwo className="for_clients_solution_heading">Looking for ideas or a solution to a problem? </HeadingTwo>


          </Row>



      <div className="for_clients_icon_wrapper">

        <Row className="clients_about_steps">
          <div className="bakers_about_numbers_first">1</div>
          <div className="bakers_about_arrows"><img src="../svg/process_arrow.svg"/></div>
          <div className="bakers_about_numbers">2</div>
          <div className="bakers_about_arrows"><img src="../svg/process_arrow.svg"/></div>
          <div className="bakers_about_numbers">3</div>
          <div className="bakers_about_arrows"><img src="../svg/process_arrow.svg"/></div>
          <div className="bakers_about_numbers">4</div>
          <div className="bakers_about_arrows"><img src="../svg/process_arrow.svg"/></div> 
          <div className="bakers_about_numbers">5</div>
          <div className="bakers_about_arrows"><img src="../svg/process_arrow.svg"/></div> 
          <div className="bakers_about_numbers">6</div>
        </Row>

        <Row className="clients_about_steps_two">
            <img className="bakers_about_step_icons" src="../svg/register.svg" />       
            <img className="bakers_about_step_icons" src="../svg/location.svg" />       
            <img className="bakers_about_step_icons" src="../svg/gold.svg" />       
            <img className="bakers_about_step_icons" src="../svg/eye.svg" />       
            <img className="bakers_about_step_icons" src="../svg/podium.svg" />       
            <img className="bakers_about_step_icons" src="../svg/owner.svg" />       
        </Row>

        <Row className="clients_about_steps_three">


            <div className="bakers_about_steps_text" >Fill out our Client Contact Form</div>
            <div className="bakers_about_steps_text" >Make a detailed description of the problem or the task in hand (we can help you with this)</div>
            <div className="bakers_about_steps_text" >Set up the reward</div>
            <div className="bakers_about_steps_text" >Check out all the ideas from the contributors</div>
            <div className="bakers_about_steps_text" >Pick the best one</div>
            <div className="bakers_about_steps_text" >Become the owner of one</div>                                                            

         </Row> 


      </div>   

      <Row>


              <Location>
                {({ location }) => ( 

                  <Link className="for_join_link_two" button arrow bakers to={location.pathname} onClick={this.toggleClass}>FILL OUT THE FORM</Link>

                  )}
              </Location> 


          <Paragraph className="for_divider_text_two">or simply</Paragraph>
          <Link bakers arrow className="for_brief_link_two" to={'/bakerscontact'}>CALL US</Link>  

      </Row>  


        <SVGicon className={this.state.active ? 'clients_form_icon': 'clients_form_icon_hidden'} src='paper.svg' />   
        <div className={this.state.active ? 'clients_form_inside': 'clients_form'}>

          <HeadingFour className="clients_form_heading">Call to action headline for a form.</HeadingFour>
          <Location>
            {({ location }) => ( 
              <LeftLink bakers arrow className="clients_form_link" onClick={this.toggleClass} to={location.pathname}>CLOSE</LeftLink>
            )}
          </Location>           
         <img className="clients_form_arrow" src={'../svg/work_arrow.svg'} />
         <form className="clients_form_form">

          <p>Jméno</p>
          <input type="text" name="name"/><br/><br/>
          <p>Kontakt</p>
          <input type="email" value={this.state.email} onChange={this.handleChange} name="contact"/><br/>
          {this.validator.message('email', this.state.email, 'email')}<br/>
          <p>Fakturační údaje</p>
          <input type="text" name="invoice"/><br/><br/>  
          <p>Text objednávky</p>
          <textarea rows="4" cols="50" name="text"/><br/><br/>
          <input id="individual" type="checkbox" name="user" value="Individual"/>
          <label htmlFor="individual"><span></span>Souhlasim.....GDPR text.........</label>
          <Location>
            {({ location }) => (
              <>
            <Row> 
              <Link className="clients_form_submit" button bakers arrow to={location.pathname} onClick={this.submitForm}><strong>ODESLAT</strong></Link>
            </Row>
            <Link className="clients_form_goto" bakers arrow to={location.pathname}><strong>VŠEOBECNÉ OBCHODNÍ PODMÍNKY PRO ZADAVATELE</strong></Link>
            </>
            )}
          </Location>  

         </form>
        </div>


      </ReactCursorPosition>   


        </div>


<Footer/>
</Scrollbar>



            </Tween>

            <Tween duration={2} 
            from={ ['entering'].includes(transitionStatus) ? false : { yPercent: 100, opacity: 1, ease: 'Power3.easeInOut' } } 
            to={ ['exiting'].includes(transitionStatus) ? { backgroundColor: '#222222', yPercent: -100, opacity: 1, ease: 'Power3.easeInOut' } : false  } >  

              <div className='fulscreen_white' style={{zIndex: -1, backgroundColor: '#ffffff', position: 'absolute', width: '100vw', height: '100vh', top: 0, bottom: 0, left: 0, right: 0}}></div>

            </Tween>

            </>

          )
        }}
      </TransitionState>


  )


 }


}

