import React, {
  Component,
} from 'react';
import OddContext from './OddContext';
import EvenContext from './EvenContext';

class Index extends Component {
  render() {
    return (
      <React.Fragment>
        <OddContext />
        <EvenContext />
      </React.Fragment>
    );
  }
}

export default Index;
