import './login.css'
import React, { useState } from 'react'
import axios from 'axios';
import { API_USER_REGISTER } from '../../utils/const';
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";
import DnsIcon from '@mui/icons-material/Dns';
export default function Register() {
    const navigate = useNavigate();

    const [data, setData] = useState({
        name: "",
        role: "user",
        email: "",
        password: ""
    });

    const onRegister = async (e) => {
        e.preventDefault();

        await axios.post(API_USER_REGISTER, data).then(res => {
            toast.success('dang ky thanh cong', {
                position: 'bottom-left',
                autoClose: 3000
            })
            console.log(res.data.token);
            navigate('/login')
        });

    }

    return (
        <div>
            <form>
                <div style={{marginBottom:"-170px"}} className="center-container">
                    {/*header*/}
                    <div className="header-w3l">
                        <h1>Create an accout</h1>
                    </div>
                    {/*//header*/}
                    <div className="main-content-agile">
                        <div className="sub-main-w3">
                            <div className="wthree-pro">
                                <h2>Register </h2>
                            </div>
                            <div className="pom-agile">
                                <input onChange={e => setData({ ...data, name: e.target.value })} placeholder="name" name="Name" className="user" type="text" required />
                                <span className="icon1"><i className="fa fa-user" aria-hidden="true" /></span>
                            </div>
                            <div className="pom-agile">
                                <input onChange={e => setData({ ...data, email: e.target.value })} placeholder="E-mail" name="Name" className="user" type="email" required />
                                <span className="icon1"><i className="fa fa-user" aria-hidden="true" /></span>
                            </div>
                            <div style={{marginTop:"-8px"}} className="pom-agile">
                                <input onChange={e => setData({ ...data, password: e.target.value })} placeholder="Password" name="Password" className="pass" type="password" required />
                                <span className="icon2"><i className="fa fa-unlock" aria-hidden="true" /></span>
                            </div>
                            <Link to="/login">
                                <a style={{color: "white"}} href="#">Do you have an account? Login?</a>
                            </Link>
                            <div style={{marginTop: "-15px"}} className="sub-w3l">
                                <h6><a href="#"></a></h6>
                                <div className="right-w3l">
                                    <input type="submit" onClick={(e) => onRegister(e)} defaultValue="Login" />
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
