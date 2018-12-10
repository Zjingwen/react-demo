import React from 'react';
import Fieldset from '@Component/Fieldset';

class ForceUpdateComponent extends React.Component{
  state = {};

  static getDerivedStateFromProps(){
    console.log('getDerivedStateFromProps');
    return true;
  };

  getSnapshotBeforeUpdate(){
    console.log('getShapshotBeforeUpdate');
    return null;
  };

  componentDidUpdate(){
    console.log('componentDidUpdate');
  }

  render(){
    console.log('render')
    return(
      <Fieldset title='forecUpdate更新'>
        <input type='button' value='触发forecUpdae' onClick={()=>this.forceUpdate()} /> <br/>
        static getDerivedStateFromProps <br/>
        | <br/>
        getShapshotBeforeUpdate <br/>
        | <br/>
        componentDidUpdate <br/>
      </Fieldset>
    )
  }
}

export default ForceUpdateComponent;