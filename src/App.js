import LogIn from "./LogIn";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import DashBoard from "./DashBoard";
import React from "react";

const App = () => {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LogIn />} />
          <Route path="/dashboard" element={<DashBoard />} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
};

export default App;
