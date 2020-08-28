import React from 'react';
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
            search: event.target.value,
        })
        console.log(this.state.search);
    }

    //Make API call on submit using find() (App.js).
    handleSubmit = event => {
        event.preventDefault();
        this.props.find(this.state.search);
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