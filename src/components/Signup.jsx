const Signup = () => {
    
    return (
        <div className="signup">
            <h1>Signup</h1>
            <form method="post" action="http://localhost:3000/signup">
                <label htmlFor="username">Username
                <input id="username" name="username" type="text" /></label>
                <label htmlFor="password">Password
                <input id="password" name="password" type="password" required="true" /></label>
                <label htmlFor="password-confirm">Confirm
                <input id="password-confirm" name="password-confirm" type="password" /></label>
                <button type="submit">submit</button>
            </form>
        </div>
    )
}

export default Signup