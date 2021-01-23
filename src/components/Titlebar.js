import React from 'react';

class Titlebar extends React.Component {
  render() {
    return (
      <div className='title-bar'>
        <div className='branding'>Todo App</div>
        <i className="fas fa-moon"></i>
      </div>
    )
  }
}

export default Titlebar;