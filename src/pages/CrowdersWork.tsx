import * as React from 'react';
import Helmet from 'react-helmet';
import { Slider } from 'components/slider/Slider';
import { Heading } from 'components/heading/Heading';
import { CrowdersItem } from 'components/item/CrowdersItem';
import ReactDOM from 'react-dom';

export default class Work extends React.Component {


  constructor(props){
    super(props);
    this.hovered_item = React.createRef();    
      
  }	

	fireEvent(elementId, eventName) {
	  if(document.getElementById(elementId) != null) {   
	    if(document.getElementById(elementId).fireEvent) {
	      document.getElementById(elementId).fireEvent('on' + eventName);     
	    } else {   
	      var evObj = document.createEvent('Events');
	      evObj.initEvent(eventName, true, false);
	      document.getElementById(elementId).dispatchEvent(evObj);
	    }
	  }
	}

  componentDidMount(){
    
    var hovered = ReactDOM.findDOMNode(this.hovered_item.current);
    this.fireEvent(this.hovered_item.current, "mouseover"); 


  }

  render() {

    return (


  <>
    <Helmet title="About" />

    <div className='wrapper work-wrapper'>

      <CrowdersItem hovered='true' key='i01' ref={this.hovered_item} className='no1'/>
      <CrowdersItem key='i02' className='no2'/>
      <CrowdersItem key='i03' className='no3'/>
	    <CrowdersItem key='i04' className='no4'/>

    </div>

  </>

)

}



}
