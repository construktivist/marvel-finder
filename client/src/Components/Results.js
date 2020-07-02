import React from 'react';

class Results extends React.Component {

    render () {
        return (
            <div className="row">
                {this.props.searchResults.map((result) => 
                <p>{result.name}</p>)}
            </div>
        )
    }
}

export default Results;