import React from 'react';
import {ThemeContext} from '../contexts/ThemeContext';

class Titlebar extends React.Component {
  static contextType = ThemeContext;
  render() {
    const {isLightTheme, lightTheme, darkTheme, toggleTheme} = this.context;
    const theme = isLightTheme ? lightTheme : darkTheme;
    return (
      <div className='title-bar' style={{backgroundColor: theme.titleBar, color: theme.text}}>
        <div className='branding'>Todo App</div>
        <i className="fas fa-moon" onClick={toggleTheme}></i>
      </div>
    )
  }
}

export default Titlebar;