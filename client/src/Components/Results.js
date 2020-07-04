import React from 'react';

import Profile from './Profile';

class Results extends React.Component {

    render () {
        return (
            <div className="row">
                {this.props.searchResults.map((result) => 
                    <Profile 
                        key={result.id} 
                        id={result.id} 
                        name={result.name}
                        thumbnail={result.thumbnail.path + '.' + result.thumbnail.extension} 
                        profile_url={result.urls[1].url}
                        />
                )}
            </div>
        )
    }
}

export default Results;