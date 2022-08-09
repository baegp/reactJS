import React, { useEffect, useState } from 'react'
import './Category.css'

function EditCategoory({ onSubmit, item, openShowEdit, setOpenShowEdit }) {
    const clickCloseEdit = () => {
        setOpenShowEdit(false)
    }
    const { name } = item;

    const [post, setPost] = useState({
        name: item.name || ''
    })

    useEffect(() => {
        setPost(item)
    }, [item])

    const onChangeText = (event) => {
        console.log('onChangeText', event)
        setPost({ ...post, [event.target.name]: event.target.value })
    }

    const onClickButton = (event) => {
        onSubmit({ ...item, ...post, id: item.id })
        setOpenShowEdit(false)
    }
    return (
        <div>
            {
                openShowEdit && (
                    <div id="pop-up-sua-sp">
                        <div className="sua-sp">
                            <h1>Chỉnh sửa thông tin danh muc</h1>

                            <label htmlFor="ten">Tên sản phẩm</label>
                            <input onChange={onChangeText} defaultValue={name} type="text" name="name" id="sua-ten-sp" />
                            <div className="khoi-button">
                                <button onClick={onClickButton} className="btn btnPrimary btn-left">Lưu</button>
                                <button onClick={clickCloseEdit} className="btn btnPrimary">Hủy</button>
                            </div>
                        </div>

                    </div>
                )
            }
        </div>
    )
}

export default EditCategoory