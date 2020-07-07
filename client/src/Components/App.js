// DEPENDENCIES
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';


// COMPONENTS
import '../Styles/App.css';
import Home from './Home';
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

  //This function passes api data from Search.js to App.js
  handleResults = (newResults) => {  
    this.setState({
      results: newResults
    })
    console.log(this.state.results);
  }

  render () {
    return (
      <Router>
        <div className="container">
          <Nav />
          <Route path="/home" render={() => <Home />} />
        </div>
      </Router>

    )
  }
}

class Nav extends React.Component {
  render () {
    return (
      <div className="row">
          <nav>
            <h1>Marvel Finder</h1>
            <Link to="/home">Home</Link>
            <Link to="/featured">Featured</Link>
            <Link to="/random">Random</Link>
          </nav>
          <Search handleResults={this.handleResults}/>
      </div>
    )
  }
}


export default App;
