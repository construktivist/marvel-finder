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
                <div className="row">
                    <form className="w-50" onSubmit={this.handleSubmit}>
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
                    <div class="btn-group">
                        <button class="btn btn-secondary btn-sm" type="button">
                            Small split button
                        </button>
                        <button type="button" class="btn btn-sm btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <span class="sr-only">Toggle Dropdown</span>
                        </button>
                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <a class="dropdown-item" href="#">Action</a>
                            <a class="dropdown-item" href="#">Another action</a>
                            <a class="dropdown-item" href="#">Something else here</a>
                        </div>
                    </div>
                </div>
        )
    }
}

export default Search;