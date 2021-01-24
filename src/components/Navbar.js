import React from 'react'
import {ThemeContext} from '../contexts/ThemeContext';

class Navbar extends React.Component {
  static contextType = ThemeContext;
  render() {
    const {isLightTheme, lightTheme, darkTheme} = this.context;
    const theme = isLightTheme ? lightTheme : darkTheme;
    return (
      <ul className="navbar" style={{backgroundColor: theme.nav, color: theme.text}}>
        <li>Home</li>
        <li>About</li>
        <li>Login</li>
      </ul>
    )
  }
}

export default Navbar;