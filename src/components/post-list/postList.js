import React from 'react';
import './post-list.css';

import PostItem from '../post-item/postItem';

import styled from 'styled-components';

const Ul = styled.ul`
 color: "orange"
`



const PostList = ({posts, onDelete, onToggleLike, onToggleImportant}) => {
    const elements = posts.map((post) => {
        if(typeof post === 'object' && isEmpty(post)){
            const {id, ...postProps} = post
        return (
            <li key={id} className="list-group-item">
                 <PostItem 
                 {...postProps}
                  onDelete={() => onDelete(id)}
                  onToggleImportant={() => onToggleImportant(id)}
                  onToggleLike={() => onToggleLike(id)}
                 />
    
            </li>
        )
        }

        
    })

    function isEmpty(obj) {
        for(let key in obj)
        {
            return true;
        }
        return false;
    }
    
    return(
        <ul className=" app-list list-group">
            {elements}
        </ul>
    )
}
export default PostList;