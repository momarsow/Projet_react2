// src/components/Player.jsx

import React from "react";
import Card from "react-bootstrap/Card";

// Composant pour afficher un joueur sous forme de carte
function Player({
  name = "Inconnu",
  team = "N/A",
  nationality = "N/A",
  jerseyNumber = 0,
  age = 0,
  image = "",
}) {
  return (
    <Card
      style={{
        width: "18rem",
        margin: "1rem",
        boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
      }}
    >
      <Card.Img
        variant="top"
        src={image}
        alt={name}
        style={{ height: "280px", objectFit: "cover" }}
      />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          <strong>Équipe :</strong> {team} <br />
          <strong>Nationalité :</strong> {nationality} <br />
          <strong>Numéro :</strong> {jerseyNumber} <br />
          <strong>Âge :</strong> {age}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Player;
