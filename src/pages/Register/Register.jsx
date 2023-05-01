import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Register.scss";
import NavigationBar from "../Shared/NavigationBar/NavigationBar";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";
import { getAuth, updateProfile } from "firebase/auth";
import { toast } from "react-toastify";

const Register = () => {
  const { SignUpWithEmail } = useContext(AuthContext);
  const navigate = useNavigate();

  const [file, setFile] = useState("");

  const auth = getAuth();

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    SignUpWithEmail(email, password)
      .then((result) => {
        updateProfile(auth.currentUser, {
          displayName: name,
        })
          .then(() => {})
          .catch((error) => {
            console.error(error);
          });

        toast.success("Account successfully created");
        navigate("/");
      })
      .catch((err) => console.error(err));
  };

  return (
    <>
      <NavigationBar />
      <div className="form__container">
        <div className="form">
          <h2 className="form__title">Register your account</h2>

          <hr />

          <form onSubmit={handleRegister}>
            <div>
              <label htmlFor="name">Your name</label>
              <input type="text" name="name" id="name" placeholder="Mr..." />
            </div>

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
            <button type="submit">Register</button>
            <p>
              Already have an account? <Link to="/login">Login</Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
