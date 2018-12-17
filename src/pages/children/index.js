import React, {
  Component,
} from 'react';
import Fieldset from '@Component/Fieldset';
import Map from './Map';
import ForEach from './ForEach';
import Count from './Count';

class ChildrenComponent extends Component {
  render() {
    return (
      <Fieldset title='React.Children'>
        <Map />
        <ForEach />
        <Count />
      </Fieldset>
    );
  }
};

export default ChildrenComponent;
