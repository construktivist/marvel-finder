// DEPENDENCIES
import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import axios from 'axios';

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
      searchTerm: 'thor',
      searchType: 'character',
      results: [],
    }
  }

  //This function sets the searchType state based on what component the user has mounted.
  setSearchType = (newSearchType) => {
    this.setState({
      searchType: newSearchType
    })
    console.log(this.state.searchType)
  }

  //Performs the specific GET request using request() based on the searchType set by App.js
  find = (newSearchTerm) => {

    this.setState({
      searchTerm: newSearchTerm
    })
    console.log(this.state.searchTerm);

    if (this.state.searchType === 'character') {
        this.request('/character', {
                params: {
                    characterName: this.state.searchTerm,
                }
        });        
    }
    else if (this.state.searchType === 'comic') {
        this.request('/comics', {
            params: {
                titleStartsWith: this.state.searchTerm,
            }
        });
    }
    else {
        console.log('ERROR: searchType: ' + this.state.searchType + ' does not match comics or characters');
    }
  }

  //Used by find() below to perform the specific GET request.
  request = (type, params) => {
    axios.get(type, params)
    .then(response => {
        this.setState({
            results: response.data,
        });
        // this.passResults();
    })
    .catch(error => {
        console.log('ERROR: ' + error)
    })
  }

  //This function passes api data from Search.js to App.js
  // handleResults = (newResults) => {  
  //   this.setState({
  //     results: newResults
  //   })
  //   console.log(this.state.results);
  // }
 

  render () {
    return (
      <Router>
        <div className="container">
          <Nav />
          <Search searchType={this.state.searchType} handleResults={this.handleResults} find={this.find}/>
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
