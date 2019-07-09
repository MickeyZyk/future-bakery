import React, { Component, useState, useEffect } from "react";
import ReactDOM from "react-dom";
import SplitText from "utils/SplitText.min.js";
import useLayoutEffect from 'utils/use-isomorphic-layout-effect';
import s from './Split.scss';
import { TweenMax, Power3 } from "gsap/all";
import { Tween, SplitWords, SplitLetters  } from 'react-gsap';
import { TransitionState } from "gatsby-plugin-transition-link";

console.clear();

export const Split = ({ children, className, transitionStatus, entry, exit }) => {

  return (

    <TransitionState>
      {({ transitionStatus }) => {

        return (

          <h2 className={`${s.split} ${className}`}>

            <Tween
              staggerFrom={ ['entering'].includes(transitionStatus) ? false : { opacity: 0, color: '#fff', yPercent: 200, rotationX: 65 } }
              staggerTo={ ['exiting'].includes(transitionStatus) ? { opacity: 0, color: '#fff', yPercent: 200, rotationX: -65} : false }
              stagger={0.15}
              duration={1}
              ease={Power3.easeInOut}
            >

                  <SplitWords><div>{children}</div></SplitWords>

            </Tween>

          </h2>

        )

      }}
    </TransitionState>

  );
};