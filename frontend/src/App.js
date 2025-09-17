import React from "react";
import UploadPanel from "./components/UploadPanel";
import ResultView from "./components/ResultView";

function App() {
  return (
    <div className="App">
      <h1>Leaf Health Assessment 🌿</h1>
      <UploadPanel />
      <ResultView />
    </div>
  );
}

export default App;
