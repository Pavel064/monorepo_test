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
        <button onClick={() => setCount((prev) => ++prev)}>test Button</button>
        {/* <Button /> */}
      </header>
    </div>
  );
}

export default App;
