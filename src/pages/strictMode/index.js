import React, {
  StrictMode,
  Component,
} from 'react';
import Fieldset from '@Component/Fieldset';

class Index extends Component {
  render() {
    return (
      <Fieldset title='StrictMode'>
        <StrictMode>
          StrictMode
        </StrictMode>
      </Fieldset>
    );
  }
};

export default Index;
