import React, { useState } from "react";
import ReactTooltip from "react-tooltip";

import MapChart from "./components/MapChart";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const [content, setContent] = useState("");

  return (
    <>
      <Header />
      <div className="App">
        <h1>FLOOD OF IDEAS</h1>
        <MapChart setTooltipContent={setContent} />
        <ReactTooltip>{content}</ReactTooltip>
      </div>
      <Footer />
    </>
  );
}

export default App;
