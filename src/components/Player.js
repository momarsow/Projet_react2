import React from "react";
import Card from "react-bootstrap/Card";

// Composant Player qui reçoit les props d'un joueur
function Player({ name, team, nationality, jerseyNumber, age, image }) {
  return (
    <Card style={{ width: "18rem", margin: "1rem" }}>
      <Card.Img
        variant="top"
        src={image}
        alt={name}
        style={{ height: "300px", objectFit: "cover" }}
      />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>Équipe : {team}</Card.Text>
        <Card.Text>Nationalité : {nationality}</Card.Text>
        <Card.Text>Numéro : {jerseyNumber}</Card.Text>
        <Card.Text>Âge : {age} ans</Card.Text>
      </Card.Body>
    </Card>
  );
}

// On définit des props par défaut au cas où
Player.defaultProps = {
  name: "Joueur inconnu",
  team: "Équipe inconnue",
  nationality: "Nationalité inconnue",
  jerseyNumber: 0,
  age: 0,
  image: "https://via.placeholder.com/300x200.png?text=Pas+d'image",
};

export default Player;
