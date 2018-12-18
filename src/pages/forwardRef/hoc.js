import React from 'react';
import Fieldset from '@Component/Fieldset';

function wrapped(Component) {
  class Wrapped extends React.Component {
    render() {
      const {forwardedRef, ...props} = this.props;
      return <Component ref={forwardedRef} {...props} />;
    }
  }
  return React.forwardRef((props, ref) => {
    return <Wrapped {...props} forwardedRef={ref} />;
  });
}

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.ref = React.createRef();
  };

  handleFocus() {
    const {current} = this.ref;
    current.focus();
  }

  render() {
    const props = this.props;
    return (
      <input type='input' defaultValue={props.value} ref={this.ref} />
    );
  }
}

class Hoc extends React.Component {
  constructor() {
    super();
    this.state = {
      refs: React.createRef(),
    };
  };

  handleFocus() {
    const {refs: {current}} = this.state;
    current.handleFocus();
  }

  render() {
    const {refs} = this.state;
    const InputHoc = wrapped(Input);

    return (
      <Fieldset title='forwardRef-hoc-用法'>
        <InputHoc value='forwardRef-hoc-用法' ref={refs} />
        <input type='button' value='获取焦点' onClick={()=>this.handleFocus()} />
      </Fieldset>
    );
  }
};

export default Hoc;
