import React from 'react';

import Profile from './Profile';
import Cover from './Cover';

// Takes api data from App.js and sends it to the appropriate component.
class Results extends React.Component {

    render () {
        // Renders Profile component if the searchType is equal to character
        if (this.props.searchType === 'character' && typeof this.props.searchResults === 'object') {
            return (
                <div className="results row">
                    {this.props.searchResults.map((result) => 
                        <Profile 
                            key={result.id} 
                            id={result.name.replace(/[^A-Za-z]/g, '')}
                            marvel_id={result.id} 
                            name={result.name}
                            description={result.description}
                            creators={[]}
                            thumbnail={result.thumbnail.path + '.' + result.thumbnail.extension} 
                            url={result.urls[1].url}
                            searchType={this.props.searchType}
                        />
                    )}
                </div>
            )
        }
        // Renders Cover component if the searchType is equal to comic
        else if (this.props.searchType === 'comic' && typeof this.props.searchResults === 'object') {
            console.log('TYPEOF ' + typeof this.props.searchResults);
            console.log('SEARCH RESULTS ' + this.props.searchResults);
            return (
                <div className="results row">
                    {this.props.searchResults.map((result, index) => 
                        <Cover
                            key={result.id}
                            id={result.title.replace(/[^A-Za-z]/g, '') + "-" + index}
                            marvel_id={result.id}
                            title={result.title}
                            url={result.urls[0].url}
                            creators={result.creators.items}
                            issueNumber={result.issueNumber}
                            thumbnail={result.thumbnail.path + '.' + result.thumbnail.extension}
                            searchType={this.props.searchType} 
                            />
                    )}
                </div>
            )
        }
        // Render 
        else {
            return (
                <div className="results row">
                    <h3 className="sorry">
                        {this.props.searchResults}
                    </h3>
                </div>
            )
        }
    }
}

export default Results;