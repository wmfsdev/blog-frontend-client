import { useState } from "react"
import { useNavigate } from "react-router-dom"

const Signup = () => {

  const [ error, setError ] = useState(false)
  const navigate = useNavigate()

  function handleSubmit(e) {
    e.preventDefault()
    const data = new FormData(e.target)
    const username = data.get("username")
    const password = data.get("password")
    const confirmPwd = data.get("password_confirm")
    signup(username, password, confirmPwd)
  }

  async function signup(username, password, confirmPwd) {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/signup-form`, {
        method: "POST",
        body: JSON.stringify({
            username: username,
            password: password,
            confirm: confirmPwd,
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
        navigate("/")
      }

      if (response.status === 422) {
        const errors = await response.json()
        setError(errors)
      }
    } catch(err) {
      console.log(err)
    }
  }
  
  return (
    <div className="signup">
      <h1>Signup</h1>
      <form method="post" onSubmit={handleSubmit}>
        <label htmlFor="username">Username
        <input pattern="[A-Za-z0-9]{5,18}" id="username" name="username" type="text" required="true" /></label>
        <label htmlFor="password">Password
        <input id="password" name="password" type="password" minLength="6" maxLength="25" required="true" /></label>
        <label htmlFor="password_confirm">Confirm
        <input id="password_confirm" name="password_confirm" type="password" required="true" /></label>
        <button type="submit">submit</button>
      </form>
      { error && error.map((item, index) => <p key={index}>{item.msg}</p> )}
    </div>
  )
}

export default Signup