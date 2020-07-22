import React from 'react';
import Search from './Search';

class Comics extends React.Component {
    
    componentDidMount () {
        this.props.setSearchType('comic')
    }
}

export default Comics;