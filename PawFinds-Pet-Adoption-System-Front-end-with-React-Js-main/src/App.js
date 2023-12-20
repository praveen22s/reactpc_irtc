import React from "react";
import Navbar from "./Components/NavBar/Navbar";
import Home from "./Components/Home/Home";
import Footer from "./Components/Footer/Footer";
import Services from "./Components/Services/Services";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Blogs from "./Components/Blogs/Blogs";
import Contact from "./Components/Contact/Contact";
import Pets from "./Components/Pets/Pets";
import AdoptForm from "./Components/AdoptForm/AdoptForm";
import AdminLogin from "./Components/AdminPanel/AdminLogin";
import Login from "./Components/Login/Login";

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar title="PawFinds" />
                <Home description="Ensure you are fully prepared to provide proper care and attention to your pet before welcoming them into your home." />
                <Footer title="PawFinds" />
              </>
            }
          />
          <Route
            path="/services"
            element={
              <>
                <Navbar title="PawFinds" />
                <Services />
                <Footer title="PawFinds" />
              </>
            }
          />
          <Route
            path="/blogs"
            element={
              <>
                <Navbar title="PawFinds" />
                <Blogs />
                <Footer title="PawFinds" />
              </>
            }
          />
          <Route
            path="/contact"
            element={
              <>
                <Navbar title="PawFinds" />
                <Contact />
                <Footer title="PawFinds" />
              </>
            }
          />
          <Route
            path="/Login"
            element={
              <>
                <Navbar title="PawFinds" />
                <Login />
                <Footer title="PawFinds" />
              </>
            }
          />
          <Route
            path="/pets"
            element={
              <>
                <Navbar title="PawFinds" />
                <Pets />
                <Footer title="PawFinds" />
              </>
            }
          />
          <Route
            path="/adopt-form"
            element={
              <>
                <Navbar title="PawFinds" />
                <AdoptForm />
                <Footer title="PawFinds" />
              </>
            }
          />
          <Route path="/admin" element={<AdminLogin />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
