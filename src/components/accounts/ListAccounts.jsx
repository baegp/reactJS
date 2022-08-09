import React, { useState, useEffect } from 'react'
import PostAccounts from './PostAccounts';

export default function ListAccounts({ post, onRemove, onEdit }) {
    return (
        <div>
            <PostAccounts post={post} onRemove={onRemove} onEdit={onEdit} />

        </div>
    )
}
