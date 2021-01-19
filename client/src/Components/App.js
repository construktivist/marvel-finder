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
import ViewMoreButton from './ViewMoreButton';

class App extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      featured: 'thor',
      loading: true,
      searchTerm: '',
      orderBy:'',
      searchType: 'character',
      results: '',
    }
  }

  //Component will search for the featured hero after mounting.
  componentDidMount () {
    this.find(this.state.featured, this.state.orderBy);
  }


  //This function sets the searchType state based on what component the user has mounted.
  setSearchType = (newSearchType) => {
    this.setState({
      searchType: newSearchType
    })
  }
  

  //Performs the specific GET request using request() based on the searchType set by App.js
  find = (newSearchTerm, newOrderBy) => {

    if (!newSearchTerm) newSearchTerm = this.state.featured;
    if (!newOrderBy) newOrderBy = '-focDate';

    this.setState({
      offset: 0,
      results: '',
      searchTerm: newSearchTerm,
      orderBy: newOrderBy
    }, () => {
      console.log('FIND ' + this.state.searchTerm)
      console.log('FIND ' + this.state.orderBy)
      this.search()
    });
  }

  findMore = (newSearchTerm, newOrderBy) => {

    if (!newSearchTerm) newSearchTerm = this.state.featured;
    if (!newOrderBy) newOrderBy = '-focDate';

    this.setState({
      searchTerm: newSearchTerm,
      orderBy: newOrderBy
    }, () => {
      console.log('FIND ' + this.state.searchTerm)
      console.log('FIND ' + this.state.orderBy)
      this.search()
    });
  }

  //Performs the specific GET request using request() based on the searchType and searchTerm.
  search = () => {
    console.log('SEARCH TYPE ' + this.state.searchType);
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
                offset: this.state.offset,
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
      if (type === '/character') {
        this.setState({
          results: response.data,
          loading: false,
        });
      }
      else if (type === '/comics' && this.state.offset == 0) {
        this.setState({
          results: response.data,
          loading: false,
        });
      }
      else {
        const currentResults = this.state.results;
        const moreResults = response.data;
        const newResults = currentResults.concat(moreResults);

        this.setState({
          results: newResults,
          loading: false,
        })
      }


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

    updateOffset = (newOffset) => {
        this.setState({
          offset: newOffset
        })
        console.log(this.state.offset);
        this.findMore(this.state.searchTerm, this.state.orderBy);
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
          />

          <Route path="/characters" render={(props) => 
            <Characters 
                setSearchType={this.setSearchType}
                searchTerm={this.state.searchTerm} 
                handleResults={this.handleResults}
                find={this.find}               
            />}
          />

          <Route path="/comics" render={(props) => 
            <Comics 
              setSearchType={this.setSearchType}
              searchTerm={this.state.searchTerm}
              handleResults={this.handleResults}  
              find={this.find} 
            />}
          />

          { this.state.loading ? <Loading /> : 
          <Results 
            searchType={this.state.searchType} 
            searchResults={this.state.results} 
          /> }

          { this.state.searchType == 'comic' ?  
          <ViewMoreButton
            updateOffset={this.updateOffset}
           /> : <div></div> }


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
