import React, { useState } from 'react'
import './Category.css'

function CreateCategory({ item, onSubmit }) {
    const [openAddProduct, setOpenAddProduct] = useState(false);
    const handleShowAddProduct = () => {
        setOpenAddProduct(true)
    }

    const handlCloseAddProduct = () => {
        setOpenAddProduct(false)
    }

    // 
    const [post, setPort] = useState(item || {
        name: ''
    })

    const onChangeText = (event) => {
        console.log('onChangeText', event)
        setPort({ ...post, [event.target.name]: event.target.value })
    }

    const onClickButton = (event) => {
        onSubmit(post)
        setOpenAddProduct(false)
    }

    return (
        <div>
            <section className="them-sp-fake">
                <div className="container-sp">
                    <div className="content-them-sp">
                        <h1>Danh muc</h1>
                        <button onClick={handleShowAddProduct} className="btn btnPrimary">Thêm danh muc</button>
                    </div>
                </div>
            </section>

            {openAddProduct && (<div id="pop-up-them-sp">
                <div id="out-them-sp" className="them-sp">
                    <h1>Nhập thông tin danh muc</h1>

                    <div className="form-group">
                        <label htmlFor="ten">Tên sản phẩm</label>
                        <input onChange={onChangeText} placeholder="Nhập tên sản phẩm" type="text" name="name" id="ten-sp" />
                        <span className="form-message" />
                    </div>

                    <div className="khoi-button">
                        <button onClick={onClickButton} className="btn btnPrimary btn-left" >Tạo danh muc mới</button>
                        <button onClick={handlCloseAddProduct} className="btn btnPrimary">Hủy</button>
                    </div>
                </div>
            </div>
            )}

        </div>
    )
}

export default CreateCategory