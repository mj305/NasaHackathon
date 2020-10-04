import React from "react";
import "./App.css";

import MainMap from "./components/MainMap";

import Banner from "./components/Banner";

function App() {
  return (
    <div className="App">
      <Banner />
      <h1>Map Title</h1>
      <MainMap />
    </div>
  );
}

export default App;
