import React from 'react';
import Hoc from './hoc';
import ForwardRef from './forwardRef';

function IndexComponent() {
  return (
    <React.Fragment>
      <ForwardRef />
      <Hoc />
    </React.Fragment>
  );
}

export default IndexComponent;
