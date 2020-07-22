import React from 'react';
import Search from './Search';

class Characters extends React.Component {
    
    componentDidMount () {
        this.props.setSearchType('character')
    }
}

export default Characters;