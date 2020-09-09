import React from 'react';
import { Link } from 'react-router-dom'


class Modal extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            link: '/comics',
            label: 'Comics'
        }
    }

    componentDidMount () {
        if (this.props.searchType == 'comic') {
            const newLink = '/characters';
            const newLabel = 'Character';
            this.setState({
                link: newLink,
                label: newLabel
            })
        }
        else {
            return;
        }
    }

    render () {
        return (
            <div className="modal fade" id={this.props.id} tabIndex="-1" role="dialog" aria-labelledby={this.props.id}>
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="modalTitle">{this.props.name}</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <p>Marvel ID: {this.props.marvel_id}</p>
                        <p>{this.props.description}</p>
                        <a href={this.props.url} target="_blank">Marvel.com</a>
                        <br />
                        <Link to={this.state.link}>{this.state.label}</Link>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                    </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default Modal;