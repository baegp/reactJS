import React from 'react'
import PostCategory from './PostCategory'
import './Category.css'

function ListPostCategory({ post, onRemove, onEdit }) {
    return (
        <div>
            {post && post.length && post.map((item, index) => {
                return (
                    <div className='sanpham'>
                        <PostCategory key={index} onRemove={onRemove} onEdit={onEdit} {...item} />
                    </div>

                )
            })}
        </div>
    )
}

export default ListPostCategory