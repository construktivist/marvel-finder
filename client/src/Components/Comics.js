import React from 'react';

import '../Styles/Global.css'

class Comics extends React.Component {
    
    //Component will set search type to comic then clear the existing results and then run another search using the current search term.
    componentDidMount () {

        this.props.setSearchType('comic');
        this.props.handleResults([]);
        this.props.find(this.props.searchTerm);

        var options = {
            root: null,
            rootMargin: "0px",
            threshold: 1.0
          }
      
          this.observer = new IntersectionObserver(this.handleObserver.bind(this), options);
          this.observer.observe(this.loadingRef);
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