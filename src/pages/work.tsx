import * as React from 'react';
import Helmet from 'react-helmet';
import { Slider } from 'components/slider/Slider';
import { Heading } from 'components/heading/Heading';
import { Item } from 'components/item/Item';

export default class Work extends React.Component {


  constructor(props){
    super(props);
    this.hovered_item = React.createRef();    
      
  }	

triggerRippleHover() {
  // https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent
  const event = new MouseEvent('mouseover', {
    view: window,
    bubbles: true,
    cancelable: true
  })

  // https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/dispatchEvent  
  console.log(this.hovered_item.current)
  //this.hovered_item.current.dispatchEvent(event)
}	

  componentDidMount(){
    
    this.triggerRippleHover(); 

  }

  render() {

    return (


  <>
    <Helmet title="About" />

    <div className='wrapper'>

      <Item key='i01' ref={this.hovered_item} className='no1'/>
      <Item key='i02' className='no2'/>
      <Item key='i03' className='no3'/>
	  <Item key='i04' className='no4'/>

    </div>

  </>

)

}



}
