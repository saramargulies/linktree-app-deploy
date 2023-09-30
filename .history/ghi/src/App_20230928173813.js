import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import Nav from "./Nav";
import SignUp from "./SignUp";
import Login from "./Login";
import Wishlist from "./Wishlist";
import Visited from "./Visited";
import MyReviews from "./MyReviews";
import NotFoundPage from "./NotFoundPage";
import ParkDetails from "./ParkDetails";
import ParksByStateList from "./ParksByStateList";
import ReviewForm from "./ReviewForm";
import Chat from "./Chat";
import Footer from "./Footer";

function App() {
  const domain = /https:\/\/[^/]+/;
  const basename = process.env.PUBLIC_URL.replace(domain, "");
  return (
    <BrowserRouter basename={basename}>
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/visited" element={<Visited />} />
        <Route path="/reviews/mine" element={<MyReviews />} />
        <Route path="/reviews/:code/reviews" element={<MyReviews />} />
        <Route path="/reviewform" element={<ReviewForm />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/park/:parkCode" element={<ParkDetails />} />
        <Route path="/parks/:state" element={<ParksByStateList />} />
        <Route path="/ws" element={<Chat />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
export default App;
