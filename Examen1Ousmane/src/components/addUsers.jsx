import React, { useState } from "react";
import { Form, Button, Card } from "react-bootstrap";
import { FaUser, FaBirthdayCake } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { registerUser } from "../actions/registerAction";

const AddUser = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    dateDeNaissance: "",
    listPays: [],
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(registerUser(formData));
    // Réinitialiser le formulaire apres l'inscription
    setFormData({
      nom: "",
      prenom: "",
      dateDeNaissance: "",
    });
  };

  return (
    <Card>
      <Card.Header>
        <strong>Ajouter un nouvel utilisateur</strong>
      </Card.Header>
      <Card.Body>
        <div>
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label>Nom</Form.Label>
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <FaUser />
                  </span>
                </div>
                <Form.Control
                  type="text"
                  name="nom"
                  value={formData.nom}
                  placeholder="Entrez votre nom"
                  className="border-dark"
                  onChange={handleChange}
                  required
                />
              </div>
            </Form.Group>

            <Form.Group>
              <Form.Label>Prénom</Form.Label>
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <FaUser />
                  </span>
                </div>
                <Form.Control
                  type="text"
                  name="prenom"
                  value={formData.prenom}
                  placeholder="Entrez votre prénom"
                  className="border-dark"
                  onChange={handleChange}
                  required
                />
              </div>
            </Form.Group>

            <Form.Group>
              <Form.Label>Date de naissance</Form.Label>
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <FaBirthdayCake />
                  </span>
                </div>
                <Form.Control
                  type="date"
                  name="dateDeNaissance"
                  className="border-dark"
                  value={formData.dateDeNaissance}
                  onChange={handleChange}
                  required
                />
              </div>
            </Form.Group>

            <Button className="mt-3 w-100" variant="dark" type="submit">
              Ajouter
            </Button>
          </Form>
        </div>
      </Card.Body>
    </Card>
  );
};

export default AddUser;
