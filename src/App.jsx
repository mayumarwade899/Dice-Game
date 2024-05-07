import { useState } from "react";
import Homepage from "./components/Homepage";
import Gameplay from "./components/Gameplay";

function App() {
  const [isGameStarted, setIsGameStarted] = useState(false);

  const toggleGameplay = () => {
    setIsGameStarted((prev) => !prev);
  };

  return (
    <div>
      {isGameStarted ? <Gameplay /> : <Homepage toggle={toggleGameplay}/>}
    </div>
  );
}

export default App;
