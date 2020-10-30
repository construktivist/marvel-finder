import React from 'react';


class ViewMoreButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            offset: 0,
        }
    }

    handleClick = () => {
        const newOffset = this.state.offset += 20;
        this.setState({
            offeset: newOffset
        }, () => this.props.updateOffset(this.state.offset))
    }

    render () {
        return (
            <button onClick={this.handleClick} className="btn btn-primary">View More</button>
        )
    }
}

export default ViewMoreButton;