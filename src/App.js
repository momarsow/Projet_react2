// src/App.js

import React from "react";
import PlayersList from "./components/PlayersList";
import "./App.css";

// Nom personnalisé pour le message de bienvenue
const firstName = "Momsk";

function App() {
  return (
    <div className="App">
      <h1>FIFA Player Cards</h1>
      <PlayersList />
      <div className="greeting">
        <p>Bonjour, {firstName ? firstName : "là"} !</p>
        {firstName && (
          <img
            src="https://cdn-icons-png.flaticon.com/512/219/219983.png"
            alt="user"
            className="avatar"
          />
        )}
      </div>
    </div>
  );
}

export default App;
