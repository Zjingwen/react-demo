import React, {
  Component,
} from 'react';
import Fieldset from '@Component/Fieldset';
import Map from './Map';
import ForEach from './ForEach';

class ChildrenComponent extends Component {
  render() {
    return (
      <Fieldset title='React.Children'>
        <Map />
        <ForEach />
      </Fieldset>
    );
  }
};

export default ChildrenComponent;
