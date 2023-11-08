import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import { useSelector } from "react-redux";

const Countries = () => {
  const users = useSelector((state) => state.user.users);

  return (
    <Row>
      {users.map((user, userIndex) => (
        <Col key={userIndex}>
          <Card>
            <Card.Img variant="top" />
            <Card.Body>
              <Card.Title>{user.nom}</Card.Title>
              <Card.Text>
                Pays associés:
                <ul>
                  {(user.listPays || []).map((pays, paysIndex) => (
                    <li key={paysIndex}>{pays}</li>
                  ))}
                </ul>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default Countries;
