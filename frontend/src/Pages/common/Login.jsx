function Login(){
    return (
        <div className="my-login">
            <div className="login-container">
            <div className="login-card">
                <h1>Login</h1>
                <form>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" placeholder="enter you email" required/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">password</label>
                        <input type="password" id="password" placeholder="enter your password" required/>
                    </div>
                    <button type="submit" className="login-button">Login</button>
                </form>
                <p className="signup-text">
                    Don't have an account< a href="/signup">sign up</a>
                </p>
            </div>
        </div>
        </div>
        
    )
}

export default Login; 