import React, {
  Component,
} from 'react';
import propTypes from 'prop-types';
import Fieldset from '@Component/Fieldset';

function Cat(props) {
  const STYLE = {
    width: 20,
    height: 20,
    background: '#FF00FF',
    position: 'absolute',
    left: props.mouse.x,
    top: props.mouse.y,
  };

  return (
    <div style={STYLE} />
  );
}
Cat.propTypes = {
  mouse: propTypes.object.isRequired,
};

class Mouse extends Component {
  constructor(props) {
    super(props);
    this.state={
      x: 0,
      y: 0,
    };
  }

  handleMove(event) {
    this.setState({
      x: event.clientX,
      y: event.clientY,
    });
  };

  render() {
    const STYLE = {
      width: 500,
      height: 500,
      background: '#eee',
      display: 'inline-block',
    };

    return (
      <div style={STYLE} onMouseMove={(e)=>this.handleMove(e)}>
        {this.props.render(this.state)}
      </div>
    );
  }
}
Mouse.propTypes = {
  render: propTypes.func.isRequired,
};

class Index extends Component {
  render() {
    return (
      <Fieldset title='render props'>
        <Mouse render={(mouse)=>(
          <Cat mouse={mouse} />
        )} />
      </Fieldset>
    );
  }
};

export default Index;
