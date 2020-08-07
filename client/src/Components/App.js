// DEPENDENCIES
import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


// COMPONENTS
import '../Styles/App.css';
import Comics from './Comics';
import Characters from './Characters';
import Search from './Search';
import Results from './Results';

class App extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      searchType: 'character',
      results: [],
    }
  }

  //This function passes api data from Search.js to App.js
  handleResults = (newResults) => {  
    this.setState({
      results: newResults
    })
    console.log(this.state.results);
  }
 
  //This function sets the searchType state based on what component the user has mounted.
  setSearchType = (newSearchType) => {
    this.setState({
      searchType: newSearchType
    })
    console.log(this.state.searchType)
  }

  render () {
    return (
      <Router>
        <div className="container">
          <Nav />
          <Search searchType={this.state.searchType} handleResults={this.handleResults}/>
          <Route path="/characters" render={(props) => <Characters setSearchType={this.setSearchType} handleResults={this.handleResults} />} />
          <Route path="/comics" render={(props) => <Comics setSearchType={this.setSearchType} handleResults={this.handleResults} />} />
          <Results searchType={this.state.searchType} searchResults={this.state.results} />
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
            <Link to="/characters">Characters</Link>
            <Link to="/comics">Comics</Link>
          </nav>
      </div>
    )
  }
}


export default App;
