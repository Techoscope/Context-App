import React, {createContext} from 'react';

export const ThemeContext = createContext();

class ThemeContextProvider extends React.Component {
  state = {
    isLightTheme: true,
    lightTheme: {text: '#000', titleBar: '#9EA7AA', nav: '#CFD8DC', body:'#ECEFF1'},
    darkTheme: {text: '#FFF', titleBar: '#37474f', nav: '#4f5b62', body:'#263238'},
    isLoggedIn: false
  }

  switchTheme = () => {
    this.setState({
      isLightTheme: !this.state.isLightTheme
    })
  }

  render() {
    return (
      <ThemeContext.Provider value={{...this.state, toggleTheme: this.switchTheme}}>
        {this.props.children}
      </ThemeContext.Provider>
    )
  }
}

export default ThemeContextProvider;