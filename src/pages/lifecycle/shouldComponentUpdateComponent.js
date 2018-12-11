import React,{
  Component,
  useState,
} from 'react';
import Fieldset from '@Component/Fieldset';

class Time extends Component{
  shouldComponentUpdate(nextPorps){
    if(this.props.time !== nextPorps.time){
      console.group('shouldComponent-props');
      console.log(nextPorps);
      console.log(this.props);
      console.groupEnd();
      return true;
    }
    return false;
  };
  
  render(){
    return(
      <React.Fragment>
        {this.props.time}
      </React.Fragment>
    )
  }
};

function ShuldComponentUpdateComponent() {
  const [time,setTime] = useState(new Date().toString());

  return(
    <Fieldset title='shuldComponentUpdate'>
      <input type='button' value='new Props' onClick={()=>setTime(new Date().toString())} />
      <Time time={time}/>
    </Fieldset>
  )
};

export default ShuldComponentUpdateComponent;