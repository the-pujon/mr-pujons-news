import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Login.scss";
import NavigationBar from "../Shared/NavigationBar/NavigationBar";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";
import { toast } from "react-toastify";

const Login = () => {
  const { LogInWithEmail } = useContext(AuthContext);

  const location = useLocation();
  const navigate = useNavigate();

  const to = location.state?.from?.pathname || "/";

  const name = location.state?.from?.state?.name || "All News";

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    LogInWithEmail(email, password)
      .then((result) => {
        toast.success("Login successful");
        navigate(to, { state: { name: name } });
      })
      .catch((err) => console.error(err));
  };

  return (
    <>
      <NavigationBar />
      <div className="form__container">
        <div className="form">
          <h2 className="form__title">Login your account</h2>

          <hr />

          <form onSubmit={handleLogin}>
            <div>
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="youremail@gmail.com"
              />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="******"
              />
            </div>
            <button type="submit">Login</button>
            <p>
              Don't have an account? <Link to="/register">Register</Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
