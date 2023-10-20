import React, { useState } from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

const Login = () => {

  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  let navigate = useNavigate()

  const LoginFunction =(e) => {
    e.preventDefault();
axios
.post("http://localhost:9090/user/login", {
  email,
  password
})
.then ((res) => {console.log(res.data);
localStorage.setItem("token", res.data)
navigate('/')})
.catch((err) => {console.log(err.message);
alert("Something Went Wrong, Check Your Credentials")})

  }

  return (
    <div>
        <h1>Login Form</h1>
        <form onSubmit={LoginFunction}>
            <div>
                <label htmlFor="email">email</label>
                <input type='email' name='email' id='email' onChange={(e) => setemail(e.target.value)}/>
            </div>
            <div>
                <label htmlFor="password">password</label>
                <input type='password' name='password' id='password' onChange={(e) => setpassword(e.target.value)}/>
            </div>
            <input type='submit'/>
        </form>
    </div>
  )
}

export default Login;