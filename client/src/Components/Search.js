import React from 'react';
import axios from 'axios';

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        search: '',
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value,
        })
    }

    handleSubmit = (event) => {
        axios.get('/find')
        .then(function (response) {
        console.log(response)
        })
        .catch(function (error) {
        console.log(error);
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