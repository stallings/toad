import React, { Component } from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import './App.css';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from '../src/components/AppBar';

class App extends Component {

  getChildContext() {
    return {muiTheme: getMuiTheme()};
  };

  render() {
    return (
      <div className="App">
        <AppBar title="Toad"/>
        <p className="App-intro">
          <RaisedButton label="Default" />
        </p>
      </div>
    );
  }
}

App.childContextTypes = {
  muiTheme: React.PropTypes.object.isRequired,
};

export default App;
