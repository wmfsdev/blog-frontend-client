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
      <h1>BLOG</h1>
      <div className="navigation">
        <Link to="/">ARTICLES</Link>
        <Link to="login">LOGIN</Link>
        <Link to="signup">SIGNUP</Link>
      </div>
      <Outlet context={[ tokenState, setTokenState ]}/>
      </>
    )
  } else return (
    (
    <>
    <h1>BLOG</h1>
    <div className="navigation">
      <Link to="/">ARTICLES</Link>
      <Link to="/" onClick={logOut}>LOGOUT</Link>
    </div>
    <Outlet context={[ tokenState, setTokenState ]}/>
    </>
    )
  )
}




export default Navigation