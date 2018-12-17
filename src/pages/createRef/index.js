import React, {
  Component,
} from 'react';
import Fieldset from '@Component/Fieldset';

class CreateRefComponent extends Component {
  constructor() {
    super();
    this.state = {
      el: null,
    };
    this.ref = React.createRef();
  }

  componentDidMount() {
    this.setState({
      el: this.ref.current.innerHTML,
    });
  }

  render() {
    return (
      <Fieldset title='createRef'>
        <div ref={this.ref}>createRef</div>
        <p>el: {this.state.el}</p>
      </Fieldset>
    );
  }
}

export default CreateRefComponent;
