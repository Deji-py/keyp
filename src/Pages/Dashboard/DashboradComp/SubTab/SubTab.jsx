import { faKey, faPlus, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { createContext, useContext, useState } from "react";
import { FormContext } from "../../../../context/FormContext";
import { navTheme, ThemeContext } from "../../../../ThemeContext";
import "./SubTab.css";

function SubTab() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const {setToggleAddkey, setToggleAddpass} = useContext(FormContext)
  

  const handleToggle = ()=>{
    setToggleAddkey(true)
  }

  return (
      <div className="SubTab flex__layout " style={theme}>
        <div className="leftadd flex__layout">
          <h1 style={{ color: "gray", marginRight: "20px" }}>Dashboard</h1>
          <button
            className="cta addkey"
            onClick={handleToggle}
          >
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
          <button className="cta addcta" onClick={()=>setToggleAddpass(true)}>
            <FontAwesomeIcon icon={faPlus} style={{ marginRight: "10px" }} />
            Add Password
          </button>
        </div>
      </div>
     
   
  );
}

export default SubTab;
