function Signup (){
    return(
        <div className="my-login">
            <div className="login-container">
            <div className="login-card">
                <h1>Signup</h1>
                <form>
                    <div className="form-group">
                        <label htmlFor="firstname">First Name</label>
                        <input type="text" id="firstName" placeholder="first Name" required/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="lastname">Last Name</label>
                        <input type="text" id="lastName" placeholder="Last Name" required/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" placeholder="enter you email" required/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">password</label>
                        <input type="password" id="password" placeholder="enter your password" required/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="confirmpassword">Confirm password</label>
                        <input type="password" id="confirmPassword" placeholder="confirm your password" required/>
                    </div>
                    <button type="submit" className="login-button">Signup</button>
                </form>
                <p className="signup-text">
                    I have an account < a href="/login">login</a>
                </p>
            </div>
        </div>
        </div>
    )
}

export default Signup;