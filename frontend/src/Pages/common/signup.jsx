import { useState } from "react";
import axios from "axios";

function Signup() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [gender, setGender] = useState("");
  const [role, setRole] = useState("user");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      return alert("Passwords do not match");
    }

    if (!gender) {
      return alert("Please select your gender");
    }

    axios
      .post("http://localhost:3000/addUser", { firstName, lastName, phoneNo, email, gender, password, role })
      .then((result) => console.log(result.data))
      .catch((err) => console.log(err));
  };

  return (
    <div className="my-login">
      <div className="login-container">
        <div className="login-card">
          <h1>Signup</h1>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="firstname">First Name</label>
              <input
                type="text"
                id="firstName"
                placeholder="First Name"
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="lastname">Last Name</label>
              <input
                type="text"
                id="lastName"
                placeholder="Last Name"
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="phoneNo">Phone number</label>
              <input
                type="number"
                id="phoneNo"
                placeholder="Phone Number"
                onChange={(e) => setPhoneNo(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="gender">Gender</label>
              <div>
                <input
                  type="radio"
                  name="gender"
                  id="male"
                  value="Male"
                  onChange={(e) => setGender(e.target.value)}
                />
                <label htmlFor="male">Male</label>
                <input
                  type="radio"
                  name="gender"
                  id="female"
                  value="Female"
                  onChange={(e) => setGender(e.target.value)}
                />
                <label htmlFor="female">Female</label>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="confirmpassword">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                placeholder="Confirm your password"
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="login-button">
              Signup
            </button>
          </form>
          <p className="signup-text">
            I have an account <a href="/login">Login</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
