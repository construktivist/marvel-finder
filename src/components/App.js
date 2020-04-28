import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import logo from '../logo.svg';
import '../App.css';

class App extends React.Component {
  render () {
    return (
      <Router>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/foo">Foo</a></li>
          <li><a href="/bar">Bar</a></li>
        </ul>
        <Route path="/" render={() => <Home />} />
        <Route path="/foo" render={() => <About />} />
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

class About extends React.Component {
  render () {
    return (
        <h1>About</h1>
    )
  }
}

export default App;
