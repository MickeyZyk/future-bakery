import * as React from 'react';

import TransitionLink from 'gatsby-plugin-transition-link'

import s from './SliderControls.scss';

interface IHeaderProps {
  children: React.ReactNode;
}

export const SliderControls = ({ children }: IHeaderProps) => (
  <div className={s.slider}>
    <TransitionLink activeClassName="active" to="/" className={s.slider__link} exit={{ length: 1 }} entry={{ delay: 1 }}>        
      <div className={s.slider__control}></div>
    </TransitionLink>
    <TransitionLink activeClassName="active" to="/" className={s.slider__link} exit={{ length: 1 }} entry={{ delay: 1 }}>        
      <div className={s.slider__control}></div>
    </TransitionLink>        
    <TransitionLink activeClassName="not_active" to="/" className={s.slider__link} exit={{ length: 1 }} entry={{ delay: 1 }}>        
      <div className={s.slider__control}></div>
    </TransitionLink>
    <TransitionLink activeClassName="not_active" to="/" className={s.slider__link} exit={{ length: 1 }} entry={{ delay: 1 }}>        
      <div className={s.slider__control}></div>
    </TransitionLink>   
    <TransitionLink activeClassName="not_active" to="/" className={s.slider__link} exit={{ length: 1 }} entry={{ delay: 1 }}>        
      <div className={s.slider__control}></div>
    </TransitionLink>  
  </div>
);
