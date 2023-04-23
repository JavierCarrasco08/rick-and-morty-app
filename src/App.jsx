import { useState } from "react";
import ContainerRickAndMorty from "./components/container-card/Container-card";
import "./App.css";

function App() {
  const [count, setCount] = useState(1);
  return (
    <>
      <ContainerRickAndMorty count={count} />
    </>
  );
}

export default App;
