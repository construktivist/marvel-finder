import React from 'react';

class Comics extends React.Component {
    
    componentDidMount () {
        this.props.setSearchType('comic')
        this.props.handleResults([])
    }

    render () {
        return (
            <div className="row">
                <h2>Comics</h2>
            </div>
        )
    }
}

export default Comics;