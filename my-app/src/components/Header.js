import React from "react";
import { Container, Row,Navbar, Nav } from "react-bootstrap";
import {Link} from "react-router-dom";


const Header = () => (
    <Container style={{ borderBottom: '1px solid black', background:"#EAEAE2", padding:'1px' }} fluid>
        <Row xs="auto" className="justify-content-center mt-4" style={{ padding: '1rem'}}>
        <Container md = {1}>
            <img src="/img/banner.png" width={'90'} height={'90'} alt="tourAgency icon"/>
        </Container>
        <Container md = {1} className="d-flex align-items-center justify-content-left">
            <h1 style={{ fontSize: "30px", textAlign: "center" }} className="text-center ">Медицинская система</h1>
        </Container>
        <Container md = {1} className="d-flex align-items-center justify-content-right">
            <h1 style={{ fontSize: "25px", textAlign: "bottom" }}>Выйти</h1>
        </Container>
        <Nav>
        <Nav.Link eventKey="catalog">
        {/* <Link to="/api/tours" style={{
                              textDecoration: "none",
                              color: "black",
                            }}>
            <div style={{ textAlign: "center" }} >
            <img
                src="/img/catalog.png"
                width="40"
                height="40"
                className="d-inline-block align-top"
                alt="Catalog icon"
            />
            <div>Каталог</div>
            </div>
        </Link> */}
        </Nav.Link>
        </Nav>
    </Row>
    </Container>
);
export default Header;