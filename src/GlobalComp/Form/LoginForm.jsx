import React, { useContext, useEffect, useState } from "react";

import "./form.css";
import {
  faEye,
  faEyeSlash,
  faG,
  faWarning,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ThemeContext, formTheme } from "../../ThemeContext";
import googleLogo from "../../Asset/Images/GoogleLogo.svg";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext";
import { CircularProgress } from "@mui/material";
function LoginForm() {
  const [signinmail, setSigninmail] = useState("");
  const [signinpassword, setSigninpassword] = useState("");
  const [error, setError] = useState("");
  const { toggleTheme } = useContext(ThemeContext);
  const [toggleEye, setToggleEye] = useState(false);
  const [isloading, setIsloading] = useState(false);

  const { Userlogin, user } = UserAuth();
  const navigate = useNavigate();

  if (user != null) {
    navigate("/dashboard");
  }

  const handleLogin = async () => {
    setError("");
    setIsloading(true);
    try {
      await Userlogin(signinmail, signinpassword);
      navigate("/dashboard");
      setIsloading(false);
    } catch {
      setError("Wrong Username or password");
      setIsloading(false);
    }
  };

  return (
    <>
      <form
        className="flex__layout"
        onSubmit={(ev) => ev.preventDefault()}
        style={{
          boxShadow: "0px 0px 3px black",
          ...(toggleTheme ? formTheme.formDark : formTheme.formlight),
        }}
      >
        <div
          className="hero flex__layout"
          style={{
            justifyContent: "center",
            flexDirection: "column",
            ...(toggleTheme ? formTheme.formDark : formTheme.formlight),
          }}
        >
          <h1 className="greeting">WELCOME BACK!</h1>
          <blockquote
            className="greetingSub"
            style={{
              textAlign: "center",
              fontSize: "15px",
              padding: "20px 50px 20px 50px",
            }}
          >
            Your Trusted and Tested Password guard, Security at your fingertips
          </blockquote>
        </div>
        <button className="googleauth flex__layout">
          <img src={googleLogo} alt="google" style={{ marginRight: "20px" }} />

          <h4>Login with Google</h4>
        </button>
        <p
          style={{
            color: "red",
            fontSize: "12px",
            transform: "translate(80px,45px)",
          }}
        >
          {error != ''?  <FontAwesomeIcon icon={faWarning} style={{marginRight:"5px"}} />:""}
          {error}
        </p>
        <label htmlFor="username">
          <h5 className="formText">Email</h5>
          <input
            type="text"
            name="username"
            id="user"
            onChange={(e) => setSigninmail(e.target.value)}
            placeholder="Example@gmail.com"
            style={{ color: toggleTheme ? "white" : "black" }}
          />
        </label>
        <label htmlFor="password" className="passwordLabel">
          <h5 className="formText">Password</h5>
          <input
            style={{ color: toggleTheme ? "white" : "black" }}
            type={toggleEye ? "text" : "password"}
            name="password"
            onChange={(e) => setSigninpassword(e.target.value)}
            id="pass"
          />

          <button className="eyeIcon" onClick={() => setToggleEye(!toggleEye)}>
            {toggleEye ? (
              <FontAwesomeIcon
                icon={faEye}
                size="lg"
                style={{ color: toggleTheme ? "white" : "black" }}
              />
            ) : (
              <FontAwesomeIcon
                icon={faEyeSlash}
                size="lg"
                style={{ color: toggleTheme ? "white" : "black" }}
              />
            )}
          </button>
        </label>

        <button
          type="submit"
          className="logincta cta"
          onClick={handleLogin}
          style={{ position: "relative" }}
        >
          LOG IN{" "}
          <CircularProgress
            sx={{
              color: "white",
              position: "absolute",
              right: "20px",
              top: "8px",
              display: isloading ? "block" : "none",
            }}
            size={30}
          />
        </button>

        <h5 style={{ marginTop: "20px", color: "gray" }}>Forgot password?</h5>
        <h5 style={{ marginTop: "20px" }}>
          Dont have an Account?
          <Link to={"/signup"} style={{ textDecoration: "none" }}>
            <span
              style={{
                color: "darkgray",
                cursor: "pointer",
                marginLeft: "10px",
              }}
            >
              <u>Signup</u>
            </span>
          </Link>
        </h5>
      </form>
    </>
  );
}

export default LoginForm;
