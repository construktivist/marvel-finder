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
      featured: 'spider-man',
      loading: false,
      searchTerm: '',
      orderBy:'',
      offset: 0,
      searchType: 'comic',
      results: '',
      previousY: 0,
    }
  }

  //Component will search for the featured hero after mounting.
  componentDidMount () {

    if (!this.state.results) {
      this.find();
    }

    var options = {
      root: null,
      rootMargin: "0px",
      threshold: 1.0
    }

    this.observer = new IntersectionObserver(this.handleObserver.bind(this), options);
    this.observer.observe(this.loadingRef);
  }

  //Checks user scroll position and loads more comics when the user scrolls to the bottom.
  handleObserver(entities, observer) {
    const currentY = entities[0].boundingClientRect.y;
    if (this.state.previousY > currentY ) {
      let currentOffset = this.state.offset;
      this.setState({ offset: currentOffset += 24 });
      this.findMore(this.state.searchTerm, this.state.orderBy);
    }
    this.setState({ previousY: currentY });
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
      results: [],
      searchTerm: newSearchTerm,
      orderBy: newOrderBy
    }, () => {
      this.search()
    });
  }

  //Performs GET request specifically for the infinite scroll. This uses offset as it gets updated. 
  findMore = (newSearchTerm, newOrderBy) => {

    if (!newSearchTerm) newSearchTerm = this.state.featured;
    if (!newOrderBy) newOrderBy = '-focDate';

    this.setState({
      searchTerm: newSearchTerm,
      orderBy: newOrderBy
    }, () => {
      this.search()
    });
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
      else {
        
        if (typeof response.data === 'object') {
          this.setState({ 
            results:  [...this.state.results, ...response.data],
            loading: false
           });

        }
        else {
          this.setState({ 
            results: response.data,
            loading: false
          })
        }

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
    }

    updateOffset = (newOffset) => {
        this.setState({
          offset: newOffset
        })
        // console.log(this.state.offset);
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

          
          <Results 
            searchType={this.state.searchType} 
            searchResults={this.state.results} 
          />

          
          <div ref={loadingRef => (this.loadingRef = loadingRef)}>
            {this.state.loading ? <Loading /> : <div></div>}
          </div>


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
            <h1>Marvel Search</h1>
            <Link to="/characters">Characters</Link>
            <Link to="/comics">Comics</Link>
          </nav>
      </div>
    )
  }
}


export default App;
