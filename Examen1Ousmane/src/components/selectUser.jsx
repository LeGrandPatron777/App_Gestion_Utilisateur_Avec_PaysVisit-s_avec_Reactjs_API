import React from "react";
import { Row, Col, Form, Button, Card } from "react-bootstrap";
import { useSelector } from "react-redux";

const SelectUser = () => {
  const users = useSelector((state) => state.user.users);

  return (
    <Card>
      <Card.Header>
        <strong>Selectionner l'utilisateur</strong>
      </Card.Header>
      <Card.Body>
        <div>
          <Row>
            <Col md={8}>
              <Form.Group controlId="userSelect">
                <Form.Label>Utilisateur</Form.Label>
                <Form.Control as="select">
                  {users.map((user, index) => (
                    <option key={index} value={user.id}>
                      {user.nom}
                    </option>
                  ))}
                </Form.Control>
              </Form.Group>
            </Col>
            <Col md={4}>
              <Button variant="dark">Afficher</Button>
            </Col>
          </Row>
        </div>
      </Card.Body>
    </Card>
  );
};

export default SelectUser;
