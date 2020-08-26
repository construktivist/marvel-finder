import React from 'react';

import '../Styles/Global.css'

class Characters extends React.Component {
    
    componentDidMount () {
        this.props.setSearchType('character')
        this.props.handleResults([])
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