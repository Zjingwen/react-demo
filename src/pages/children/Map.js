import PropTypes from 'prop-types';
import React, {
  Component,
} from 'react';
import Fieldset from '@Component/Fieldset';

class Map extends Component {
  render() {
    const arr = React.Children.map(this.props.children, (v)=> v);

    return (
      <Fieldset title='map'>
        {arr}
      </Fieldset>
    );
  }
};
Map.propTypes = {
  children: PropTypes.node.isRequired,
};

function Index() {
  return (
    <Map>
      <p>A</p>
      <p>B</p>
      <p>C</p>
      <p>D</p>
      <p>E</p>
      <p>F</p>
    </Map>
  );
};

export default Index;
