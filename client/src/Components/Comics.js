import React from 'react';

import '../Styles/Global.css'

class Comics extends React.Component {
    
    //Component will set search type to comic then clear the existing results and then run another search using the current search term.
    componentDidMount () {

        this.props.setSearchType('comic');
        this.props.handleResults([]);
        this.props.find(this.props.searchTerm);

    }

    render () {
        return (
            <div className="row global-margin">
                <h2>Comics</h2>
                {/* <div ref={loadingRef => (this.loadingRef = loadingRef)}>
                    <Loading />
                </div> */}
            </div>
        )
    }
}

export default Comics;