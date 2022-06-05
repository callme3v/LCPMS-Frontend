import React, {useState} from "react"
import {Users} from "../../SampleData"


const LoginPage = (props) => {
    const [loginData, setLoginData] = useState({
        email: "",
        password: ""
    })
    const userEmail = Users.map(User => User.email).find(mail => mail === loginData.email)
    const userPassword = Users.map(User => User.password).find(pass => pass === loginData.password)


    const submit = (e) => {
        e.preventDefault()
        if((userEmail === loginData.email) && (userPassword === loginData.password)){
            console.log("Login Successful")
        }else{
            console.log("OOPS wrong email or password!")
        }
    }

    const handle = (e) => {
        const newLoginData = {...loginData}
        newLoginData[e.target.id] = e.target.value
        setLoginData(newLoginData)
        //console.log(newLoginData)

    }

    return (
        <div className="container">
            <h1>LOGIN</h1>
            <form onSubmit={submit}>
                <div>
                    <input type="email" id="email" placeholder="Enter Email" value={loginData.email}
                           onChange={handle}/>
                </div>
                <div>
                    <input type="password" id="password" placeholder="Enter Password" value={loginData.password}
                           onChange={handle}/>
                </div>
                <button type="submit">
                    Login
                </button>
            </form>
        </div>
    )
}

export default LoginPage