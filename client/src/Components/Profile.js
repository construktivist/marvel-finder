import React from 'react';
import Modal from './Modal';
import '../Styles/Profile.css';

// Displays an overview for Marvel Character profile. 
class Profile extends React.Component {
    render () {
        return (
            <div className="profile-modal-wrapper">
                <div className="profile expand col-xs-2" data-toggle="modal" data-target={'#' + this.props.id}>
                        <div className="image-wrapper">
                            <img src={this.props.thumbnail} alt={this.props.name + " Profile Image"}/>
                        </div>
                        <div className=" info-wrapper">
                            <h5>{this.props.name}</h5>
                        </div> 
                </div>
                <Modal 
                    key={this.props.id}
                    id={this.props.id}
                    marvel_id={this.props.marvel_id}
                    name={this.props.name}
                    description={this.props.description}
                    profile_url={this.props.profile_url}
                />  
            </div>
        )
    }
}

export default Profile;