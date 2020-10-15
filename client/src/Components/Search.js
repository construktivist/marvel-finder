import React from 'react';
import '../Styles/Search.css';


// Search bar component
class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        search: '',
        sort: 'recent',
        }
    }

    //Handle text field changes for search input
    handleChange = event => {
        this.setState({
            search: event.target.value 
        })
    }

    //Handles the sort dropdown
    handleSelect = event => {
        this.setState({
            sort: event.target.value
        })
        this.props.sort(this.state.sort);
    }

    //Make API call on submit using find() (App.js).
    handleSubmit = event => {
        event.preventDefault();
        this.props.find(this.state.search);
    }

    render () {
        return (
                <div className="row">
                    <form onSubmit={this.handleSubmit}>
                        <div className="input-group">
                        <div className="searchbox w-50">
                            <i className="fas fa-search col-xs-2"></i> 
                            <input 
                                id="search" 
                                className="search col-xs-10" 
                                type="text" 
                                value={this.state.name}
                                onChange={this.handleChange} />
                        </div>
                        <select onChange={this.handleSelect} className="m-select" id="input-sort-select">
                            <option value="recent">Most Recent</option>
                            <option value="alphabetical">Alphabetical</option>
                            <option value="recent-issues">Recent issues</option>
                            <option value="older-issues">Older issues</option>
                        </select>
                        </div>
                    </form>
                </div>
        )
    }
}

export default Search;