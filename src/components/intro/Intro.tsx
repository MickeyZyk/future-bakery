import * as React from 'react';
import { Container } from 'components/container/Container';
import { Row } from 'components/row/Row';
import { Tween, Controls } from 'react-gsap'
import { Power2 } from "gsap/TweenMax";
import { TransitionState } from "gatsby-plugin-transition-link";
import s from './Intro.scss';

interface IIntroProps {
  children: React.ReactNode;
}

export const Intro = ({ children, delay }: IIntroProps) => {
  return (


    <TransitionState>
      {({ transitionStatus }) => {
        return (
          <Tween 
          from={ ['entering'].includes(transitionStatus) ? false : {clipPath:'inset(0% 0% 100% 0%)', yPercent: 200, ease: 'Power2.easeOut', delay: delay } } 
          to={ ['exiting'].includes(transitionStatus) ? { clipPath:'inset(0% 0% 100% 0%)', yPercent: 200, ease: 'Power2.easeIn', delay: delay } : false } >
            <div className={s.intro}>
              <Row>
                <div className={s.intro__col}>
                  <p className={s.intro__text}>
                    {children}
                  </p>
                </div>
              </Row>
            </div>
          </Tween>
        )
      }}
    </TransitionState>
  );
};
