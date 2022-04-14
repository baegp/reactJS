import React from 'react'
import './Category.css'
function PostCategory({ _id, name, onEdit, onRemove }) {
    const onHandleEdit = (item) => {
        onEdit(item)
    }

    return (
        <div>
            <div className="ten">{name}</div>
            <div style={{ display: 'inline-block' }}>
                <button style={{ width: "45%", margin: '5px' }} onClick={() => onHandleEdit({
                    name, _id
                })} className="btn btnPrimary" >Sửa </button>
                <button style={{ width: "48%" }} onClick={() => onRemove(_id)} className="btn btnPrimary" >xoa</button>
            </div>
        </div >
    )
}


export default PostCategory