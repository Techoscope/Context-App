import React from 'react'
import {ThemeContext} from '../contexts/ThemeContext';

class TodoList extends React.Component {
    static contextType = ThemeContext;
  render() {
    const {isLightTheme, lightTheme, darkTheme} = this.context;
    const theme = isLightTheme ? lightTheme : darkTheme;
    return (
      <div className='todolist' style={{backgroundColor: theme.body, color: theme.text}}>
        <input type="text"/>
        <ul>
          <li style={{backgroundColor: theme.nav}}>Go to the market</li>
          <li style={{backgroundColor: theme.nav}}>Get some milk</li>
          <li style={{backgroundColor: theme.nav}}>Pay the bills</li>
        </ul>
      </div>
    )
  }
}

export default TodoList;