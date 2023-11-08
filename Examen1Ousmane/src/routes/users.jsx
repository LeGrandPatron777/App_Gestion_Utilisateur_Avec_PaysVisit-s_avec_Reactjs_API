import React from "react";
import { Card } from "react-bootstrap";
import AddUser from "../components/addUsers";
import UsersList from "../components/usersList";
import AssociateCountryToUser from "../components/associateUserCountry";

const UsersPage = () => {
  return (
    <Card>
      <Card.Header>
        <strong>
          <h1>Utilisateur</h1>
        </strong>
      </Card.Header>
      <Card.Body>
        <AddUser />
        <UsersList />
        <AssociateCountryToUser />
      </Card.Body>
    </Card>
  );
};

export default UsersPage;
