import PropTypes from 'prop-types';
import React, {
  Component,
} from 'react';
import Fieldset from '@Component/Fieldset';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state={
      error: false,
      errorInfo: null,
    };
  }

  componentDidCatch(error, errorInfo) {
    console.log(errorInfo.componentStack);
    this.setState({
      error: error.toString(),
      errorInfo: errorInfo.componentStack,
    });
  }

  render() {
    if (this.state.error) {
      return (
        <div>
          <h1>error: {this.state.error}</h1>
          <p>
            errorInfo:{this.state.errorInfo}
          </p>
        </div>
      );
    }
    return this.props.children;
  }
};
ErrorBoundary.propTypes = {
  children: PropTypes.node.isRequired,
};

class Input extends Component {
  constructor() {
    super();
    this.state= {
      throw: false,
    };
  }

  handleClick() {
    this.setState((s)=>({
      throw: !s.throws,
    }));
  }

  render() {
    if (this.state.throw) throw new Error('I throw');
    return <input type='button' value='触发catch' onClick={()=> this.handleClick()} />;
  }
};

function ComponentDidCatchComponent() {
  return (
    <Fieldset title='componentDidCatch'>
      <ErrorBoundary>
        <Input />
      </ErrorBoundary>
    </Fieldset>
  );
};

export default ComponentDidCatchComponent;
