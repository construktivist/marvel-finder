import React from 'react';

import '../Styles/Global.css'

class Characters extends React.Component {
    
    //Component will set search type to character then clear the existing results and then run another search using the currect search term.
    componentDidMount () {
        this.props.setSearchType('character')
        this.props.find(this.props.searchTerm);
    }

    render () {
        return (
            <div className="row global-margin">
                <h2>Characters</h2>
            </div>
        )
    }
}

export default Characters;