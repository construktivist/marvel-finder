import React from 'react';
import axios from 'axios';


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

    //Handle text field changes
    handleChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value,
        })
    }

    //Make API call on submit
    handleSubmit = (event) => {
        event.preventDefault();
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

    render () {
        return (
                <form onSubmit={this.handleSubmit}>
                    <input 
                        id="search" 
                        className="search" 
                        type="text" 
                        value={this.state.name}
                        onChange={this.handleChange} />
                </form>
        )
    }
}

export default Search;