import './login.css'
import { API_USER_LOGIN } from '../../utils/const';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";

import axios from 'axios';
export default function Login() {
    const navigate = useNavigate();
    const [data, setData] = useState({
        email: "",
        password: ""
    });

    const onLogin = async (e) => {
        e.preventDefault();
        const reponse = await axios.post(API_USER_LOGIN, data)
        if (reponse && reponse.status === 200) {
            localStorage.setItem('token', reponse?.data.token)
            localStorage.setItem('user', JSON.stringify(reponse.data))
            toast.success('dang nhap thanh cong', {
                position: 'bottom-left',
                autoClose: 3000
            })
            navigate('/')

        } else if (reponse && reponse.status === 403) {
            toast.warning('tai khoan hoac mat khau khong chinh xac', {
                position: 'bottom-left',
                autoClose: 3000
            })
        }
    }

    return (
        <div>
            <form>
                <div style={{ marginBottom: "-170px" }} className="center-container">
                    {/*header*/}
                    <div className="header-w3l">
                        <h1>Login</h1>
                    </div>
                    {/*//header*/}
                    <div className="main-content-agile">
                        <div className="sub-main-w3">
                            <div className="wthree-pro">
                                <h2>Login </h2>
                            </div>
                            <div className="pom-agile">
                                <input onChange={e => setData({ ...data, email: e.target.value })} placeholder="E-mail" name="Name" className="user" type="email" required />
                                <span className="icon1"><i className="fa fa-user" aria-hidden="true" /></span>
                            </div>
                            <div style={{ marginTop: "-5px" }} className="pom-agile">
                                <input onChange={e => setData({ ...data, password: e.target.value })} placeholder="Password" name="Password" className="pass" type="password" required />
                                <span className="icon2"><i className="fa fa-unlock" aria-hidden="true" /></span>
                            </div>

                            <Link to="/register">
                                <a style={{
                                    color: "white",
                                    "&:hover": {
                                        color: "#333"
                                    }
                                }} href="#">Create an accout?</a>
                            </Link>
                            <div>
                                <Link to="/forgetpassword">
                                    <a style={{ color: "white" }} href="#">Forget password?</a>
                                </Link>
                            </div>
                            <div style={{marginTop: "-20px"}} className="sub-w3l">
                                <h6><a href="#"></a></h6>
                                <div className="right-w3l">
                                    <input type="submit" onClick={(e) => onLogin(e)} defaultValue="Login" />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*//main*/}
                </div>
            </form>
        </div>
    )
}
