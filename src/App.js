import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import "./Util.css";
import "./App.css";
import "./MediaQuery.css";
import { main, ThemeContext } from "./ThemeContext";
import Homepage from "./Pages/Homepage/Homepage";
import SignupPage from "./Pages/Signuppage/SignupPage";
import Dashboard from "./Pages/Dashboard/Dashboard";
import { AuthContextProvider, UserAuth } from "./context/AuthContext";
import { Helmet } from "react-helmet";

function App() {
  const [toggleTheme, setToggleTheme] = useState(false);
  const [theme, setTheme] = useState(main);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
        toggleTheme,
        setToggleTheme,
      }}
    >
      <AuthContextProvider>
        <Helmet>
          <meta
            name="theme-color"
            content={toggleTheme ? "#191919" : "#f0f0f0"}
          />
        </Helmet>
        <Router>
          <Routes>
            <Route exact path="/" element={<Homepage />} />
            <Route exact path="/signup" element={<SignupPage />} />
            <Route exact path="/dashboard" element={<Dashboard />} />
          </Routes>
        </Router>
      </AuthContextProvider>
    </ThemeContext.Provider>
  );
}

export default App;
