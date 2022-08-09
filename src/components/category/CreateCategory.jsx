import React, { useState } from 'react'
import './Category.css'
import { useForm } from "react-hook-form";
import { useFormik } from 'formik';
import * as yup from "yup";
function CreateCategory({ item, onSubmit }) {
    const [openAddProduct, setOpenAddProduct] = useState(false);
    const [isDisabled, setDisabled] = useState(false);

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

    const formik = useFormik({
        initialValues: {
            ...post
        },
        validationSchema: yup.object({
            name: yup.string().required("Name category is required")
        }),
        onSubmit: () => {
            // onsubmit(formik.values)
        },
    });


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

            {openAddProduct && (
                <form onSubmit={formik.handleSubmit}>

                    <div id="pop-up-them-sp">
                        <div id="out-them-sp" className="them-sp">
                            <h1>Nhập thông tin danh muc</h1>

                            <div className="form-group">
                                <label htmlFor="ten">Tên sản phẩm</label>
                                <input
                                    // value={formik.values.name}
                                    // onBlur={formik.handleBlur}
                                    // helperText={formik.touched.name && formik.errors.name}
                                    // errors={Boolean(formik.touched.name && formik.errors.name)}
                                    onChange={onChangeText}
                                     placeholder="Nhập tên sản phẩm" type="text" name="name" id="ten-sp" />
                            </div>

                            <div className="khoi-button">
                                <button disabled={formik.isSubmitting} onClick={onClickButton} className="btn btnPrimary btn-left" >Tạo danh muc mới</button>
                                <button onClick={handlCloseAddProduct} className="btn btnPrimary">Hủy</button>
                            </div>
                        </div>

                        {/* <input onChange={e => this.setState({ value: e.target.value })} value={this.state.value} />
                    <button disabled={!this.state.value} /> */}


                    </div>
                </form>
            )}

        </div>
    )
}

export default CreateCategory