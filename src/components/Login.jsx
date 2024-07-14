import { useState } from "react"

const Login = () => {
    
    // authenticates - expect server response with signed token
    // set token as header auth in local storage
    const [ error, setError ] = useState(false)

    function handleSubmit(e) {
        e.preventDefault()
        const data = new FormData(e.target)
        const username = data.get("username")
        const password = data.get("password")
        login(username, password)
    }

    async function login(username, password) {
        try {
            const response = await fetch('http://localhost:3000/signin', {
                method: "POST",
                body: JSON.stringify({
                    username: username,
                    password: password,
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })

            if (response.status === 200) {
                const token = await response.json()
                const key = Object.keys(token)
                const value = Object.values(token)
                localStorage.setItem(key, value)
                // redirect
            } else {
                const errMessage = await response.json()
                setError(errMessage) 
            }
        } catch(err) {
            console.log(err)
        }
    }
    // need to add validation to form
    return (
        <div className="login">
            <h1>Login</h1>
            <form method="post" onSubmit={handleSubmit}>
                <label htmlFor="username">Username
                <input id="username" name="username" type="text" required={true} /></label>
                <label htmlFor="password">Password
                <input id="password" name="password" type="password" required={true} /></label>
                <button type="submit">submit</button>
            </form>
            { error && <p>{error.message}</p> }
        </div>    
    )
}

export default Login