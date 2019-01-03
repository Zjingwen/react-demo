import React, {
  Component,
  createContext,
} from 'react';
import Fieldset from '@Component/Fieldset';

const themes = {
  light: {
    background: '#eeeeee',
  },
  dark: {
    background: '#222222',
  },
};

const ThemeContext = createContext(
  themes.light,
);

class ThemeButton extends Component {
  static contextType = ThemeContext;
  render() {
    const props = this.props;
    const theme = this.context;
    return (
      <button type='button' {...props} style={{backgroundColor: theme.background}} >
        Theme
      </button>
    );
  }
};

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: themes.light,
    };
  }

  handleTheme() {
    this.setState((state)=>({
      theme: JSON.stringify(state.theme) === JSON.stringify(themes.dark)
        ? themes.light
        : themes.dark,
    }));
  };

  render() {
    return (
      <Fieldset title='多context'>
        <ThemeContext.Provider value={this.state.theme}>
          <ThemeButton onClick={()=>this.handleTheme()}>
            Change Theme
          </ThemeButton>
        </ThemeContext.Provider>
        <ThemeButton />
      </Fieldset>
    );
  }
}

export default Index;
