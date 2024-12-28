import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios
            .post("http://localhost:3000/login", { email, password })
            .then((result) => {
                if (result.data?.message === "Login successfully") {
                    alert("Login successfully");
                    navigate("/home");
                } else {
                    alert(result.data?.message || "An unexpected error occurred.");
                }
            })
            .catch((err) => {
                alert("An error occurred while trying to log in. Please try again.");
                console.error(err);
            });
    };

    return (
        <div className="my-login">
            <div className="login-container">
                <div className="login-card">
                    <h1>Login</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                placeholder="Enter your email"
                                autoComplete="email"
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                id="password"
                                placeholder="Enter your password"
                                autoComplete="current-password"
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        <button type="submit" className="login-button">
                            Login
                        </button>
                    </form>
                    <p className="signup-text">
                        Don't have an account? <a href="/signup">Sign up</a>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Login;
