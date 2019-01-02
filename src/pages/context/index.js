import React, {
  Component,
} from 'react';
import Fieldset from '@Component/Fieldset';

const ThemeContext = React.createContext('light');

class ThemedButton extends React.Component {
  static contextType = ThemeContext;
  render() {
    return <span>{this.context}</span>;
  }
}

function Toolbar() {
  return (
    <React.Fragment>
      <ThemedButton />
    </React.Fragment>
  );
}

class Index extends Component {
  render() {
    return (
      <Fieldset title='context'>
        <h1>Provider外</h1>
        <Toolbar />
        <ThemeContext.Provider value="dark">
          <h1>Provider内</h1>
          <Toolbar />
        </ThemeContext.Provider>
      </Fieldset>
    );
  }
}

export default Index;
