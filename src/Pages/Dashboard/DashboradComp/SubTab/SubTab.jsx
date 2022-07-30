import {
  faKey,
  faPlus,
  faSearch,
  faSignOut,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserAuth, userContext } from "../../../../context/AuthContext";
import { navTheme, ThemeContext } from "../../../../ThemeContext";
import "./SubTab.css";

function SubTab() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { user} = UserAuth();
 

  return (
    <div className="SubTab flex__layout " style={theme}>
      <div className="leftadd flex__layout">
        <h1 style={{ color: "gray", marginRight: "20px" }}>Dashboard</h1>
        <button className="cta addkey">
          <FontAwesomeIcon icon={faKey} style={{ marginRight: "10px" }} />
          Add key
        </button>
      </div>
      <div className="Right flex__layout">
        <button
          className="searchcta"
          style={toggleTheme ? navTheme.navDark : navTheme.navlight}
        >
          <FontAwesomeIcon icon={faSearch} className="searchicon" />
        </button>
        <button className="cta addcta">
          <FontAwesomeIcon icon={faPlus} style={{ marginRight: "10px" }} />
          Add Password
        </button>
      </div>
    </div>
  );
}

export default SubTab;
