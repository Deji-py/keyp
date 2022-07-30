import React, {useState, useContext } from "react";
import LoginForm from "../../GlobalComp/Form/LoginForm";
import Footer from "../../GlobalComp/HeaderComp/Footer/Footer";
import Header from "../../GlobalComp/HeaderComp/Header";
import {  ThemeContext } from "../../ThemeContext";

import "./homepage.css";
const mainStyle = {
  disply: "flex",
  flexDirection: "column",
  alignItems: "center",
};

function Homepage() {
  const { theme } = useContext(ThemeContext);

  return (
    <div style={{ ...theme}} className="home">
       <Header nav={true}/>
      <div className="main flex__layout" style={{...mainStyle, ...theme}}>
        
        <LoginForm/>
      
      </div>
      <Footer/>
    </div>
  );
}

export default Homepage;
