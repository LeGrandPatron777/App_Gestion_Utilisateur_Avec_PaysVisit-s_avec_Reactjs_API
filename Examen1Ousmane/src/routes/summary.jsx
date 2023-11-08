import React from "react";
import { Card } from "react-bootstrap";
import SelectUser from "../components/selectUser";
import UserCountries from "../components/displayUserCountries";

const SummaryPage = () => {
  return (
    <Card>
      <Card.Header>
        <strong>
          <h1>Galerie</h1>
        </strong>
      </Card.Header>
      <Card.Body>
        <SelectUser />
        <UserCountries />
      </Card.Body>
    </Card>
  );
};
export default SummaryPage;
