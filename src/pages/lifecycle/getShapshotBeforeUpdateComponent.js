import React, {
  Component,
  useState,
} from 'react';
import Fieldset from '@Component/Fieldset';

class Child extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...props,
    };
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.group('getSnapshotBeforeUpdate');
    console.log(prevProps);
    console.log(prevState);
    console.groupEnd();
    if (prevProps.time !== prevState.time) {
      this.setState({
        time: prevProps.time,
      });
    }
    return 'getSnapshotBeforeUpdate';
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.group('componentDidUpdate');
    console.log(prevProps);
    console.log(prevState);
    console.log(snapshot);
    console.groupEnd();
  }

  render() {
    return (
      <p>
        {this.state.time}
      </p>
    );
  }
}

function GetShapshotBeforeUpdateComponent() {
  const [time, setTime] = useState(new Date().toString());

  return (
    <Fieldset title='getShapshotBeforeUpdate'>
      <Child time={time} />
      <input type='button' value='更新时间' onClick={()=>setTime(new Date().toString())} />
    </Fieldset>
  );
}

export default GetShapshotBeforeUpdateComponent;
