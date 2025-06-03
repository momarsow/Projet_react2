import React from "react";
import Player from "./Player";
import { players } from "../data/players";

// Composant qui affiche tous les joueurs
function PlayersList() {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        padding: "2rem",
      }}
    >
      {players.map((player, index) => (
        <Player key={index} {...player} />
      ))}
    </div>
  );
}

export default PlayersList;
