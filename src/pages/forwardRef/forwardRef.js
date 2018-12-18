import propTypes from 'prop-types';
import React, {
  Component,
} from 'react';
import Fieldset from '@Component/Fieldset';

function Input(props) {
  const {forwardRef} = props;
  return (
    <input type='input' defaultValue='输入框' ref={forwardRef} />
  );
};
Input.propTypes = {
  forwardRef: propTypes.object,
};
Input.defaultProps={
  forwardRef: {},
};

class ForwardRefComponent extends Component {
  constructor() {
    super();
    this.state = {
      refs: React.createRef(),
    };
  }

  handleFocus() {
    const {refs: {current}} = this.state;
    current.focus();
  }

  render() {
    const {refs} = this.state;
    const FancyInput = React.forwardRef((props, ref)=>{
      return <Input {...props} forwardRef={ref} />;
    });

    return (
      <Fieldset title='forwardRef-简单用法'>
        <FancyInput ref={refs} />
        <input type='button' value='获取焦点' onClick={()=>this.handleFocus()} />
      </Fieldset>
    );
  }
}

export default ForwardRefComponent;
