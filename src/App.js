import React from "react";
import "./styles.css";
import UseCallback from "./useCallback";

export default function App() {
  return (
    <div className="App">
      <h1>Hello Callback!</h1>
      <h2>Start editing to see some magic happen!</h2>
      <button onClick={() => setKelas("XII RPL")}>fck u</button>
      <div>
        <UseCallback kelas="XII RPL" />
      </div>
    </div>
  );
}
