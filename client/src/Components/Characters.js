import React from 'react';

class Characters extends React.Component {
    
    componentDidMount () {
        this.props.setSearchType('character')
    }

    render () {
        return (
            <div className="row">
                <h2>Characters</h2>
            </div>
        )
    }
}

export default Characters;