import * as React from 'react';
import Helmet from 'react-helmet';
import { Heading } from 'components/heading/Heading';
import TransitionLink from 'gatsby-plugin-transition-link';
import ReactCursorPosition from 'react-cursor-position';
import SVGicon from 'components/svgicon/SVGicon';
import SVGiconReverse from 'components/svgiconreverse/SVGiconReverse';

import s from '../styles/fiat.scss';

export default () => (
  <>
    <div className='wrapper'>
      <ReactCursorPosition className='fullscreen_cursor_position'>
        <SVGicon className={s.work_details_no} src='work_details_no.svg'  />       
        <SVGiconReverse className={s.work_details_ok} src='work_details_ok.svg'  />         
        <Helmet title="Fiat" />
        <div className={s.row}>
          <div className={s.row__one}>
            <div className={s.column__col0}>
            	<div className={s.wrapper}>
      		      <img className={s.arrow} src={'../svg/work_arrow.svg'} />
      		      <h4 className={s.arrow_heading}>Creative strategy</h4>
      		    </div>
      	    </div>   
            <div className={s.column__col1}>
              <img className={s.client_logo} src={'../images/fiat.png'} />
              <h1 className={s.column__col1_heading}>How do you explain and sell the legal insurance to<br/>people that are afraid of lawyers and hate insurance houses?</h1>
            </div>
          </div>
          <div className={s.row__two}>
            <div className={s.column__col2}>
            	<p className={s.way}>one way</p>
              <p className={s.advice}>Tell the consumers about unique benefits of your product.</p>
            </div>
            <div className={s.column__col3}>
              <p className={s.way}>new way</p>      
              <p className={s.larger_advice}>How about not selling insurance, but “help the good” instead?</p>
            </div>
          </div>
          <div className={s.detail_wrapper}>
            <div className={s.row__threetop}> 
              <div className={s.column__col5}>
                <p className={s.control}>EXPLORE <img className={s.explore} src='../images/explore_arrow.png' /></p>
              </div>
              <div className={s.column__col6}>
                <p className={s.control}>WATCH VIDEO <img className={s.explore} src='../images/video_play.png' /></p>
              </div>
            </div>
            <div className={s.row__threebot}>
              <div className={s.column__col7}>
                <img className={s.client_logo} src='../images/client.png'/>              
                <p className={s.award}>AWARD: <span className={s.green}>FIAT 500X</span></p>
                <h1 className={s.award_heading}>BEAUTY AND FUNCTION COMBINED</h1>
              </div>
            </div>
            <img src="../images/fiat.jpg" className={s.fiat_img} />                
          </div>
          <div className={s.row__four}>
            <div className={s.column__col8}>
              <p>All cases</p>
            </div>
            <div className={s.column__col9}>
              <p>Next case</p>
            </div>
            <div className={s.column__col10}>
              <p>Start</p>
            </div>
          </div>
          <div className={s.row__five}>
            <div className={s.column__col11}>
              <p>How to make people think OF SERIOUS TOPICS?</p>
            </div>
            <div className={s.column__col12}>
              <p>This and much more we have already solved with a team of 25.000 friends from the crowd.</p>
            </div>
          </div>
        </div>
      </ReactCursorPosition>
    </div>
  </>
);
