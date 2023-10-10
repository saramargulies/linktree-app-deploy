import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Home/HomePage";
import Nav from "./Global/Nav";
import Footer from "./Footer";


function App() {
  const domain = /https:\/\/[^/]+/;
  const basename = process.env.PUBLIC_URL.replace(domain, "");
  return (
    <BrowserRouter basename={basename}>
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
export default App;
