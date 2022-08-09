import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import "./header.css"
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import HomePage from './../home-page/HomePage';
import { API_CATEGORIES } from '../../utils/const';
import axios from 'axios';
import { getAPI } from '../../utils/api';
import LogoutIcon from '@mui/icons-material/Logout';
import { toast } from 'react-toastify';
export default function Header() {
    // const [brand, setBrand] = useState([]);
    const [valueState, setValueState] = useState("")
    const [data, setData] = useState([]);

    const [showSearch, setShowSearch] = useState(false)
    const [UserData, setUserData] = useState({ name: "" })

    useEffect(() => {
        let TempListCart = localStorage.getItem("user")
        if (TempListCart != undefined) {
            let ListCart = []
            ListCart = JSON.parse(TempListCart)
            setUserData(ListCart)
        }
        fetchAPI()
    }, [])

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const handler = (event) => {
        const value = event.target.value
        console.log(value);
        setValueState(value)
        console.log(value);
    }

    const fetchAPI = async () => {
        const result = await getAPI(API_CATEGORIES);
        if (result) {
            setData(result)
        }
        console.log('categories:', result);
    }

    const logout = () => {
        let testuser = localStorage.getItem('user')
        let list = []
        list = JSON.parse(testuser)
        console.log('ac', list);
        localStorage.removeItem('user')

        toast.success('Dang xuat thanh cong', {
            position: 'bottom-left',
            autoClose: 3000
        })
    }

    return (
        <header id="header">

            <nav className="nav-bar">
                <div className="container">
                    <div className="logo">
                        <Link to="/">
                            <h1><span>GP</span> SHOP</h1>
                        </Link>
                    </div>
                    <div style={{ marginBottom: '20px' }} className="menu">
                        <ul className="menu-level-1">

                            <li className="item-menu-level-1">
                                <i id="popup-btn"> <i style={{ color: "#ffffff" }} className="fas fa-" /></i>
                                <div className="">
                                    <div className="popup-content">
                                        <a style={{ color: "#FFFFFF" }} href="#"><span className="close-btn">a</span></a>
                                        <div className="khoitim">
                                            {
                                                showSearch && (
                                                    <input id="search" type="search" placeholder="Search" />
                                                )
                                            }
                                            {/* <button onClick={handlShowSearch}> </button> */}
                                        </div>
                                    </div>
                                </div>
                            </li>



                            <li className="item-menu-level-1">
                                <Link to="/" id="home" className="title-item-menu-level-1">HOME</Link>
                            </li>
                            <li className="item-menu-level-1">

                                <div>
                                    <a style={{ fontFamily: "Montserrat" }}
                                        href="#" className="title-item-menu-level-1"
                                        id="basic-button"
                                        aria-controls={open ? 'basic-menu' : undefined}
                                        aria-haspopup="true"
                                        aria-expanded={open ? 'true' : undefined}
                                        onClick={handleClick}
                                    >
                                        DANH MỤC SẢN PHẨM
                                    </a>


                                    <Menu onChange={handler} value={valueState}
                                        id="basic-menu"
                                        anchorEl={anchorEl}
                                        open={open}
                                        onClose={handleClose}
                                        MenuListProps={{
                                            'aria-labelledby': 'basic-button',
                                        }}>
                                        {
                                            data.map((item, index) => (
                                                <MenuItem value={item.id} onClick={handleClose}>{item.name}</MenuItem>
                                            ))
                                        }
                                        {/* < MenuItem onClick={handleClose}>Profile</MenuItem> */}
                                    </Menu>


                                </div>
                                {/* {
                                    showMenu && (
                                        <ul className="menu-level-2">
                                            <div className="khoi-1">
                                                <h3>DANH MỤC SẢN PHẨM</h3>
                                                <li className="item-menu-level-2">
                                                    <i className="fas fa-angle-right" />
                                                    <a href="#" className="title-item-menu-level-2">Đồ lưu niệm mixi</a>
                                                </li>
                                            </div>
                                        </ul>
                                    )
                                } */}
                            </li>
                            <li className="item-menu-level-1">
                                <a href="#" className="title-item-menu-level-1">THÔNG BÁO</a>
                            </li>
                        </ul>
                    </div>
                    <div className="mua-hang">
                        <div className="sdt">
                            <i className="fas fa-user-cog" />
                            <Link to="/admin">ADMIN</Link>
                        </div>
                        <div id="cc" className="gio-hang">
                            <Link to="/cart">GIỎ HÀNG</Link>
                            <a href="../html/cart.html"><i className="fas fa-shopping-cart" /></a>

                        </div>
                        <div id="cc" className="gio-hang login">
                            {UserData.name == "" ? <Link to="/login">Login</Link> : <div style={{ '&:hover': { color: "red" } }}>Hi: {UserData.name}  </div>}
                        </div>
                        <div style={{ display: "inline-block", marginLeft: "8px", marginBottom: "-50px" }}>
                            {UserData.name == "" ? <></> : <div onClick={logout}><LogoutIcon /></div>}
                        </div>
                    </div>
                </div>
            </nav>
        </header >


    )
}
