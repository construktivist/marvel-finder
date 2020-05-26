import React from 'react';

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        search: ''
        }
    }

    inputChange = (event) => {
        this.setState({
            [event.target.search]: event.target.value
        })
    }

    render () {
        return (
            <form>
                <input 
                    id="search" 
                    name="search"
                    className="search" 
                    type="text" 

                    value={this.state.search}
                    onChange={this.inputChange} />
                <div className="listbox" id="react-listbox" ></div>
            </form>
        )
    }
}

export default Search;