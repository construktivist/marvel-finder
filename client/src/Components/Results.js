import React from 'react';

class Results extends React.Component {

    render () {
        return (
            <div className="row">
                {this.props.searchResults.map((result) => 
                <div>
                    <p>{result.name}</p>
                    <img src={result.thumbnail.path + "." + result.thumbnail.extension} />
                </div>
                )}
            </div>
        )
    }
}

export default Results;