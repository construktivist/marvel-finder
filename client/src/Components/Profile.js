import React from 'react';
import '../Styles/Profile.css';

// Displays an overview for Marvel Character profile. 
class Profile extends React.Component {
    render () {
        return (
            <div className="profile expand col-xs-2" data-toggle="modal" data-target="#overviewModal">
                <a href={this.props.profile_url} target="_blank" rel="noopener noreferrer">
                    <div className="image-wrapper">
                        <img src={this.props.thumbnail} alt={this.props.name + " Profile Image"}/>
                    </div>
                    <div className=" info-wrapper">
                        <h5>{this.props.name}</h5>
                        <h6>Marvel ID: {this.props.id}</h6>
                    </div>
                </a>    
            </div>
        )
    }
}

export default Profile;