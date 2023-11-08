import React from "react";
import { Card, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { deleteUser } from "../actions/deleteAction";

const UsersList = () => {
  const users = useSelector((state) => state.user.users);
  const dispatch = useDispatch();

  const handleDelete = (userNom) => {
    dispatch(deleteUser(userNom));
  };

  return (
    <Card>
      <Card.Header>
        <strong>Liste des utilisateurs</strong>
      </Card.Header>
      <Card.Body>
        <ul>
          {users.map((user, index) => (
            <li key={index}>
              <strong>Nom: </strong>
              {user.nom}, <strong> Prenom: </strong>
              {user.prenom}, <strong>Date de Naissance: </strong>
              {user.dateDeNaissance}
              <Button
                variant="danger"
                onClick={() => handleDelete(user.nom)}
                className="ml-2 mt-3"
              >
                Supprimer
              </Button>
            </li>
          ))}
        </ul>
      </Card.Body>
    </Card>
  );
};

export default UsersList;
