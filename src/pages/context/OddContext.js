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

class oddContext extends Component {
  render() {
    return (
      <Fieldset title='单context'>
        <h1>Provider外</h1>
        <ThemedButton />
        <ThemeContext.Provider value="dark">
          <h1>Provider内</h1>
          <ThemedButton />
        </ThemeContext.Provider>
      </Fieldset>
    );
  }
};

export default oddContext;
