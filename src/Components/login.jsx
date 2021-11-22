import { React, useState, useEffect } from "react";
import AdminPanel from "./AdminPanel";
import "./login.css";

const Login = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    setLogin({
      ...login,
      [name]: value,
    });
  };

  const loginSubmit = (e) => {
    e.preventDefault();

    setErrors(() => {
      let err = {};

      //Email
      if (!login.email) {
        err.email = "Email required";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(login.email)
      ) {
        err.email = "Email address is invalid";
      }

      //password
      if (!login.password) {
        err.password = "Password is required";
      } else if (login.password.length < 8) {
        err.password = "Password needs to be 8 characters or more";
      }

      return err;
    });

    setIsSubmitting(true);
  };

  useEffect(async () => {
    if (Object.keys(errors).length == 0 && isSubmitting) {
      setIsLogin(true);
      console.log("Form Submitted");
    }
  }, [errors]);

  return (
    <>
    {isLogin?(<AdminPanel/>):(<div className="login">
    <img src="/image/monaco.jpg" alt="" />
    <div className="login-div">
      <img src="/image/wolf.png" alt="" />
      <h1>Log In</h1>
      <select name="" id="">
        <option value="admin">Admin</option>
        <option value="user">User</option>
      </select>
      <form onSubmit={loginSubmit} className="login_form">
        <div className="f-inputs">
          <label htmlFor="email">
            E-mail Id
          </label>
          <input
            type="text"
            name="email"
            className="f-input"
            placeholder="Enter registered email id"
            value={login.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div className="f-inputs">
          <label htmlFor="password">
            Password
          </label>
          <input
            type="password"
            name="password"
            className="f-input"
            placeholder="Enter your password"
            value={login.password}
            onChange={handleChange}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>
        <div className="sign-up">
          <button type="submit" className="SignUpBtn">
            Log In
          </button>
        </div>
      </form>
    </div>
  </div>)}
  </>
  );
};

export default Login;
