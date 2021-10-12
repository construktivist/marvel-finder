import React from 'react';
import '../Styles/Search.css';


// Search bar component
class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        search: '',
        sort: '',
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
        }, () => {
            // console.log('HANDLE SELECT ' + this.state.sort)
            this.props.find(this.state.search, this.state.sort); 
        })
    }

    //Make API call on submit using find() (App.js).
    handleSubmit = event => {
        event.preventDefault();
        this.props.find(this.state.search, this.state.sort);
    }

    render () {
        return (
                <div className="row">
                    <form onSubmit={this.handleSubmit}>
                        <div className="input-group">
                            <div className="searchbox">
                                <i className="fas fa-search col-xs-2"></i> 
                                <input 
                                    id="search" 
                                    className="search col-xs-10" 
                                    type="text" 
                                    value={this.state.name}
                                    onChange={this.handleChange} />
                            </div>
                            { this.props.searchType === 'comic' ?
                                <select onChange={this.handleSelect} className="m-select" id="input-sort-select">
                                    <option value="-focDate">Most Recent</option>
                                    <option value="focDate">Older</option>
                                    <option value="-title">Alphabetical (A-Z)</option>
                                    <option value="title">Alphabetical (Z-A)</option>
                                    <option value="-issueNumber">Issue Number (Descending)</option>
                                    <option value="issueNumber">Issue Number (Ascending)</option>
                                </select> : <div></div> }
                        
                        </div>
                    </form>
                </div>
        )
    }
}

export default Search;