import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';

class App extends Component {

  getChildContext() {
    return {muiTheme: getMuiTheme()};
  };

  render() {
    return (
      <div className="AppBar">
        <AppBar title="Toad"/>
      </div>
    );
  }
}

export default AppBar;
