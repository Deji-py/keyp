import { faBox } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useState } from "react";
import { navTheme, ThemeContext } from "../../../../ThemeContext";

import Cardcomp from "../Card/Card";
import "./activity.css";

function Activity({ user }) {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <>
      {user === "new" ? (
        <div
          className="new flex__centered"
          style={{ transform: "translateY(-30px)", ...theme }}
        >
          <FontAwesomeIcon icon={faBox} size="6x" style={{ padding: "10px" }} />
          <h2>NO PASSWORDS CREATED YET</h2>
          <blockquote
            style={{
              padding: "10px",
              width: "300px",
              textAlign: "center",
              color: "gray",
            }}
          >
            <p className="desktopinstr">
              Click on Add Password above to save your first password
            </p>
            <p className="mobileinstr">
              Click the + Button below to save your first password"
            </p>
          </blockquote>
        </div>
      ) : (
        <div className="activity" style={theme}>
          <div className="latestPass">
            <div className="latesttab flex__layout">
              <div
                className="social"
                style={toggleTheme ? navTheme.navDark : navTheme.navlight}
              >
                Others
              </div>
              <div
                className="showall"
                tyle={toggleTheme ? navTheme.navDark : navTheme.navlight}
              >
                Show All
              </div>
            </div>
            <div className="passscroller">
              <div
                className="passwords  latestWrapper  flex__layout"
                style={{ justifyContent: "flex-start", gap: "20px", ...theme }}
              >
                <Cardcomp />
                <Cardcomp />
                <Cardcomp />
                <Cardcomp />
                <Cardcomp />
              </div>
            </div>
          </div>
          <div className="socialPass " style={theme}>
            <div className="latesttab flex__layout">
              <div
                className="social"
                style={toggleTheme ? navTheme.navDark : navTheme.navlight}
              >
                social
              </div>
              <div
                className="showall"
                tyle={toggleTheme ? navTheme.navDark : navTheme.navlight}
              >
                Show All
              </div>
            </div>

            <div
              className="passwords socialWrapper flex__layout"
              style={{ justifyContent: "flex-start", gap: "20px", ...theme }}
            >
              <Cardcomp type={"social"} />
              <Cardcomp type={"social"} />
              <Cardcomp type={"social"} />
              <Cardcomp type={"social"} />
              <Cardcomp type={"social"} />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Activity;
