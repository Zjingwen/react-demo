import React, {
  Component,
} from 'react';
import Fieldset from '@Component/Fieldset';

function wrapped(Com) {
  class H extends Component {
    render() {
      const {forwardRef, ...rest} = this.props;
      return <Com ref={forwardRef} {...rest} />;
    }
  };

  return React.forwardRef((props, ref)=>{
    return <H {...props} forwardRef={ref} />;
  });
};

function Input() {
  return (
    <input type='input' defaultValue='输入框' />
  );
}
class Hoc extends Component {
  constructor() {
    super();
    this.state = {
      refs: React.createRef(),
    };
  };

  componentDidMount() {
    console.log(this.state.refs);
  }

  render() {
    const {refs} = this.state;
    const WrappedInput = wrapped(Input);
    return (
      <Fieldset title='forwardRef-hoc-用法'>
        forwardRef-hoc-用法
        <WrappedInput forwardRef={refs} />
      </Fieldset>
    );
  }
};

export default Hoc;
