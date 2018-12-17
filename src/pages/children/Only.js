import PropTypes from 'prop-types';
import React, {
  Component,
} from 'react';
import Fieldset from '@Component/Fieldset';

class Only extends Component {
  render() {
    const {title} = this.props;

    let e = null;
    let o = null;

    try {
      o = React.Children.only(this.props.children);
    } catch (error) {
      e = error;
    };
    return (
      <Fieldset title={title}>
        {e && Object.keys(e).map((v) => e[v])}
        {o}
      </Fieldset>
    );
  }
};
Only.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
};

function Index() {
  return (
    <React.Fragment>
      <Only title='not-Only'>
        <p>A</p>
        <p>B</p>
        <p>C</p>
        <p>D</p>
        <p>E</p>
        <p>F</p>
      </Only>
      <Only title='Only'>
        <p>A</p>
      </Only>
    </React.Fragment>
  );
};

export default Index;
