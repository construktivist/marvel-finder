import React from 'react';

import Profile from './Profile';
import Cover from './Cover';

// Takes api data from App.js and sends it to the appropriate component.
class Results extends React.Component {

    render () {
        // Renders Profile component if the searchType is equal to character
        if (this.props.searchType === 'character' && this.props.searchResults.length > 0) {
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
        // Renders Cover component if the searchType is equal to comic
        else if (this.props.searchType === 'comic' && this.props.searchResults.length > 0) {
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
        // Render 
        else {
            return (
                <div className="results row">
                    <h3>
                        Sorry! No results were found.
                    </h3>
                </div>
            )
        }
    }
}

export default Results;