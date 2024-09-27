import { useState } from "react"
import { useNavigate } from "react-router-dom"

const Login = () => {
    
    // authenticates - expect server response with signed token
    // set token as header auth in local storage
    const [ error, setError ] = useState(false)
    const navigate = useNavigate()

    function handleSubmit(e) {
        e.preventDefault()
        const data = new FormData(e.target)
        const username = data.get("username")
        const password = data.get("password")
        login(username, password)
    }

    async function login(username, password) {
        try {
            console.log("login click attempt")
            const response = await fetch('http://localhost:4000/login-form', {
                method: "POST",
                body: JSON.stringify({
                    username: username,
                    password: password,
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
            // unauthenticated
            if (response.status === 401) {
                console.log("client unauthenticated")
                const unauth = await response.json()
                console.log("unauth response", unauth)
                // set unauthorised error message
                setError(unauth[0].message)
                return
            }
            if (response.status === 200) {
                const token = await response.json()
                console.log("react token log", token)
                const key = Object.keys(token)
                const value = Object.values(token)
                localStorage.setItem(key, value)
                console.log("success: login")
                navigate("/")
            } else {
                // validation error handling
                const errors = await response.json()
                const status = await response.status
                console.log("validation errors", status, errors)
                // set validation error message
                setError(errors[0].msg)
            }
        } catch(err) {
            // probably should some generic error status/message... 500?
            console.log("catch err")
            console.log(err)
        }
    }
    // need to add validation to form
    return (
        <div className="login">
            <h1>Login</h1>
            <form method="post" onSubmit={handleSubmit}>
                <label htmlFor="username">Username
                <input name="username" type="text" required={true} /></label>
                <label htmlFor="password">Password
                <input name="password" type="password" required={true} /></label>
                <button type="submit">submit</button>
            </form>
            {/*need a way to distinguish between array of errors and non array*/}
            { error && <p>{error}</p> }
        </div>    
    )
}

export default Login