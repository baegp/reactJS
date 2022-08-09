import React from 'react'
import PostCategory from './PostCategory'
import './Category.css'
import { Table } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
function ListPostCategory({ post, onRemove, onEdit }) {

    return (
        <div>
            <PostCategory post={post} onRemove={onRemove} onEdit={onEdit} />
        </div>
    )
}

export default ListPostCategory