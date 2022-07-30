import React, { useContext, useState } from "react";
import "./form.css";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ThemeContext, formTheme } from "../../ThemeContext";
import googleLogo from "../../Asset/Images/GoogleLogo.svg";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth, userContext } from "../../context/AuthContext";
import { CircularProgress } from "@mui/material";


function SignupForm() {
  const { toggleTheme } = useContext(ThemeContext);
  const [toggleEye, setToggleEye] = useState(false);
  const [toggleConEye, setToggleConEye] = useState(false);
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [registeremail, setRegisterEmail] = useState("");
  const [registerpassword, setRegisterPassword] = useState("");

  const [error, setError] = useState("");

  const navigate = useNavigate();

  const { createUser, Userprofile } = UserAuth();
  const [isloading , setIsloading] = useState(false)
  const handleSubmit = async () => {
    setError("");
    setIsloading(true)
    try {
      await createUser(registeremail, registerpassword);
      navigate("/dashboard");
      await Userprofile(firstname, lastname)
      setIsloading(false)
    } catch (e) {
      console.log(e.message);
      setIsloading(false)
    }
  };

  return (
    <>
      <form
        className="flex__layout signupform"
        onSubmit={(e) => {
          e.preventDefault();
        }}
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
          <h1 className="greeting">GET READY </h1>
          <blockquote
            className="greetingSub"
            style={{
              textAlign: "center",
              fontSize: "15px",
              padding: "20px 50px 20px 50px",
            }}
          >
            Fill the form Below to start you password security experience
          </blockquote>
        </div>
        <button className="googleauth flex__layout">
          <img src={googleLogo} alt="google" style={{ marginRight: "20px" }} />

          <h4>Signup with Google</h4>
        </button>

        <label htmlFor="username">
          <h5 className="formText">Firstname <span style={{color:"red"}}>*</span></h5>
          <input
            type="text"
            name="username"
            id="userfirstname"
            required
            onChange={(e) => setFirstname(e.target.value)}
            style={{ color: toggleTheme ? "white" : "black" }}
          />
        </label>
        <label htmlFor="username">
          <h5 className="formText">Lastname   <span style={{color:"red"}}>*</span></h5>
          <input
            type="text"
            name="username"
            id="userlastname"
            required
            onChange={(e) => setLastname(e.target.value)}
            style={{ color: toggleTheme ? "white" : "black" }}
          />
        </label>
        <label htmlFor="username">
          <h5 className="formText">Email  <span style={{color:"red"}}>*</span></h5>
          <input
            type="text"
            name="username"
            id="user"
            required
            onChange={(event) => setRegisterEmail(event.target.value)}
            placeholder="Example@gmail.com"
            style={{ color: toggleTheme ? "white" : "black" }}
          />
        </label>
        <label htmlFor="password" className="passwordLabel">
          <h5 className="formText">Password  <span style={{color:"red"}}>*</span></h5>
          <input
            style={{ color: toggleTheme ? "white" : "black" }}
            type={toggleConEye ? "text" : "password"}
            name="password"
            id="pass"
            required
            onChange={(event) => setRegisterPassword(event.target.value)}
          />

          <button
            className="eyeIcon"
            onClick={() => setToggleConEye(!toggleConEye)}
          >
            {toggleConEye ? (
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
        <label htmlFor="password" className="passwordLabel">
          <h5 className="formText">Confirm Password   <span style={{color:"red"}}>*</span></h5>
          <input
            style={{ color: toggleTheme ? "white" : "black" }}
            type={toggleEye ? "text" : "password"}
            name="password"
            id="confirmpass"
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
        <button type="submit" className="logincta" onClick={handleSubmit} style={{position:"relative"}} >
          CREATE ACCOUNT  <CircularProgress sx={{color:"white", position:'absolute', right:"20px", top:'8px', display:isloading?"block":"none"}} size={30} />
        </button>
        <h5 style={{ marginTop: "20px" }}>
          Have an Account?
          <Link to={"/"} style={{ textDecoration: "none" }}>
            <span
              style={{
                color: "darkgray",
                cursor: "pointer",
                marginLeft: "10px",
              }}
            >
              <u>Login</u>
            </span>
          </Link>
        </h5>
      </form>
    </>
  );
}

export default SignupForm;
