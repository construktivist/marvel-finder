import React from 'react';

import '../Styles/Global.css'

class Comics extends React.Component {
    
    componentDidMount () {
        this.props.setSearchType('comic')
        this.props.handleResults([])
    }

    render () {
        return (
            <div className="row global-margin">
                <h2>Comics</h2>
            </div>
        )
    }
}

export default Comics;