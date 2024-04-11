import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../component/Home/Home";
import About from "../component/about/About";
import Contact from "../component/contact/Contact";
import Profile from "../component/profile/Profile";
import Login from "../component/login/Login";
import Blog from "../component/blog-page/Blog";

function Routing() {
  return (
    <>
      <Routes>
        <Route path="/" activeClassName="active" element={<Home />}></Route>
        <Route path="/about" activeClassName="active" element={<About />}></Route>
        <Route path="/contact" activeClassName="active" element={<Contact />}></Route>
        <Route path="/profile" activeClassName="active" element={<Profile />}></Route>
        <Route path="/login" activeClassName="active" element={<Login />}></Route>
        <Route path="/home/blog/:ID" activeClassName="active" element={<Blog />}></Route>
      </Routes>
    </>
  );
}

export default Routing;
