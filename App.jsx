import React from "react";
import "./App.css";

function App() {
  return (
    <div className="landing-page">
      <div className="landing-content">
        <h1>Paradise Nursery</h1>

        <p>
          Welcome to Paradise Nursery – your online destination for
          beautiful and healthy plants.
        </p>

        <button onClick={() => alert("Welcome to Paradise Nursery!")}>
          Get Started
        </button>
      </div>
    </div>
  );
}

export default App;
