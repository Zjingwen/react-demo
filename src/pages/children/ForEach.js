import PropTypes from 'prop-types';
import React, {
  Component,
} from 'react';
import Fieldset from '@Component/Fieldset';

class ForEach extends Component {
  render() {
    const arr = [];
    React.Children.forEach(this.props.children, (v) => arr.push(v));
    return (
      <Fieldset title='ForEach'>
        {arr}
      </Fieldset>
    );
  }
};
ForEach.propTypes = {
  children: PropTypes.node.isRequired,
};

function Index() {
  return (
    <ForEach>
      <p>A</p>
      <p>B</p>
      <p>C</p>
      <p>D</p>
      <p>E</p>
      <p>F</p>
    </ForEach>
  );
};

export default Index;
