import React from 'react';
import Fieldset from '@Component/Fieldset';

class SetStateComponent extends React.Component{
  state = {
    time: new Date().toString(),
  };
  
  static getDerivedStateFromProps(){
    console.log('getDerivedStateFromProps');
    return null;
  };

  shouldComponentUpdate(){
    console.log('shouldComponentUpdate')
    return true;
  };

  getSnapshotBeforeUpdate(){
    console.log('getSnapshotBeforeUpdate');
    return null;
  };

  componentDidUpdate(){
    console.log('componentDidUpdate');
  };

  handleClick(){
    this.setState({
      time: new Date().toString()
    });
  }

  render(){
    return (
      <Fieldset title='设置属性'>
        <input type='button' value='更新时间' onClick={()=>this.handleClick()} />
        <p>{this.state.time}</p>
        static getDerivedStateFromProps <br />
        | <br />
        shouldComponentUpdate <br />
        | <br />
        render <br />
        | <br />
        getSnapshotBeforeUpdate <br />
        | <br />
        componentDidUpdate <br />
      </Fieldset>
    )
  }
}

export default SetStateComponent;