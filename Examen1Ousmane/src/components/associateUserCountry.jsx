import React, { useState, useEffect } from "react";
import { Row, Col, Form, Button, Card } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { associateCountryToUser } from "../actions/associateAction";

const AssociateCountryToUser = () => {
  const [countries, setCountries] = useState([]);
  const [selectedUser, setSelectedUser] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");
  const users = useSelector((state) => state.user.users);
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get(`https://restcountries.com/v3.1/all`)
      .then((res) => {
        setCountries(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleUserChange = (e) => {
    setSelectedUser(e.target.value);
  };

  const handleCountryChange = (e) => {
    setSelectedCountry(e.target.value);
  };

  const handleAssociate = () => {
    if (selectedUser && selectedCountry) {
      dispatch(associateCountryToUser(selectedUser, selectedCountry));
    }
  };

  return (
    <Card>
      <Card.Header>
        <strong>Associer un pays à un utilisateur</strong>
      </Card.Header>
      <Card.Body>
        <div>
          <Row>
            <Col md={6}>
              <Form.Group controlId="userSelect">
                <Form.Label>Utilisateur</Form.Label>
                <Form.Control
                  as="select"
                  value={selectedUser}
                  onChange={handleUserChange}
                >
                  <option value="">Sélectionnez un utilisateur</option>
                  {users.map((user, index) => (
                    <option key={index} value={user.id}>
                      {user.nom}
                    </option>
                  ))}
                </Form.Control>
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="countrySelect">
                <Form.Label>Pays</Form.Label>
                <Form.Control
                  as="select"
                  value={selectedCountry}
                  onChange={handleCountryChange}
                >
                  <option value="">Sélectionnez un pays</option>
                  {Array.isArray(countries) &&
                    countries.map((country, index) => (
                      <option key={index} value={country.name.common}>
                        {country.name.common}
                      </option>
                    ))}
                </Form.Control>
              </Form.Group>
            </Col>
          </Row>

          <Button variant="dark" onClick={handleAssociate}>
            Associer
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default AssociateCountryToUser;
