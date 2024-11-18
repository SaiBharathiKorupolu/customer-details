import React from "react";
import "./App.css";
import SignUpForm from "./features/SignUpForm";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CreateEmployee from "./features/CreateEmployee";
import ViewEmployees from "./features/ViewEmployees";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        "/"
        <Route path="/" element={<SignUpForm />} />
        <Route path="/create-employee" element={<CreateEmployee />} />
        <Route
          path="/create-employee/view-employees"
          element={<ViewEmployees />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
