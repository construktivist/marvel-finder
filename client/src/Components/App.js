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
import Loading from './Loading';

class App extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      featured: 'thor',
      loading: true,
      searchTerm: '',
      orderBy:'-onsaleDate',
      offset: 0,
      searchType: 'character',
      results: '',
    }
  }

  //Component will search for the featured hero after mounting.
  componentDidMount () {
    this.find(this.state.featured);
    console.log(this.state.loading);
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
      searchTerm: newSearchTerm,
    }, () => {
      this.search()
    });
    console.log(this.state.searchTerm);
  }

  sort = (newOrderBy) => {
    console.log('APP SORT ' + newOrderBy);
    this.setState({
      orderBy: newOrderBy
    }, () => {
      this.search()
    });
    console.log(this.state.searchTerm);
    console.log(this.state.orderBy);
  }

  //Performs the specific GET request using request() based on the searchType and searchTerm.
  search = () => {
    if (this.state.searchType === 'character') {
      this.request('/character', {
              params: {
                  characterName: this.state.searchTerm,
              }
      });      
    }
    else if (this.state.searchType === 'comic') {
      console.log('APP SEARCH ' + this.state.orderBy);  
        this.request('/comics', {
            params: {
                titleStartsWith: this.state.searchTerm,
                orderBy: this.state.orderBy,
                offset: this.state.offset
            }
        });
    }
    else {
        console.log('ERROR: searchType: ' + this.state.searchType + ' does not match comics or characters');
    }
  }

  //Used by find() below to perform the specific GET request.
  request = (type, params) => {

    // Enable the Loading message appear.
    this.setState({
      loading: true,
    });

    // GET request to marvel api
    axios.get(type, params)
    .then(response => {
        this.setState({
            results: response.data,
            loading: false,
        });
        // console.log(response.data)
        // console.log(response.data[0]);
    })
    .catch(error => {
        console.log('ERROR: ' + error)
    })
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

          <Search 
            searchType={this.state.searchType} 
            handleResults={this.handleResults} 
            find={this.find}
            sort={this.sort}
          />

          <Route path="/characters" render={(props) => 
            <Characters 
                setSearchType={this.setSearchType}
                searchTerm={this.state.searchTerm} 
                find={this.find} 
                handleResults={this.handleResults}                 
            />}
          />

          <Route path="/comics" render={(props) => 
            <Comics 
              setSearchType={this.setSearchType}
              searchTerm={this.state.searchTerm}  
              find={this.find} 
              handleResults={this.handleResults}
            />}
          />

          { this.state.loading ? <Loading /> : 
          <Results 
            searchType={this.state.searchType} 
            searchResults={this.state.results} 
          /> }

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
