import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { API_FORGET_PASSWORD } from '../../utils/const';

export default function ForgetPassword() {
  const navigate = useNavigate();

  const [data, setData] = useState({
    email: ""
  })

  const onSendPassword = async (e) => {
    e.preventDefault()
    await axios.post(API_FORGET_PASSWORD, data).then(res => {
      toast.success('gui mail thanh cong', {
        position: 'bottom-left',
        autoClose: 3000
      })
      console.log(res.data.token);
      navigate('/login')
    })
  }


  return (
    <div>
      <form>
        <div style={{ marginBottom: "-170px" }} className="center-container">
          {/*header*/}
          <div className="header-w3l">
            <h1>Forget Password</h1>
          </div>
          {/*//header*/}
          <div className="main-content-agile">
            <div className="sub-main-w3">
              <div className="wthree-pro">
                <h2>Forget Password</h2>
              </div>
              <div className="pom-agile">
                <input onChange={e => setData({ ...data, email: e.target.value })} placeholder="E-mail" name="Name" className="user" type="email" required />
                <span className="icon1"><i className="fa fa-user" aria-hidden="true" /></span>
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
                <Link to="/login">
                  <a style={{ color: "white" }} href="#">Do you have an account, Login?</a>
                </Link>
              </div>
              <div style={{ marginTop: "-20px" }} className="sub-w3l">
                <h6><a href="#"></a></h6>
                <div className="right-w3l">
                  <input type="submit" onClick={(e) => onSendPassword(e)} defaultValue="forgetpassword" />
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
