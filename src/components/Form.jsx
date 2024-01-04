import React, { useState } from 'react'

const Form = () => {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    // console.log(email)
    const handleChange = (e) => {
       setEmail(e.target.value) 
    }

    const handleSubmit = () =>{
        console.log(`username:${username}, email:${email}, password:${password}`)
        alert(`username:${username}, email:${email}, password:${password}`)
       
    }
 
    // console.log(password)

  return (
    <div>
        <form action="" onSubmit={handleSubmit}>
            <div>
                <label htmlFor="">Username:</label>
                <input type="text" 
                    onChange={(e)=>setUsername(e.target.value)}
                    value={username}
                />
                <p>{username}</p>
            </div>
            <div>
                <label htmlFor="">Email:</label>
                <input type="email" 
                    onChange={handleChange}
                    value={email}
                />
            </div>
            <div>
                <label htmlFor="">Password:</label>
                <input type="password"
                onChange={(e)=> setPassword(e.target.value)}
                value={password} />
            </div>
            <button type="submit"> Submit</button>
        </form>
    </div>
  )
}

export default Form