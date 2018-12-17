import PropTypes from 'prop-types';
import React, {
  Component,
} from 'react';
import Fieldset from '@Component/Fieldset';

class ToArray extends Component {
  render() {
    const arr = React.Children.toArray(this.props.children);

    return (
      <Fieldset title='toArray'>
        <p>isArray: {Array.isArray(arr).toString()}</p>
        {arr}
      </Fieldset>
    );
  }
};
ToArray.propTypes = {
  children: PropTypes.node.isRequired,
};

function Index() {
  return (
    <ToArray>
      <p>A</p>
      <p>B</p>
      <p>C</p>
      <p>D</p>
      <p>E</p>
      <p>F</p>
    </ToArray>
  );
};

export default Index;
