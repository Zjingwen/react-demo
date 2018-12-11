import React, {
  Component,
  useState,
} from 'react';
import Fieldset from '@Component/Fieldset';

class Flow extends Component {
  constructor() {
    super();
    this.state = {};
    console.group('初始化阶段');
    console.log('constructor');
  };

  static getDerivedStateFromProps() {
    console.log('getDerivedStateFromProps');
    return null;
  };

  componentDidMount() {
    console.log('componentDidMount');
    console.groupEnd();
  };

  render() {
    console.log('render');
    return (
      <React.Fragment>
        constructor<br />
        |<br />
        static getDerivedStateFromProps()<br />
        |<br />
        render<br />
        |<br />
        componentDidMount<br />
      </React.Fragment>
    );
  };
}


function MountingComponent() {
  const [show, setShow] = useState(false);

  return (
    <Fieldset title='初始化阶段'>
      <input type='button' value='查看初始化阶段，详情看log' onClick={()=>setShow(!show)} />
      {show && <Flow />}
    </Fieldset>
  );
};

export default MountingComponent;
