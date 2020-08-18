import React from 'react';

import Profile from './Profile';
import Cover from './Cover';

// Takes api data from App.js and sends it to the appropriate component.
class Results extends React.Component {

    render () {
        if (this.props.searchType === 'character' && typeof this.props.searchResults === 'object') {
            return (
                <div className="results row">
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
        else if (this.props.searchType === 'comic' && typeof this.props.searchResults === 'object') {
            return (
                <div className="results row">
                    {this.props.searchResults.map((result) => 
                        <Cover
                            key={result.id}
                            id={result.id}
                            title={result.title}
                            url={result.urls[0].url}
                            authors= {result.creators.items}
                            issueNumber={result.issueNumber}
                            thumbnail={result.thumbnail.path + '.' + result.thumbnail.extension} 
                            />
                    )}
                </div>
            )
        }
        else {
            return (
                <div className="results row">
                    <h3>
                        {this.props.searchResults}
                    </h3>
                </div>
            )
        }
    }
}

export default Results;