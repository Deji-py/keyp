import React, { useContext } from "react";
import SignupForm from "../../GlobalComp/Form/Signupform";
import Footer from "../../GlobalComp/HeaderComp/Footer/Footer";
import Header from "../../GlobalComp/HeaderComp/Header";
import { ThemeContext } from "../../ThemeContext";


import "../Homepage/homepage.css";
const mainStyle = {
  disply: "flex",
  flexDirection: "column",
  alignItems: "center",
};

function SignupPage() {
  const { theme } = useContext(ThemeContext);
  return (

      <div style={{ ...theme }} className="home">
         <Header nav={true}/>
        <div className="main flex__layout" style={{ ...mainStyle, ...theme }}>
          <SignupForm />
        </div>
        <Footer />
      </div>

  );
}

export default SignupPage;
