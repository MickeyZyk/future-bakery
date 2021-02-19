import * as React from 'react';
import Helmet from 'react-helmet';
import ReactCursorPosition from 'react-cursor-position';
import TransitionLink from 'gatsby-plugin-transition-link'
import SVGicon from 'components/svgicon/SVGicon';
import SVGiconReverse from 'components/svgiconreverse/SVGiconReverse';
import { Link } from 'components/link/Link';
import { ExternalLink } from 'components/link/ExternalLink';
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
import axios from 'axios';

import SmoothScrollbar from 'smooth-scrollbar';
import Scrollbar from 'react-smooth-scrollbar';

import SimpleReactValidator from 'simple-react-validator';

export default class BakersClients extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      name: '',
      email: '',
      phone: '',
      company: '',
      ico: '',
      address: '',
      text: '',
      gdpr: '',
      terms: '',
      active: false
    };
    this.validator = new SimpleReactValidator({autoForceUpdate: this});
    this.submitForm = this.submitForm.bind(this);    
    this.toggleClass = this.toggleClass.bind(this); 
    this.handleChange = this.handleChange.bind(this); 
    this.form_message = 'SSS';
  } 

  handleChange = event => {
    //this.setState({ [e.target.name]: e.target.value })

    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });


  }

submitForm() {
  if (this.validator.allValid()) {
    //alert('You submitted the form!');
    const { name, email, phone, company, ico, address, text } = this.state;
    axios({
      method: 'post',
      url: 'https://bakerycorsproxy.herokuapp.com/https://futurebakers.com/app/api/query-form',
      data: { name, email, phone, company, ico, address, text },
      headers: {'Content-Type': 'application/x-www-form-urlencoded'}
    })
      .then((result) => {
          this.form_message = 'Děkujeme za objednávku!';
        console.log(result);
      });    
  } else {
    this.validator.showMessages();
    // rerender to show messages for the first time
    // you can use the autoForceUpdate option to do this automatically`
    this.form_message = 'Něco se pokazilo. Prosím zkuste to znovu!';
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

  <div className='wrapper no_overflow_x'>

      <ReactCursorPosition className='fullscreen_cursor_position'>

        <Helmet title="For Clients" />


          <Row> 

            <div className="crowders_about_first_left">

              <HeadingTwo className='for_clients_about_heading'>Našli jsme tisíce talentů, kteří jsou připraveni pomoct rozlousknout Váš problém nebo vymyslet nápady pro Váš byznys. Jen nápady nestačí a potřebujete píchnout i s analýzou, strategií nebo koncepcí? Dejte nám vědět.</HeadingTwo>   

              <AnimatedImage className='for_clients_image responsive_image show_on_mobile' src="../images/rocket.jpg" />         

              <Paragraph className='for_clients_about_paragraph paragraph'>Jen nápady nestačí a potřebujete píchnout i s analýzou, strategií nebo koncepcí? Dejte nám vědět.</Paragraph>

            </div>

            <AnimatedImage className='for_clients_image responsive_image hide_on_mobile' src="../images/rocket.jpg" />   


          </Row>

          <Row>
          <Location>
            {({ location }) => ( 

              <Link className="for_join_link_one" arrow bakers onClick={this.toggleClass} to={location.pathname}>POŠLETE ZADÁNÍ</Link>

            )}
          </Location>  
        
              <Paragraph className="for_divider_text_one">nebo</Paragraph>
              <Link bakers arrow className="for_brief_link_one" to={'/czbakerscontact'}>ZAVOLEJTE</Link>  

          </Row>  


          <Row>

          <HeadingTwo className={this.state.active ? 'for_clients_solution_heading_hidden' : 'for_clients_solution_heading'} >Hledáte nápady nebo komplexnější řešení pro vaše projekty? </HeadingTwo>


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
            <div className="bakers_about_steps_text" >Vyplňte formulář pro klienty.</div>
            <div className="bakers_about_steps_text" >Popište, s čím Vám můžeme pomoci.</div>
            <div className="bakers_about_steps_text" >Určete odměnu za vybraný nápad.</div>
            <div className="bakers_about_steps_text" >Probírejte se nápady od tvůrců.</div>
            <div className="bakers_about_steps_text" >Vyberte pro Vás ten nejlepší nápad.</div>
            <div className="bakers_about_steps_text" >Staňte se vlastníkem nápadu.</div>
        </Row> 


      </div>   

      <Row>
              <Location>
                {({ location }) => ( 

                  <Link className="for_join_link_two" button arrow bakers onClick={this.toggleClass} to={location.pathname} onClick={this.toggleClass}>Vyplnit formulář</Link>

                  )}
              </Location> 


          <Paragraph className="for_divider_text_two">nebo</Paragraph>
          <Link bakers arrow className="for_brief_link_two" to={'/bakerscontact'}>Zavolejte nám</Link>  

      </Row>  


        <SVGicon className={this.state.active ? 'clients_form_icon': 'clients_form_icon_hidden'} src='paper.svg' />   
        <div className={this.state.active ? 'clients_form_inside': 'clients_form'}>

        
         <img className="clients_form_arrow" src={'../svg/work_arrow.svg'} />
         <form className="clients_form_form" action="https://futurebakers.com/app/api/query-form" method="post">

          <Location>
            {({ location }) => ( 

              <LeftLink bakers arrow className="clients_form_link" onClick={this.toggleClass} to={location.pathname}>Zavřít</LeftLink>

            )}
          </Location>            
          <p>&nbsp;</p>
          <p>Jméno a přijmení</p>
          <input type="text" value={this.state.name} onChange={this.handleChange} name="name"/><br/>
          {this.validator.message('name', this.state.name, 'required')}<br/>
          <p>Email</p>
          <input type="email" value={this.state.email} onChange={this.handleChange} name="email"/><br/>
          {this.validator.message('email', this.state.email, 'email|required')}<br/>
          <p>Telefon</p>
          <input type="text" value={this.state.phone} onChange={this.handleChange} name="phone"/><br/><br/>          
          <p>Firma</p>
          <input type="text" value={this.state.company} onChange={this.handleChange} name="company"/><br/><br/>  
          <p>IČO</p>
          <input type="text" value={this.state.ico} onChange={this.handleChange} name="ico"/><br/><br/>   
          <p>Fakturační adresa</p>
          <input type="text" value={this.state.address} onChange={this.handleChange} name="address"/><br/><br/>   
          <p>Text objednávky</p>
          <textarea value={this.state.text} onChange={this.handleChange} rows="4" cols="50" name="text"/><br/><br/>
          <input id="gdpr" type="checkbox" checked={this.state.gdpr} onChange={this.handleChange} name="gdpr"/>
          <label htmlFor="gdpr"><span></span>Souhlas s <a href="https://futurebakers.wnh.cz/files/Podm%C3%ADnky%20zpracov%C3%A1n%C3%AD%20osobn%C3%ADch%20%C3%BAdaj%C5%AF.pdf" target="_blank"><strong style={{color: "#ff7a00"}}>GDPR</strong></a>..</label><br/>
          {this.validator.message('gdpr', this.state.gdpr, 'accepted')}<br/>
          <input id="terms" type="checkbox" checked={this.state.terms} onChange={this.handleChange} name="terms"/>
          <label htmlFor="terms"><span></span>Souhlasim s podminkami FutureBakery</label><br/>
          {this.validator.message('terms', this.state.terms, 'accepted')}
          <Location>
            {({ location }) => (
              <>
            <Row> 
              <Link className="clients_form_submit" button bakers arrow to={location.pathname} onClick={this.submitForm}><strong>ODESLAT</strong></Link>
            </Row>
            <Row>
              <p>{this.form_message}</p>
            </Row>
            <ExternalLink style="{marginTop: '1vw'}" className="clients_form_goto_top" orange bakers arrow to="https://futurebakers.com/files/terms/client/cs_CZ.pdf"><strong>VŠEOBECNÉ OBCHODNÍ PODMÍNKY PRO ZADAVATELE</strong></ExternalLink><br/>
            <ExternalLink style="{marginTop: '1vw'}" className="clients_form_goto_bottom" orange bakers arrow to="https://futurebakers.com/files/terms/creative/cs_CZ.pdf"><strong>VŠEOBECNÉ OBCHODNÍ PODMÍNKY PRO AUTORY</strong></ExternalLink>            
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

