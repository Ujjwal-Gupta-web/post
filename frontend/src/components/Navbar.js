import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { get_user } from '../controllers/user';

const Navbar = () => {
  let navigate = useNavigate();
  let [user, setUser] = useState({});
  useEffect(() => {
    if (localStorage.getItem("user"))
      get_user().then(data => setUser(data.message));
  }, [])
  return (
    <>
      <div className='bg-white p-3 text-center d-flex align-items-center justify-content-between'>
        <div><Link className='text-dark text-decoration-none' to="/"><b>Assignment</b></Link></div>
        <div className='d-flex align-items-center justify-content-between'>
          {
            localStorage.getItem("user")
              ?
              <>
                <div className='mx-2' style={{ cursor: "pointer" }}>{user.username}</div>
                <div className='mx-2 text-danger' style={{ cursor: "pointer" }} onClick={() => { localStorage.removeItem("user"); navigate("/login"); }}>Logout</div>
              </>
              :
              <div><Link className='text-dark text-decoration-none' to="/login"><b>Login</b></Link></div>
          }
        </div>
      </div>
    </>
  )
}

export default Navbar