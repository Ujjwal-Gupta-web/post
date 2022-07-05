import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom"
import { login_user } from '../controllers/user';

const Login = () => {
    
  const navigate = useNavigate();

  let [username, setUsername] = useState("");
  let [password, setPassword] = useState("");

  useEffect(() => {
    if (localStorage.getItem("user")) {
      navigate("/");
    }
  }, [])

  document.body.style.backgroundColor="#595dcff2";

  const handle_login = () => {
    let obj = {
      username,
      password
    }
    login_user(obj).then(data => {
      
      alert(data.message);
      if (data.tag) {
        localStorage.setItem("user", data.token);
        navigate("/");
      }
      else {
        setUsername("");
        setPassword("");
      }
    })
  }

  return (
    <>
      <div className='container border border-lg p-4 mt-5' style={{ maxWidth: "300px", background:"#e9e9e9" }}>
        <h3 className='mb-3'>Login</h3>
        <div class="mb-3">
          <label for="login_username" class="form-label">Username</label>
          <input type="username" class="form-control" value={username} onChange={(e) => setUsername(e.target.value)} id="login_username" />
        </div>
        <div class="mb-3">
          <label for="login_password" class="form-label">Password</label>
          <input type="password" class="form-control" value={password} onChange={(e) => setPassword(e.target.value)} id="login_password" />
        </div>
        <button onClick={handle_login} class="btn btn-secondary">Login</button>
      </div>
    </>
  )
}

export default Login
