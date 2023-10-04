// write rafce and enter for react components
import { useState } from "react";
import "./App.css";

const App = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="card">
      <p>No of Count {count} Times </p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
};

export default App;
