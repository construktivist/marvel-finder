import React from 'react';

import '../Styles/Loading.css';

class Loading extends React.Component {
    render () {
        return (
            <div className="loading">
                    <div class="spinner-border" role="status">
                        <span class="sr-only">Loading...</span>
                    </div>
                    <p>LOADING...</p>
            </div>
        )
    }
}

export default Loading;