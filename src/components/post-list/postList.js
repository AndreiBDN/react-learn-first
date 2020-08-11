import React from 'react';
import './post-list.css';

import PostItem from '../post-item/postItem';
const PostList = () => {
    return(
        <ul className=" app-list list-group">
            <PostItem />
            <PostItem />
            <PostItem />
        </ul>
    )
}
export default PostList;