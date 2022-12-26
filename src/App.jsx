import { useState, useEffect, useCallback } from "react";

import "./App.css";

function App() {
  const [selected, setSelected] = useState("");

  const selectText = useCallback(() => {
    document.addEventListener("mousedown", () => setSelected(""));
    document.addEventListener("mouseup", () => {
      const selected = window.getSelection().toString();
      if (selected) setSelected(selected);
    });
  }, [selected]);

  useEffect(() => {
    selectText();
  }, [selectText]);

  console.log("selected ==> ", selected);
  return (
    <div className="App">
      <h3>welcome to react app </h3>
    </div>
  );
}

export default App;
