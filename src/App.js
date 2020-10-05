import React, { useState } from "react";
import ReactTooltip from "react-tooltip";

import Footer from "./components/Footer";
import Header from "./components/Header";
import MainMap from "./components/MainMap";

function App() {
  const [content, setContent] = useState("");

  return (
    <>
      <Header />
      <div>
        <MainMap setTooltipContent={setContent} />
        <ReactTooltip>{content}</ReactTooltip>
      </div>
      <Footer />
    </>
  );
}

export default App;
