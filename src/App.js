import React, { Component} from 'react';
import { ThemeProvider } from 'styled-components';

// import './App.css';

import TodoList from './components/TodoList/index';
import ThemeSwitcher from './components/ThemeSwitcher/index';

import * as themes from './styles/themes/index';
import ThemeContext from './styles/themes/context';

class App extends Component{


  state = {
    theme: themes.dark,
  };

  toogleTheme = () => {
    this.setState({theme: this.state.theme === themes.dark ? themes.light : themes.dark})
  };

  render(){
    return (
      <div className="App">
        <ThemeContext.Provider value={this.state}>
          <h1>Context Api Theme switcher</h1>
          <ThemeSwitcher toogleTheme={this.toogleTheme}/>
          
          <ThemeContext.Consumer>
            {theme => (
              <ThemeProvider theme={theme}>
                <TodoList />
              </ThemeProvider>
            )}
          </ThemeContext.Consumer>


        </ThemeContext.Provider>
      </div>
    );
  }
}

export default App;
