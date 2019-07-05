import React, { Component } from "react";
import { TimelineMax, TweenMax, TweenLite } from "gsap/TweenMax";
import { SplitText } from "imports-loader?define=>false!utils/SplitText.min.js";

export class Slider extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // eslint-disable-next-line
    const mySplit = new SplitText("h1, p", {
      type: "lines"
    });

    TweenMax.staggerFrom(
      mySplit.lines,
      1,
      {
        yPercent: 125,
        opacity: 0
      },
      0.25
    );
  }

  render() {
    return (
      <div className="split">
        <h1>Hello CodeSandbox</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione quas
          aliquid sint id ullam molestiae vero cum dolore. Tenetur, iusto.
        </p>
      </div>
    );
  }
}