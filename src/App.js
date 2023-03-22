import React from "react";
import Game from "./components/Game";

function App() {

  const token = '3XNDAGS-TW1MQ0N-MSEG4CV-KFSCFRJ';

  return (
    <div>
      РАБОТАЕТ
      <Game token={token}/>
    </div>
  );
}

export default App;
