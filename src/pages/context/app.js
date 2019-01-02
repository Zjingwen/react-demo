import React, {Component} from 'react';
import {ThemeContext, themes} from './theme-context';
import ThemeButton from './theme-button';

function Toolar(props) {
  return (
    <ThemeButton onClick={props.changeTheme}>
      Change Theme
    </ThemeButton>
  );
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: themes.light,
    };

    this.toggleTheme = ()=> {
      this.setState((state)=>({
        theme:
          state.theme === themes.dark ? themes.light : themes.dark,
      }));
    };
  }

  render() {
    return (
      <React.Fragment>
        <ThemeContext.Provider value={this.state.theme}>
          <Toolar changeTheme={this.toggleTheme} />
        </ThemeContext.Provider>
        <ThemeButton />
      </React.Fragment>
    );
  }
}

export default App;
