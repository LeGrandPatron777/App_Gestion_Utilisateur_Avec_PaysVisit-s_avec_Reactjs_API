import React from "react";
import { Card } from "react-bootstrap";
import Countries from "../components/displayCountry";

const CountryPage = () => {
  return (
    <Card>
      <Card.Header>
        <strong>
          <h1>Pays</h1>
        </strong>
      </Card.Header>
      <Card.Body>
        <Countries />
      </Card.Body>
    </Card>
  );
};

export default CountryPage;
