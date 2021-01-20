import React from 'react';


class ViewMoreButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            offset: 0,
        }
    }

    handleClick = (e) => {
        // e.preventDefault();
        let currentOffset = this.state.offset;
        const newOffset = currentOffset += 24;
        this.setState({
            offset: newOffset
        }, () => this.props.updateOffset(this.state.offset))
        // return false;
    }

    render () {
        return (
            <button onClick={this.handleClick} className="btn btn-primary">View More</button>
        )
    }
}

export default ViewMoreButton;