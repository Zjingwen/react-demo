import React, {
  Component,
} from 'react';
import Fieldset from '@Component/Fieldset';

const ThemeContext = React.createContext('light');

class ThemedButton extends React.Component {
  static contextType = ThemeContext;
  render() {
    return <input defaultValue={this.context} type='input' />;
  }
}

function Toolbar(props) {
  return (
    <div>
      <ThemedButton />
    </div>
  );
}

class Index extends Component {
  render() {
    return (
      <Fieldset title='context'>
        <Toolbar />
        <ThemeContext.Provider value="dark">
          <Toolbar />
        </ThemeContext.Provider>
      </Fieldset>
    );
  }
}

export default Index;
