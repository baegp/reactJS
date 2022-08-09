import React, { useState, useEffect } from 'react'
// import '../Category.css'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
export default function EditAccount({ onSubmit, item, openShowEdit, setOpenShowEdit }) {
    const [valueState, setValueState] = useState("")

    const clickCloseEdit = () => {
        setOpenShowEdit(false)
    }
    const { name, email, role, password } = item;

    const [post, setPost] = useState({
        email: item.email || '',
        name: item.name || '',
        password: item.password || '',
        role: item.role || ''
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


    const handler = (event) => {
        const value = event.target.value
        setPost({ ...post, role: (value) })
        setValueState(value)
        console.log(value);
    }

    const roles = [
        {
            name: "User",
            value: "user",
        },
        {
            name: "Admin",
            value: "admin",
        },
    ]

    return (
        <div>
            <div>
                {
                    openShowEdit && (
                        <div id="pop-up-sua-sp">
                            <div className="sua-sp">
                                <h1>Edit account</h1>
                                <label htmlFor="ten">Email</label>
                                <input onChange={onChangeText} defaultValue={email} type="email" name="email" id="sua-ten-sp" />
                                <label htmlFor="ten">Name</label>
                                <input onChange={onChangeText} defaultValue={name} type="text" name="name" id="sua-ten-sp" />
                                <label htmlFor="ten">Password</label>
                                <input onChange={onChangeText} defaultValue={password} type="text" name="password" id="sua-ten-sp" />


                                <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                                    <InputLabel id="demo-select-small">Role</InputLabel>
                                    <Select
                                        labelId="demo-select-small"
                                        id="demo-select-small"
                                        value={valueState}
                                        label="Role"
                                        onChange={handler}
                                    >
                                        {
                                            roles.map((item) => (
                                                <MenuItem value={item.value}>{item.name}</MenuItem>
                                            ))
                                        }
                                    </Select>
                                </FormControl>
                                <div className="khoi-button">
                                    <button onClick={onClickButton} className="btn btnPrimary btn-left">Lưu</button>
                                    <button onClick={clickCloseEdit} className="btn btnPrimary">Hủy</button>
                                </div>
                            </div>

                        </div>
                    )
                }
            </div>
        </div>
    )
}
