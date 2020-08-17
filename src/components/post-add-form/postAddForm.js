import React from 'react';

import './post-add-form.css'

const PostAddForm = ({addItem, addPostText}) => {
    return(
        <div className="bottom-panel d-flex">
            <input onInput={addPostText}
                type="text"
                placeholder="What are you thinking about?"
                className="form-control new-post-label"
            />
            <button onClick={() => addItem("hello")}
            type="submit" 
            className="btn-outline-secondary">
                Add note
            </button>
        </div>
    )
}
export default PostAddForm;