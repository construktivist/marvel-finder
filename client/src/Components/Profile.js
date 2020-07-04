import React from 'react';

class Profile extends React.Component {
    render () {
        return (
            <div>
                <h2>{this.props.name}</h2>
                <h3>ID: {this.props.id}</h3>
                <a href={this.props.profile_url} target="_blank" rel="noopener noreferrer">Marvel Profile</a>
                <br></br>
                <img src={this.props.thumbnail} alt={this.props.name + " Profile Image"} style={{width: "100px"}}/>
            </div>
        )
    }
}

export default Profile;