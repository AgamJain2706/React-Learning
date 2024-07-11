import React, { useState, useContext } from 'react'
import UserContext from '../Context/userContext'
const Login = () => {
  const [username, setUserName] = useState("")
  const [Password, setPassword] = useState("")

const {setUser} = useContext(UserContext)

  const HandleSubmit = (e) => {
    e.preventDefault()
    setUser({username,Password})

  }
  return (
    <div>
      <h2>Login</h2>
      <input type="text" 
      value={username}
      onChange={(e)=>setUserName(e.target.value)}
      name="" id="" placeholder='Enter your name ' />
      <input type="Password" 
      value={Password}
      onChange={(e)=>setPassword(e.target.value)}
      name="" id="" placeholder='password' />
      <button onClick={HandleSubmit}>submit</button>
    </div>
  )
}

export default Login