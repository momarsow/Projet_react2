import React from "react";
import Player from "./Player";
import players from "../data/players";

// Composant PlayersList qui affiche la liste de joueurs
const PlayersList = () => {
  return (
    <div
      style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
    >
      {players.map((player, index) => (
        <Player key={index} {...player} />
      ))}
    </div>
  );
};

export default PlayersList;
