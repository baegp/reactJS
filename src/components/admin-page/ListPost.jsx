import React from 'react'
import Post from './Post'

export default function ListProduct({ post, onRemove, onEdit }) {
  console.log(post);
  return (
    <div>
      <Post onRemove={onRemove} onEdit={onEdit} item={post} />
    </div>
  )
}
