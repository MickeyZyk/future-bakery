import * as React from 'react';
import { TransitionState } from "gatsby-plugin-transition-link";

import s from './MenuHeading.scss';

interface IIntroProps {
  children: React.ReactNode;
}

export const MenuHeading = ({ children, className, transitionStatus }: IIntroProps) => {

  return (

  	<h2 className={`${s.heading } ${className}`}>{children}</h2>

  )

};
