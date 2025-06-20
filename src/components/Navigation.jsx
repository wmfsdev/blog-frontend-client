import { Link, Outlet } from "react-router-dom"
import { useState } from "react";

const Navigation = () => {

  const token = localStorage.getItem("token");
  const [ tokenState, setTokenState ] = useState(token)
 
  function logOut() {
    localStorage.clear()
    setTokenState(null)
  }
    
  if (tokenState === null) {
    return (
      <>
      <header>
        <div className="account-nav">
        <h1>
          <Link to="/">A Pleasure to Read...</Link>
        </h1>
        <div className="navigation">
          <Link to="login">LOGIN</Link>
          <Link to="signup">SIGNUP</Link>
        </div></div>
      </header>
      <Outlet context={[ tokenState, setTokenState ]}/>
      </>
    )
  } else return (
    (
    <>
    <header>
      <h1>
        <Link to="/">A Pleasure to Read...</Link>
      </h1>
      <div className="navigation">
        <Link to="/" onClick={logOut}>LOGOUT</Link>
      </div>
    </header>
    <Outlet context={[ tokenState, setTokenState ]}/>
    </>
    )
  )
}

export default Navigation