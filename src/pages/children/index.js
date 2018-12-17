import React, {
  Component,
} from 'react';
import Map from './Map';
import ForEach from './ForEach';
import Count from './Count';
import Only from './Only';
import ToArray from './ToArray';

class ChildrenComponent extends Component {
  render() {
    return (
      <React.Fragment>
        <Map />
        <ForEach />
        <Count />
        <Only />
        <ToArray />
      </React.Fragment>
    );
  }
};

export default ChildrenComponent;
