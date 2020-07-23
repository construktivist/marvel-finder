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

    //Called by handleSubmit to pass the api data back to App.js.
    passResults() {
        this.props.handleResults(this.state.results)
    }

    find = (searchType) => {

        if (searchType === 'character') {
            axios.get('/character', {
                params: {
                    characterName: this.state.search,
                }
                })
                .then(function (response) {
                    this.setState({
                        results: response.data,
                    });
                    this.passResults();
                }.bind(this))
                .catch(function (error) {
                })
        }
        else if (searchType === 'comics') {
            axios.get('/character', {
                params: {
                    characterName: this.state.search,
                }
                })
                .then(function (response) {
                    this.setState({
                        results: response.data,
                    });
                    this.passResults();
                }.bind(this))
                .catch(function (error) {
                })
        }
        else {
            console.log('ERROR: searchType does not match comics or characters');
        }
    }

    //Handle text field changes
    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value,
        })
    }

    //Make API call on submit
    handleSubmit = event => {
        event.preventDefault();
        this.find(this.props.searchType);
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