import React, { useState, useContext } from "react";
import { Avatar, IconButton } from "@mui/material";
import { animate, motion } from "framer-motion";
import {
  faNavicon,
  faMoon,
  faSun,
  faEllipsisVertical,
  faSignOut,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./header.css";
import "../../MediaQuery.css";
import { ThemeContext, navTheme, main } from "../../ThemeContext";
import logo from "../../Asset/Images/Key.svg";
import logout from "../../Asset/Images/logout.svg";
import { Link } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext";

function Header({ nav, profilepic, username }) {
  const { theme, setTheme, toggleTheme, setToggleTheme } =
    useContext(ThemeContext);
  const { Userlogout } = UserAuth();
  const [toggle, setToggle] = useState(false)
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  function handleToggle() {
    setToggleTheme(!toggleTheme);
    if (toggleTheme === false) {
      setTheme(main.Dark);
    } else {
      setTheme(main.light);
    }
  }

  const handleToggleLogout = ()=>{
    setToggle(!toggle)
  }

  return (
    <>
      <div
        className="modal"
        onClick={toggleMenu}
        style={{ display: showMenu === false ? "none" : "block" }}
      ></div>
      <div
        className="mobileNavList"
        style={{
          transform:
            showMenu === false ? "translateY(-100%)" : "translateY(4%)",
          ...theme,
        }}
      >
        <ul>
          <Link
            to={"/"}
            onClick={() => {
              setShowMenu(!showMenu);
            }}
            style={{
              textDecoration: "none",
              transform:
                showMenu === false ? "translateY(-100%)" : "translateY(4%)",
              ...(toggleTheme ? navTheme.navDark : navTheme.navlight),
            }}
          >
            <li>Home</li>
          </Link>
          <li>About</li>
          <li>Services</li>
          <Link
            to={"/signup"}
            onClick={() => {
              setShowMenu(!showMenu);
            }}
            style={{
              textDecoration: "none",
              transform:
                showMenu === false ? "translateY(-100%)" : "translateY(4%)",
              ...(toggleTheme ? navTheme.navDark : navTheme.navlight),
            }}
          >
            <button className="signupcta">Signup</button>
          </Link>
        </ul>
      </div>
      <div
        className="header flex__layout"
        style={{
          boxShadow: toggleTheme ? "0px 0px 6px black" : "0px 0px 6px #B8B8B8",
          ...(toggleTheme ? navTheme.navDark : navTheme.navlight),
        }}
      >
        <div className="left flex__layout">
          <img src={logo} alt="logo" style={{ width: "35px" }} />
          <h4 style={toggleTheme ? navTheme.navDark : navTheme.navlight}>
            KeyP
          </h4>
        </div>

        <div className="right flex__layout">
          <IconButton
            size="small"
            style={{ marginRight: "20px" }}
            onClick={() => {
              handleToggle();
            }}
          >
            {toggleTheme === false ? (
              <IconButton size="small">
                <FontAwesomeIcon icon={faMoon} style={navTheme.navlight} />
              </IconButton>
            ) : (
              <IconButton size="small">
                <FontAwesomeIcon icon={faSun} style={navTheme.navDark} />
              </IconButton>
            )}
          </IconButton>
          <Avatar
            src={profilepic}
            alt={username}
            style={{ marginRight: "10px" }}
            onClick={handleToggleLogout}
          />
          {nav === false ? (
            <>
              <IconButton
                sx={{ width: "30px", height: "30px", position: "relative" }}
                size="small"
                
              >
                <FontAwesomeIcon
                  icon={faEllipsisVertical}
                  style={toggleTheme ? navTheme.navDark : navTheme.navlight}
                />
                <motion.div animate={
                  {
                    display:toggle?"none":"block",
                    y:toggle?"5px":"-5px",
                  }
                }
                  className="profilecard flex__centered"
                  style={{
                    boxShadow: toggleTheme
                      ? "0px 0px 6px black"
                      : "0px 0px 6px hsl(0, 0%, 76%)",
                    ...(toggleTheme ? navTheme.navDark : navTheme.navlight),
                  }}
                >
                    <img src={logout} alt="logout" style={{width:"100%"}}/>
                 
                  <button className="cta addkey logout" onClick={Userlogout}>
                    <FontAwesomeIcon
                      icon={faSignOut}
                      style={{ marginRight: "10px" }}
                    />
                    Logout
                  </button>
                </motion.div>
              </IconButton>
            </>
          ) : (
            <></>
          )}
          {nav === false ? (
            <></>
          ) : (
            <>
              <div className="desktopNav">
                <nav>
                  <ul className="navlist flex__layout">
                    <Link
                      to={"/"}
                      style={{
                        textDecoration: "none",
                        ...(toggleTheme ? navTheme.navDark : navTheme.navlight),
                      }}
                    >
                      <li>Home</li>
                    </Link>
                    <li>About</li>
                    <li>Services</li>
                    <Link
                      to={"/signup"}
                      style={{ marginLeft: "20px", textDecoration: "none" }}
                    >
                      <button className="signupcta">Signup</button>
                    </Link>
                  </ul>
                </nav>
              </div>
              <div className="mobileNav" onClick={toggleMenu}>
                <IconButton size="small">
                  <FontAwesomeIcon
                    icon={faNavicon}
                    style={toggleTheme ? navTheme.navDark : navTheme.navlight}
                  />
                </IconButton>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default Header;
