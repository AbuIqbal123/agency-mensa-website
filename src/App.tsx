import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Philosophy from "./components/philosophy/Philosophy";
import Offer from "./components/offer/Offer";
import Contact from "./components/contact/ContactPage";
import Faq from "./components/faq/Faq";

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Home />
        <Philosophy />
        <Offer />        
        <Faq />
        <Contact />
      </main>
    </>
  );
}

export default App;
