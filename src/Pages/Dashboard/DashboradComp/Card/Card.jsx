import { faEllipsisVertical, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconButton } from "@material-ui/core";
import React, { useContext, useState } from "react";
import icon from "../../../../Asset/Images/Facebook.svg";
import { navTheme, ThemeContext } from "../../../../ThemeContext";
import "./Card.css";

function Cardcomp({ type }) {
  const [toggle, setToggle] = useState(false);
  const { toggleTheme } = useContext(ThemeContext);
  return (
    <div
      className="card flex__centered"
      style={{
        width: "280px",
        height: "150px",
        padding: "0px 10px 0px 10px",
        background: "white",
        boxShadow: "0px 0px 3px black",
        borderRadius: "10px",
        cursor: "pointer",
        position: "relative",
        ...(toggleTheme ? navTheme.navDark : navTheme.navlight),
      }}
    >
      <div
        className="back"
        onClick={() => setToggle(false)}
        style={{
          background: "transparent",
          width: "100%",
          height: "100%",
          position: "absolute",
        }}
      ></div>
      <div
        className="option"
        style={{
          display: toggle ? "block" : "none",
          position: "absolute",
          top: "30px",
          right: "10px",
          color: "red",
          background: "#FFEEEE",
          padding: "5px 10px 5px 10px",
          fontSize: "12px",
          boxShadow: "0px 0px 3px red ",
          zIndex: "10",
        }}
      >
        Delete <FontAwesomeIcon icon={faTrash} color="#E50000" />
      </div>
      <div className="cardContent ">
        {type === "social" ? (
          <>
            <div
              className="cardheading flex__layout"
              style={{
                width: "100%",
                paddingTop: "10px",
                position: "absolute",
                top: "0",
                left: "0",
                padding: "10px",
              }}
            >
              <div
                className="themecolor"
                style={{ background: "#047EF8", width: "15px", height: "15px" }}
              ></div>
              <div
                className="date"
                style={{ fontSize: "12px", color: "lightgray" }}
              >
                4, July 2022
                <button
                  className="opt flex_-centered"
                  onClick={() => setToggle(!toggle)}
                  style={{
                    marginLeft: "10px",
                    padding: "5px",
                    border: "none",
                    background: "none",
                    cursor: "pointer",
                  }}
                >
                  <FontAwesomeIcon
                    icon={faEllipsisVertical}
                    style={toggleTheme ? navTheme.navDark : navTheme.navlight}
                  />
                </button>
              </div>
            </div>
            <div
              className="socialContent flex__centered"
              onClick={() => setToggle(false)}
              style={{ padding: "15px", marginTop: "20px" }}
            >
              <img
                src={icon}
                alt="icon"
                className="socialIcon"
                style={{ width: "50px" }}
              ></img>
              <h3 className="socialName" style={{ marginTop: "10px" }}>
                FACEBOOK
              </h3>
            </div>
          </>
        ) : (
          <div className="center" style={{ width: "100%" }}>
            <div
              className="cardheading flex__layout"
              style={{
                width: "100%",
                padding: "10px",
                position: "absolute",
                top: "0",
                left: "0",
              }}
            >
              <div
                className="themecolor"
                style={{ background: "black", width: "15px", height: "15px" }}
              ></div>
              <div
                className="date"
                style={{ fontSize: "12px", color: "lightgray" }}
              >
                4, July 2022
                <button
                  className="opt flex_-centered"
                  onClick={() => setToggle(!toggle)}
                  style={{
                    marginLeft: "10px",
                    padding: "5px",
                    border: "none",
                    background: "none",
                    cursor: "pointer",
                    color: toggleTheme ? navTheme.navDark : navTheme.navlight,
                  }}
                >
                  <FontAwesomeIcon
                    onClick={() => setToggle(!toggle)}
                    icon={faEllipsisVertical}
                    style={{
                      marginLeft: "10px",
                      ...(toggleTheme ? navTheme.navDark : navTheme.navlight),
                    }}
                  />
                </button>
              </div>
            </div>
            <div className="othercont" onClick={() => setToggle(false)}>
              <h3
                className="socialName"
                style={{ marginTop: "10px", textAlign: "center" }}
              >
                CookStack
              </h3>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cardcomp;
