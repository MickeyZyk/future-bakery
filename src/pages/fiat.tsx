import * as React from 'react';
import Helmet from 'react-helmet';
import { Heading } from 'components/heading/Heading';
import TransitionLink from 'gatsby-plugin-transition-link';

import s from '../styles/fiat.scss';

export default () => (
  <>

	<div className='wrapper'>
	    <Helmet title="Fiat" />
	    <div className={s.row}>
	        <div className={s.row__one}>
	            <div className={s.column__col1}>
	                <p>How do you explain and sell the legal insurance to people that are afraid of lawyers and hate insurance houses?</p>
	            </div>
	        </div>
	        <div className={s.row__two}>
	            <div className={s.column__col2}>
	                <p>Tell the consumers about unique benefits of your product.</p>
	            </div>
	            <div className={s.column__col3}>
	                <p>How about not selling insurance, but “help the good” instead?</p>
	            </div>
	        </div>
	        <div className={s.row__threetop}>
	            <div className={s.column__col5}>
	                <p>Explore</p>
	            </div>
	            <div className={s.column__col6}>
	                <p>Watch video</p>
	            </div>
	        </div>
	        <div className={s.row__threebot}>
	            <div className={s.column__col7}>
	                <p>Award</p>
	            </div>
	        </div>
	        <div className={s.row__threeimg}>
	            <div className={s.column__col4}>
	                <img src="../images/fiat.jpg" className={s.fiat_img} />
	            </div>
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
	                <p>This and much more we have already solved with a team of 25.000 friends 
	from the crowd.</p>
	            </div>
	        </div>
	    </div>
	</div>

  </>
);
