import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { App, Home, About, Contact, History } from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <React.Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />}>
            <Route path="history" element={<History />} />
          </Route>
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
