import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import axios from 'axios';
// import logo from '../logo.svg';
import '../App.css';

class App extends React.Component {

  // componentDidMount() {
  //   axios.get('')
  // }

  render () {
    console.log(process.env);
    return (
      <Router>
        <ul>
          <li><a href="/home">Home</a></li>
          <li><a href="/foo">Foo</a></li>
          <li><a href="/bar">Bar</a></li>
        </ul>
        <Route path="/home" render={() => <Home />} />
        <Route path="/foo" render={() => <Foo />} />
        <Route path="/bar" render={() => <Bar />} />
      </Router>
    )
  }
}

class Home extends React.Component {
  render () {
    return (
        <h1>Welcome!</h1>
    )
  }
}

class Foo extends React.Component {
  render () {
    return (
        <h1>FOO</h1>
    )
  }
}

class Bar extends React.Component {
  render () {
    return (
        <h1>BAR</h1>
    )
  }
}

export default App;
