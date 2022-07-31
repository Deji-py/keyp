import { faPlus, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext";
import Header from "../../GlobalComp/HeaderComp/Header";
import { profile, profileContext } from "../../ProfileContext";
import { ThemeContext } from "../../ThemeContext";
import Activity from "./DashboradComp/ActivityCard/Activity";
import SubTab from "./DashboradComp/SubTab/SubTab";
import "./dashboard.css";
import Keypassword from "../../GlobalComp/Form/Keypassword";
import { FormContext } from "../../context/FormContext";

function Dashboard() {
  const { theme } = useContext(ThemeContext);
  const [toggleAddkey, setToggleAddkey] = useState(false);
  
  const { user } = UserAuth();

  const navigate = useNavigate();
  if (user === null) {
    navigate("/");
  }

  return (
    <profileContext.Provider value={profile}>
      <FormContext.Provider value={{ toggleAddkey, setToggleAddkey }}>
        <div
          className="main flex__centered"
          style={{ position: "relative", ...theme }}
        >
          <Keypassword />
          <button
            className="mobileaddcta mobilesearchcta"
            style={{ display: "none" }}
          >
            <FontAwesomeIcon icon={faSearch} />
          </button>
          <button className="mobileaddcta" style={{ display: "none" }}>
            <FontAwesomeIcon icon={faPlus} />
          </button>
          <Header
            nav={false}
            profilepic={profile.img}
            username={profile.name}
          />
          <SubTab />
          <Activity user={"new"} />
        </div>
      </FormContext.Provider>
    </profileContext.Provider>
  );
}

export default Dashboard;
