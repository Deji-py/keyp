import {
  faBoxTissue,
  faCopy,
  faEye,
  faEyeSlash,
  faPlus,
  faSave,
  faX,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { textAlign } from "@mui/system";
import React, { useContext, useState } from "react";
import { FormContext } from "../../context/FormContext";
import { motion } from "framer-motion";
import "./form.css";
import { main, navTheme, ThemeContext } from "../../ThemeContext";

function AddPassword() {
  const [socialselected, setSocialselected] = useState(false);
  const [toggleEye, setToggleEye] = useState(false);
  const { toggleTheme } = useContext(ThemeContext);
  const { toggleAddpass, setToggleAddpass } = useContext(FormContext);
  return (
    <div
      className="mainModal flex__centered addpassmodal"
      style={{ display: toggleAddpass ? "flex" : "none" }}
    >
      <motion.div
        animate={{
          scale: toggleAddpass ? 1 : 0.8,

          transition: 0.2,
        }}
        className="card addpass "
      >
        <form
          className="addform"
          style={{
            position: "relative",
            ...(toggleTheme ? navTheme.navDark : navTheme.navlight),
          }}
          onSubmit={(e) => e.preventDefault()}
        >
          <button
            className="cancelbtn flex__centered"
            onClick={() => setToggleAddpass(false)}
          >
            <FontAwesomeIcon icon={faX} />
          </button>
          <div style={{ marginTop: "20px" }}>Category</div>
          <div className="category flex__layout">
            <div className="flex__layout">
              <h4>Others</h4>
              <input
                type="radio"
                name="category"
                id="others"
                className="radiobtn"
                onClick={() => setSocialselected(false)}
                defaultChecked
                style={{ marginLeft: "10px" }}
              />
            </div>
            <div className="flex__layout">
              <h4>Social</h4>
              <input
                type="radio"
                name="category"
                id="social"
                className="radiobtn"
                onClick={() => setSocialselected(true)}
                style={{ marginLeft: "10px" }}
              />
            </div>
          </div>
          <label htmlFor="password">
            Enter Name
            <input type="text" />
          </label>
          <label
            htmlFor="password"
            style={{ display: socialselected ? "block" : "none" }}
          >
            Select Icon:
            <div
              className="iconsWrapper"
              style={toggleTheme ? main.Dark : main.light}
            >
              <FontAwesomeIcon
                icon={faBoxTissue}
                style={{
                  fontSize: "30px",
                  margin: "10px",
                  color: "blueviolet",
                }}
              />
              <FontAwesomeIcon
                icon={faBoxTissue}
                style={{
                  fontSize: "30px",
                  margin: "10px",
                  color: "blueviolet",
                }}
              />
              <FontAwesomeIcon
                icon={faBoxTissue}
                style={{
                  fontSize: "30px",
                  margin: "10px",
                  color: "blueviolet",
                }}
              />
              <FontAwesomeIcon
                icon={faBoxTissue}
                style={{
                  fontSize: "30px",
                  margin: "10px",
                  color: "blueviolet",
                }}
              />
              <FontAwesomeIcon
                icon={faBoxTissue}
                style={{
                  fontSize: "30px",
                  margin: "10px",
                  color: "blueviolet",
                }}
              />
              <FontAwesomeIcon
                icon={faBoxTissue}
                style={{
                  fontSize: "30px",
                  margin: "10px",
                  color: "blueviolet",
                }}
              />
              <FontAwesomeIcon
                icon={faBoxTissue}
                style={{
                  fontSize: "30px",
                  margin: "10px",
                  color: "blueviolet",
                }}
              />
              <FontAwesomeIcon
                icon={faBoxTissue}
                style={{
                  fontSize: "30px",
                  margin: "10px",
                  color: "blueviolet",
                }}
              />
              <FontAwesomeIcon
                icon={faBoxTissue}
                style={{
                  fontSize: "30px",
                  margin: "10px",
                  color: "blueviolet",
                }}
              />
              <FontAwesomeIcon
                icon={faBoxTissue}
                style={{
                  fontSize: "30px",
                  margin: "10px",
                  color: "blueviolet",
                }}
              />
              <FontAwesomeIcon
                icon={faBoxTissue}
                style={{
                  fontSize: "30px",
                  margin: "10px",
                  color: "blueviolet",
                }}
              />
              <FontAwesomeIcon
                icon={faBoxTissue}
                style={{
                  fontSize: "30px",
                  margin: "10px",
                  color: "blueviolet",
                }}
              />
              <FontAwesomeIcon
                icon={faBoxTissue}
                style={{
                  fontSize: "30px",
                  margin: "10px",
                  color: "blueviolet",
                }}
              />
              <FontAwesomeIcon
                icon={faBoxTissue}
                style={{
                  fontSize: "30px",
                  margin: "10px",
                  color: "blueviolet",
                }}
              />
              <FontAwesomeIcon
                icon={faBoxTissue}
                style={{
                  fontSize: "30px",
                  margin: "10px",
                  color: "blueviolet",
                }}
              />
              <FontAwesomeIcon
                icon={faBoxTissue}
                style={{
                  fontSize: "30px",
                  margin: "10px",
                  color: "blueviolet",
                }}
              />
              <FontAwesomeIcon
                icon={faBoxTissue}
                style={{
                  fontSize: "30px",
                  margin: "10px",
                  color: "blueviolet",
                }}
              />
              <FontAwesomeIcon
                icon={faBoxTissue}
                style={{
                  fontSize: "30px",
                  margin: "10px",
                  color: "blueviolet",
                }}
              />
              <FontAwesomeIcon
                icon={faBoxTissue}
                style={{
                  fontSize: "30px",
                  margin: "10px",
                  color: "blueviolet",
                }}
              />
              <FontAwesomeIcon
                icon={faBoxTissue}
                style={{
                  fontSize: "30px",
                  margin: "10px",
                  color: "blueviolet",
                }}
              />
              <FontAwesomeIcon
                icon={faBoxTissue}
                style={{
                  fontSize: "30px",
                  margin: "10px",
                  color: "blueviolet",
                }}
              />
              <FontAwesomeIcon
                icon={faBoxTissue}
                style={{
                  fontSize: "30px",
                  margin: "10px",
                  color: "blueviolet",
                }}
              />
            </div>
          </label>
          <div className="pass-save-Section">
            <label htmlFor="password">
              <h4 style={{ margin: "10px" }}>
                Enter Password<span style={{ color: "red" }}>*</span>
              </h4>
              <input type="text" />
            </label>
            <label htmlFor="key password">
              <h4 style={{ margin: "10px" }}>
                Enter Key<span style={{ color: "red" }}>*</span>
              </h4>
              <input type="text" />
            </label>
            <button
              style={{
                all: "unset",
                background: "var(--primary)",
                padding: "15px",
                color: "white",
                cursor: "pointer",
                marginTop: "20px",
                marginBottom: "20px",
                borderRadius: "10px",
                width: "90%",
                textAlign: "center",
              }}
            >
              <FontAwesomeIcon
                icon={faPlus}
                size="xl"
                style={{ marginRight: "10px" }}
              />
              Add Password
            </button>
            <div className="passwordgen">
              <h4>PASSWORD GENERATOR</h4>
              <div
                className="passgen flex__layout"
                style={{ boxShadow:toggleTheme ? "0px 0px 6px black": "0px 0px 6px #e9e9e9",...toggleTheme ? navTheme.navDark : navTheme.navlight}}
              >
                {toggleEye ? (
                  <FontAwesomeIcon
                    icon={faEye}
                    size="lg"
                    style={{ color: toggleTheme ? "gray" : "black" }}
                  />
                ) : (
                  <FontAwesomeIcon
                    icon={faEyeSlash}
                    size="lg"
                    style={{ color: toggleTheme ? "gray" : "black" }}
                  />
                )}
                <div className="generatedpassword">
                  <input
                    type="text"
                    value={"hkdwjidbwjddjhdjd"}
                    className="genpass"
                    style={{
                      all: "unset",
                      background: "whitesmoke",
                      border: "none",
                      width: "100%",
                      fontSize: "20px",
                      textAlign: "center",
                      paddingLeft: "0px",
                      ...(toggleTheme ? navTheme.navDark : navTheme.navlight),
                    }}
                  />
                </div>
                <FontAwesomeIcon icon={faCopy} color="gray" size="lg" />
              </div>
            </div>
            <div className="ctionbtns flex__layout">
              <button
                style={{
                  all: "unset",
                  background: "#c5c5c5",
                  color:"black",
                  padding: "10px 20px 10px 20px",
                  cursor: "pointer",
                }}
              >
                Clear
              </button>
              <button
                style={{
                  all: "unset",
                  background: "black",
                  color: "white",
                  cursor: "pointer",
                  padding: "10px 20px 10px 20px",
                }}
              >
                Generate
              </button>
            </div>
          </div>
        </form>
      </motion.div>
    </div>
  );
}

export default AddPassword;
