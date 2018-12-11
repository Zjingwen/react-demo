import React, {
  Component,
  useState,
} from 'react';
import Fieldset from '@Component/Fieldset';

class Count extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  };

  static getDerivedStateFromProps(props) {
    return {count: props.count*2};
  };

  render() {
    return (
      <React.Fragment>
        <p>Count-Child-state: {this.state.count}</p>
        <p>Count-Child-props: {this.props.count}</p>
      </React.Fragment>
    );
  }
};

class Time extends Component {
  constructor(props) {
    super(props);
    this.state={
      ...this.props,
    };
  };

  static getDerivedStateFromProps(props, state) {
    console.log(state);
    return null;
  };

  handleClick() {
    this.setState({
      time: new Date().toString(),
    });
  }

  render() {
    const {time} = this.state;
    return (
      <React.Fragment>
        <input type='button' value='setState触发 详情看log' onClick={()=>this.handleClick()} />
        <p>{time}</p>
      </React.Fragment>
    );
  };
};

function GetDerivedStateFromPropsComponent() {
  const [count, setCount] = useState(0);
  const [time] = useState(new Date().toString());

  return (
    <Fieldset title='getDerivedStateFromProps'>
      <input type='button' value='new props ++' onClick={()=>setCount((s)=>s+1)} />
      <Count count={count} />
      <Time time={time} />
    </Fieldset>
  );
};

export default GetDerivedStateFromPropsComponent;
