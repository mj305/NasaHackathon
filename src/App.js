import React from 'react';
import './App.css';

import MainMap from './components/MainMap';
import Banner from './components/Banner';

function App() {
  return (
    <div className="App">
      <Banner />
      <MainMap />
    </div>
  );
}

export default App;
