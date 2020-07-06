// DEPENDENCIES
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';


// COMPONENTS
import '../Styles/App.css';
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
        <div className="header">
        <ul>
          <li><a href="/home">Home</a></li>

        </ul>
            <h1>Marvel Finder</h1>
            <Search handleResults={this.handleResults}/>
            <Results searchResults={this.state.results}/>
        </div>
        {/* <Route path="/home" render={() => <Home />} /> */}
      </Router>
    )
  }
}

// class Home extends React.Component {
//   render () {
//     return (
//       <h1>Hello World</h1>
//     )
//   }
// }


export default App;
