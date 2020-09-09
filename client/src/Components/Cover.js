import React from 'react';
import Modal from './Modal';
import '../Styles/Cover.css';

// Displays an overview for Marvel Character profile. 
class Cover extends React.Component {
    render () {
        return (
            <div className="cover-modal-wrapper">
                <div className="cover expand col-xs-2" data-toggle="modal" data-target={'#' + this.props.id}>
                        <div className="image-wrapper">
                            <img src={this.props.thumbnail} alt="comic"/>
                        </div> 
                </div>
                <Modal 
                            key={this.props.id}
                            id={this.props.id}
                            marvel_id={this.props.marvel_id}
                            name={this.props.title}
                            description={this.props.description}
                            url={this.props.url}
                            searchType={this.props.searchType}
                        /> 
            </div>
        )
    }
}

export default Cover