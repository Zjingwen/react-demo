import React, {
  Component,
  useState,
} from 'react';
import Fieldset from '@Component/Fieldset';

class Time extends Component {
  componentDidMount() {
    console.log('ComponentDidMount');
  }

  render() {
    return (
      <p>{new Date().toString()}</p>
    );
  }
}

function ComponentDidMountComponent() {
  const [show, setShow] = useState(false);
  return (
    <Fieldset title='componentDidMount'>
      <input type='button' value='触发componentDidMount' onClick={()=>setShow(!show)} />
      { show && <Time />}
    </Fieldset>
  );
}

export default ComponentDidMountComponent;
