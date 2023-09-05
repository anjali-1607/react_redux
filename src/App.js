import React from "react";
import "./App.css";

export default function App() {
  return (
    <>
      <div class="container">
        <h1>Counter App</h1>
        <div class="counter">
          <button id="increment-btn">+</button>
          <div id="counter-value">0</div>
          <button id="decrement-btn">-</button>
        </div>
        <button id="reset">Reset</button>
      </div>
    </>
  );
}
