import React, {
  Component,
  useState,
} from 'react';
import Fieldset from '@Component/Fieldset';

class Flow extends Component {
  constructor() {
    super();
    this.state = {};
  };

  static getDerivedStateFromProps() {
    console.group('触发传递新的props');
    console.log('getDevivedStateFromProps');
    return null;
  };

  shouldComponentUpdate() {
    console.log('shouldComponentUpdate');
    return true;
  };

  getSnapshotBeforeUpdate() {
    console.log('getSnapshotBeforeUpdate');
    return null;
  };

  componentDidUpdate() {
    console.log('componentDidUpdate');
    console.groupEnd();
  };

  render() {
    console.log('render');
    return (
      <React.Fragment>
        <p>{this.props.title}</p>
        <p>
          static getDevivedStateFromPorps <br />
          | <br />
          shouldComponentUpdate <br />
          | <br />
          getSnapshotBeforeUpdate <br />
          | <br />
          componentDidUpdate
        </p>
      </React.Fragment>
    );
  }
};

function NewpropsComponent() {
  const [time, setTime] = useState(new Date().toString());

  return (
    <Fieldset title='传递新的props'>
      <input type='button' value='触发传递新的props' onClick={()=>setTime(new Date().toString())} />
      <Flow title={time} />
    </Fieldset>
  );
};

export default NewpropsComponent;
