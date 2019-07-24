import * as React from 'react';
import s from './Heading.scss';

export class Heading extends React.Component {

  constructor(props){
    super(props);
  }

  componentDidMount(){


  }

  componentWillUnmount(){

  }

  render() {
    return(

            <h2 className={`${s.heading} ${this.props.className}`}>{this.props.children}</h2>
          )




  
}

}