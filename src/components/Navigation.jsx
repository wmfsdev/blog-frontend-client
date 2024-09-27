import { Link, Outlet } from "react-router-dom"

const Navigation = () => {

    return (
      <>
      <div className="navigation">
        <Link to="/">Home</Link>
        <Link to="login">Login</Link>
        <Link to="signup">Signup</Link>
      </div>
      <Outlet />
      </>
    )
}

export default Navigation