import React from "react";
import { Button, Container, Row } from "react-bootstrap";
import {Link} from "react-router-dom";


export const NotFound = () => (
    <div style={{ background:"#EAEAE2", minHeight: "100vh" }}fluid>
  <Container>
    <Row className="d-flex justify-content-center align-items-center">
      <h1 className="text-center" style={{ paddingTop: "2rem", paddingBottom:'1rem'}}>
        К сожалению, такой странички не существует.
      </h1>
    </Row>
    <Row className="d-flex justify-content-center align-items-center" style={{paddingBottom:'1rem'}}>
    <Button variant="primary" type="submit" style={{ width: "200px", height: "50px", backgroundColor: "#3C5A5C", borderColor: "#3C5A5C"  }}>
      <Link to="/" style={{ textDecoration: 'none', color:'white' }}>Вернуться ко входу</Link>
    </Button>
    </Row>
  </Container>
  </div>
);