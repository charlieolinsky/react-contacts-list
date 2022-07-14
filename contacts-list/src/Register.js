import React from 'react'
import './Register.css'

const Register = () => {
    return (
        <form action="http://localhost:5000" method="GET">
            <h1>Create a New User</h1>
            
            <label>Username: </label>
            <input type="text" />
            
            <label>Password: </label>
            <input type="text" />
            <input type="submit" value="Submit"/>
        </form>
    )
}

export default Register; 