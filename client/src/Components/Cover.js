import React from 'react';
import '../Styles/Profile.css';

// Displays an overview for Marvel Character profile. 
class Cover extends React.Component {
    render () {
        return (
            <div className="profile expand col-xs-2">
                <a href="#" target="_blank" rel="noopener noreferrer">
                    <div className="image-wrapper">
                        <img src={this.props.thumbnail} alt="comic"/>
                    </div>
                    <div className=" info-wrapper">
                        <h5>Placeholder</h5>
                        <h6>Marvel ID: {this.props.id}</h6>
                    </div>
                </a>    
            </div>
        )
    }
}

export default Cover