import {
  faEye,
  faEyeSlash,
  faWarning,
  faX,
} from "@fortawesome/free-solid-svg-icons";
import React, { useContext } from "react";
import { useState } from "react";
import "./form.css";
import { navTheme, ThemeContext } from "../../ThemeContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FormContext } from "../../context/FormContext";
import { motion } from "framer-motion";

function Keypassword() {
  const { toggleAddkey, setToggleAddkey } = useContext(FormContext);
  const [toggleEye, setToggleEye] = useState();
  const { toggleTheme } = useContext(ThemeContext);
  return (
    <div
      className="mainModal flex__centered"
      style={{
        display: toggleAddkey ? "flex" : "none",
      }}
    >
      <motion.div animate={{
        y:toggleAddkey?50:-100
      }}
        className="card AddkeyForm flex__centered"
        style={{
          position: "relative",
        }}
      >
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
          style={{...toggleTheme ? navTheme.navDark : navTheme.navlight}}
        >
          <button
            className="cancelbtn flex__centered"
            onClick={() => setToggleAddkey(false)}
          >
            <FontAwesomeIcon icon={faX} />
          </button>
          <blockquote className="warning">
            <FontAwesomeIcon icon={faWarning} style={{ marginRight: "10px" }} />
            Please note that the key Password must not be shared with a third
            party
          </blockquote>
          <label htmlFor="keypass" style={{ position: "relative" }}>
            Enter Key Password
            <input type={toggleEye ? "text" : "password"} name="keypass" />
            <button
              className="eyeIcon"
              style={{ top: "22px" }}
              onClick={() => setToggleEye(!toggleEye)}
            >
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
            <div className="createkey ">Create</div>
          </label>
        </form>
      </motion.div>
    </div>
  );
}

export default Keypassword;
