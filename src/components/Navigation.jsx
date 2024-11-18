import { Link, Outlet } from "react-router-dom"

const Navigation = () => {

    return (
      <>
      <h1>BLOG</h1>
      <div className="navigation">
        <Link to="/">HOME</Link>
        <Link to="login">LOGIN</Link>
        <Link to="signup">SIGNUP</Link>
      </div>
      <Outlet />
      </>
    )
}

export default Navigation