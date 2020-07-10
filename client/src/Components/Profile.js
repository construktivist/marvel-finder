import React from 'react';
import '../Styles/Profile.css';

// Displays an overview for Marvel Character profile. 
class Profile extends React.Component {
    render () {
        return (
            <div className=" profile row">
                <div className="image-wrapper col-xs-6">
                    <img src={this.props.thumbnail} alt={this.props.name + " Profile Image"}/>
                </div>
                <div className=" info-wrapper col-xs-6">
                    <h2>{this.props.name}</h2>
                    <h4>ID: {this.props.id}</h4>
                    <a href={this.props.profile_url} target="_blank" rel="noopener noreferrer">Marvel Profile</a>
                </div>
            </div>
        )
    }
}

export default Profile;