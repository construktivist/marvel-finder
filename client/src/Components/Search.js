import React from 'react';

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

    render () {
        return (
            <form>
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