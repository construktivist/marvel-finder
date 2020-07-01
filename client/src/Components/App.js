// DEPENDENCIES
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';


// COMPONENTS
import '../App.css';
import Search from './Search';
import Results from './Results';

class App extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      results: [],
      text: 'world',
    }
  }

  handleResults = (newResults) => {  
    this.setState({
      results: newResults
    })
    console.log(this.state.results);
  }

  helloWorld = () => {
    console.log(this.state.text);
  }

  render () {
    return (
      <Router>
        <div className="header">
        <ul>
          <li><a href="/home">Home</a></li>
          {/* <li><a href="/foo">Foo</a></li>
          <li><a href="/bar">Bar</a></li> */}
        </ul>
            <h1>Marvel Finder</h1>
            <Search  hello={this.helloWorld.bind(this)} handleResults={this.handleResults}/>
            <Results />
        </div>
        <Route path="/home" render={() => <Home />} />
        {/* <Route path="/foo" render={() => <Foo />} />
        <Route path="/bar" render={() => <Bar />} /> */}
      </Router>
    )
  }
}

class Home extends React.Component {
  render () {
    return (
      <h1>Hello World</h1>
    )
  }
}

// class Foo extends React.Component {
//   render () {
//     return (
//         <h1>FOO</h1>
//     )
//   }
// }

// class Bar extends React.Component {
//   render () {
//     return (
//         <h1>BAR</h1>
//     )
//   }
// }

export default App;
