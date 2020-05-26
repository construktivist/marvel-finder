import React from 'react';

class Search extends React.Component {
    render () {
        return (
            <form>
                <input class="search" type="text" value="" autoComplete="off" aria-autoComplete="list" aria-controls="react-listbox" placeholder="Search" />
                <div class="listbox" id="react-listbox" ></div>
            </form>
        )
    }
}

export default Search;