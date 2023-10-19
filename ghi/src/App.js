import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Home/HomePage";
import Nav from "./Global/NavBar";
import Footer from "./Global/Footer";
import SignUp from "./Global/SignUp";
import Analytics from "./Analytics/Analytics";

function App() {
  // const domain = /https:\/\/[^/]+/;
  // const basename = process.env.PUBLIC_URL.replace(domain, "");
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="analytics" element={<Analytics />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
export default App;
