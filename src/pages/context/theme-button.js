import React, {Component} from 'react';
import {ThemeContext} from './theme-context';

class ThemeButton extends Component {
  render() {
    const props = this.props;
    const theme = this.theme;
    return (
      <button type='button' {...props} style={{backgroundColor: theme.background}} value='Theme' />
    );
  }
};

ThemeButton.contextType = ThemeContext;

export default ThemeButton;
