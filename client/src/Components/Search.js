import React from 'react';
import axios from 'axios';


// Search bar component
class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        search: '',
        }
    }

    //Handle text field changes
    handleChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value,
        })
    }

    //Make API call on submit
    handleSubmit = (event) => {
        console.log("EVENT")
        axios.get('/fizz', {
            params: {
              characterName: this.state.search,
            }
          })
          .then(function (response) {
          console.log(response);
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