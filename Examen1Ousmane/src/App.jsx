import React from "react";
import SummaryPage from "./routes/summary";
import UsersPage from "./routes/users";
import CountryPage from "./routes/country";
import NavigationBar from "./components/navigationBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="app-container">
      <Router>
        <NavigationBar />
        <div className="main-content">
          <Routes>
            <Route
              path="/"
              exact
              element={
                <div className="view-container">
                  <SummaryPage />
                </div>
              }
            />
            <Route
              path="/userspage"
              element={
                <div className="view-container">
                  <UsersPage />
                </div>
              }
            />
            <Route
              path="/countrypage"
              element={
                <div className="view-container">
                  <CountryPage />
                </div>
              }
            />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
