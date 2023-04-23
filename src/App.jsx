import { useState } from "react";
import ContainerRickAndMorty from "./components/container-card/Container-card";
import "./App.css";
import Buttons from "./components/buttons/Buttons";

function App() {
  const [count, setCount] = useState(1);
  return (
    <>
      <ContainerRickAndMorty count={count} />
      <Buttons
        count={count}
        next={() => setCount(count + 1)}
        prev={() => setCount(count - 1)}
      />
    </>
  );
}

export default App;
