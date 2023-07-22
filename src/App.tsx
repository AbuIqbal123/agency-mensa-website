import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Philosophy from "./components/philosophy/Philosophy";
import Offer from "./components/offer/Offer";
import Contact from "./components/contact/ContactPage";

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Home />
        <Philosophy />
        <Offer />
        <Contact />
      </main>
    </>
  );
}

export default App;
