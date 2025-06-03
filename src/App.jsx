import React from "react";
import PlayersList from "./PlayersList";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const firstName = "Votre prénom ici"; // Remplacez par votre prénom ou laissez vide

  return (
    <div>
      <h1 style={{ textAlign: "center", marginTop: "1rem" }}>Cartes FIFA 🏆</h1>
      <PlayersList />
      <div style={{ textAlign: "center", margin: "2rem" }}>
        <h2>Bonjour, {firstName ? firstName : "là"} !</h2>
        {firstName && (
          <img
            src="https://cdn-icons-png.flaticon.com/512/1995/1995574.png"
            alt="Hello"
            width="100"
          />
        )}
      </div>
    </div>
  );
}

export default App;
