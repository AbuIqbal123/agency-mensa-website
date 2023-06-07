import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Philosophy from "./components/philosophy/Philosophy";

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Home />
        <Philosophy />
      </main>
    </>
  );
}

export default App;
