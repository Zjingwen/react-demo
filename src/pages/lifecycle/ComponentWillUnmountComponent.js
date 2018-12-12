import React, {
  Component,
  useState,
} from 'react';
import Fieldset from '@Component/Fieldset';

class Time extends Component {
  componentWillUnmount() {
    console.log('componentWillUnmount');
  }
  render() {
    return (
      <p>{new Date().toString()}</p>
    );
  };
}

function ComponentWillUnmountComponent() {
  const [show, setShow] = useState(true);
  return (
    <Fieldset title='componentWillUnmount'>
      <input type='button' value='触发componentWillUnmount' onClick={()=> setShow(!show)} />
      {show && <Time />}
    </Fieldset>
  );
}

export default ComponentWillUnmountComponent;
