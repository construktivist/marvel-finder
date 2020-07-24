import React from 'react';
import axios from 'axios';
import '../Styles/Search.css';


// Search bar component
class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        search: '',
        results: [],
        }
    }

    //Handle text field changes for search input
    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value,
        })
    }

    request = (type, params) => {
        axios.get(type, params)
        .then(response => {
            this.setState({
                results: response.data,
            });
            this.passResults();
        })
        .catch(error => {
            console.log('ERROR: ' + error)
        })
    }

    //Performs the GET request based on the searchType set by App.js
    find = (searchType) => {

        if (searchType === 'character') {
            this.request('/character', {
                    params: {
                        characterName: this.state.search,
                    }
            });        
        }
        else if (searchType === 'comics') {
            this.request('/comics', {
                params: {
                    titleStartsWith: this.state.search,
                }
            });
        }
        else {
            console.log('ERROR: searchType: ' + searchType + ' does not match comics or characters');
        }
    }

    //Make API call on submit using find()
    handleSubmit = event => {
        event.preventDefault();
        this.find(this.props.searchType);
    }

    //Called by handleSubmit to pass the api data back to App.js.
    passResults() {
        this.props.handleResults(this.state.results)
    }

    render () {
        return (
                <div className="row w-50">
                    <form onSubmit={this.handleSubmit}>
                        <div className="searchbox">
                            <i className="fas fa-search col-xs-2"></i> 
                            <input 
                                id="search" 
                                className="search col-xs-10" 
                                type="text" 
                                value={this.state.name}
                                onChange={this.handleChange} />
                        </div>
                    </form>
                </div>
        )
    }
}

export default Search;