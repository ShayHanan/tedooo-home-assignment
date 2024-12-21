import './App.css';
import Navbar from "./components/navbar/Navbar";
import Feed from "./components/Feed/Feed";
import React from "react";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Feed/>
    </div>
  );
}

export default App;
