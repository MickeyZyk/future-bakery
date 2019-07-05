import * as React from 'react';

import { Container } from 'components/container/Container';
import { Row } from 'components/row/Row';

import { Tween } from 'react-gsap'
import { TransitionState } from "gatsby-plugin-transition-link";

import s from './BlockText.scss';

interface IBlockTextProps {
  heading: string;
  description: React.ReactNode;
}

export const BlockText = ({ heading, description }: IBlockTextProps) => (

    <TransitionState>
      {({ transitionStatus }) => {
        return (

           <Container>

              <Tween from={ ['entering'].includes(transitionStatus) ? false : {clipPath:'inset(0% 0% 1000% 0%)'} } to={ ['exiting'].includes(transitionStatus) ? {clipPath:'inset(0% 0% 100% 0%)'} : false } >

              <div className={s.block}>
                <Row>
                  <div className={s.block__col}>
                    <h3 className={s.block__heading}>{heading}</h3>
                    <p className={s.block__description}>{description}</p>
                  </div>
                </Row>
              </div>


          </Tween>

            </Container>




        )
      }}
    </TransitionState>


);
