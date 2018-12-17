import React, {
  Component,
} from 'react';
import Fieldset from '@Component/Fieldset';

function ChildFunction() {
  return (
    <div>Child-function</div>
  );
};

class ChildComponent extends Component {
  render() {
    return (
      <div>Child-Component</div>
    );
  }
};

function IsValidElementComponent() {
  const D = React.createElement('div');

  return (
    <Fieldset title='isValidElement'>
      <p>createElement: {React.isValidElement(D).toString()}</p>
      <p>Function Component: {React.isValidElement(ChildFunction()).toString()}</p>
      <p>class Component: {React.isValidElement(<ChildComponent />).toString()}</p>
    </Fieldset>
  );
};

export default IsValidElementComponent;
