import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { Button } from "components";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        Your count is {count}
        <Button onClick={() => setCount((prev) => ++prev)} />
      </header>
    </div>
  );
}

export default App;
