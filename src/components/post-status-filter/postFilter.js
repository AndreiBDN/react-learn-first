import React from 'react';
import './post-status-filter.css';


const PostFilter = () => {
    return (
        <div className="btn-group">
            <button type="button" className="btn btn-info">All</button>
            <button type="button" className="btn btn-outline-secondary">Which i liked</button>

        </div>
    )
}

export default PostFilter;