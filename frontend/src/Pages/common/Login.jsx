import axios from "axios";
import { useState } from "react";

function Login(){

    const [email, setEmail]= useState("");
    const [password, setPassword] = useState("");

    const handleSubmit =(e)=>{
        e.preventDefault();
    }

    axios.post("http://localhost:3000/login",{email, password})
    .then((result)=>{
        if(result.data.message ==="Login successfully"){
            alert("login successfully");
            navigate("/home")
        }else{
            alert(result.data.message)
        }
    }).catch((err)=>console.error(err))

    return (
        <div className="my-login">
            <div className="login-container">
            <div className="login-card">
                <h1>Login</h1>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" placeholder="enter you email" onChange={(e)=>setEmail(e.target.value)} required/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">password</label>
                        <input type="password" id="password" placeholder="enter your password" onChange={(e)=>setPassword(e.target.value)} required/>
                    </div>
                    <button type="submit" className="login-button">Login</button>
                </form>
                <p className="signup-text">
                    Don't have an account < a href="/signup">sign up</a>
                </p>
            </div>
        </div>
        </div>
        
    )
}

export default Login; 