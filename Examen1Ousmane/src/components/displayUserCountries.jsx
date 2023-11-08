import React from "react";
import { Row, Col, Card } from "react-bootstrap";

const UserCountries = () => {
  return (
    <Row>
      <Col>
        <Card>
          <Card.Header>Liste des pays de l'utilisateur</Card.Header>
          <Card.Img variant="top" />
          <Card.Body>
            <Card.Title>Nom du pays</Card.Title>
            <Card.Text>
              Continent:
              <br />
              Capitale:
              <br />
              Monnaie:
              <br />
              Langue:
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default UserCountries;
