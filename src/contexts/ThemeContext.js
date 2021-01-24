import React, {createContext} from 'react';

export const ThemeContext = createContext();

class ThemeContextProvider extends React.Component {
  state = {
    isLightTheme: true,
    lightTheme: {text: '#000', titleBar: '#9EA7AA', nav: '#CFD8DC', body:'#ECEFF1'},
    darkTheme: {text: '#FFF', titleBar: '#4f5b62', nav: '#37474f', body:'#263238'}
  }

  render() {
    return (
      <ThemeContext.Provider value={this.state}>
        {this.props.children}
      </ThemeContext.Provider>
    )
  }
}

export default ThemeContextProvider;