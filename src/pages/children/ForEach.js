import PropTypes from 'prop-types';
import React, {
  Component,
} from 'react';
import Fieldset from '@Component/Fieldset';

class ForEact extends Component {
  render() {
    const arr = [];
    React.Children.forEach(this.props.children, (v) => arr.push(v));
    return (
      <Fieldset title='ForEact'>
        {arr}
      </Fieldset>
    );
  }
};
ForEact.propTypes = {
  children: PropTypes.node.isRequired,
};

function Index() {
  return (
    <ForEact>
      <p>A</p>
      <p>B</p>
      <p>C</p>
      <p>D</p>
      <p>E</p>
      <p>F</p>
    </ForEact>
  );
};

export default Index;
