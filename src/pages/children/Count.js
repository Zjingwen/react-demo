import PropTypes from 'prop-types';
import React, {
  Component,
} from 'react';
import Fieldset from '@Component/Fieldset';

class Count extends Component {
  render() {
    const count = React.Children.count(this.props.children, (v)=> v);

    return (
      <Fieldset title='count'>
        {count}
      </Fieldset>
    );
  }
};
Count.propTypes = {
  children: PropTypes.node.isRequired,
};

function Index() {
  return (
    <Count>
      <p>A</p>
      <p>B</p>
      <p>C</p>
      <p>D</p>
      <p>E</p>
      <p>F</p>
    </Count>
  );
};

export default Index;
