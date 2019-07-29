import * as React from 'react';
import s from './Row.scss';



export class Row extends React.Component {

  constructor(props){
    super(props);
  }

  render() {
    return(

            <div className={`${s.row} ${this.props.className ? this.props.className : '' }`}>{this.props.children}</div>
          )

	}

}