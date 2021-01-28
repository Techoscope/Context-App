import React, {useContext} from 'react'
import {ThemeContext} from '../contexts/ThemeContext';
import {TodoItemsContext} from '../contexts/TodoItemsContext';

function TodoList() {
    const {items} = useContext(TodoItemsContext);
    const {isLightTheme, lightTheme, darkTheme} = useContext(ThemeContext);
    const theme = isLightTheme ? lightTheme : darkTheme;
    return (
      <div className='todolist' style={{backgroundColor: theme.body, color: theme.text}}>
        <input type="text"/>
        <ul>
          {items.map(item => {
            return <li key={item.id} style={{backgroundColor: theme.nav}}>{item.title}</li>
          })}
        </ul>
      </div>
    )
}

export default TodoList;