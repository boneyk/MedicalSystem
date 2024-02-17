import React from "react";
import { Container, Row, Col, Card,Button,Form,Navbar, Tab,Tabs,Spinner,Placeholder  } from "react-bootstrap";
import { Link } from "react-router-dom";
import InputGroup from 'react-bootstrap/InputGroup';



export const MainPage = () => {
  const handleCardClick = () => {
    // (token === null) ? setStatus(false) : setStatus(true);
      window.location.href = `/patient/info`;
  };
    return (
        <div style={{background:"#EAEAE2"}}>
<Container style={{ background: '#AFD6A7',borderRadius:'1rem'}} >
      <Navbar collapseOnSelect expand="lg"  className="justify-content-between" style={{ background: '#AFD6A7', marginBottom: '1rem',borderRadius:'1rem' }}>
      <Navbar.Toggle aria-controls="responsive-navbar-nav"  />
          <Navbar.Collapse id="responsive-navbar-nav" className="mr-auto" >
        <Form inline style={{ marginLeft: '4rem'}}>

          <Row className = "d-flex justify-content-center align-items-center"> 
            <Col xs="auto">
              <InputGroup className="mb-3 mt-3">
                <InputGroup.Text id="basic-addon1">ФИО:</InputGroup.Text>
                <Form.Control
                  type="text"
                />
              </InputGroup>
            </Col>

            <Col xs="auto">
              <InputGroup className="mb-3 mt-3" style={{ maxWidth: '18rem' }}>
                <InputGroup.Text id="basic-addon1">Дата рождения:</InputGroup.Text>
                <Form.Control
                  // type="text"
                  type="date"
                />
              </InputGroup>
            </Col>

            <Col xs="auto">
              <InputGroup className="mb-3 mt-3" style={{ maxWidth: '12rem' }}>
                <InputGroup.Text id="basic-addon1">Пол:</InputGroup.Text>
                <Form.Control
                type="number"
              />
              </InputGroup>
            </Col>

            <Col xs="auto" className="mb-3 mt-3">
              <Button type="submit" style={{ background: '#3C5A5C' }}>Найти</Button>
            </Col>
          </Row>
        </Form>
        </Navbar.Collapse>
      </Navbar>
    </Container>
        <Container className= "vh-100" style={{ paddingTop: '1rem', paddingBottom: '2rem',justifyContent: "center", alignItems: "center" }} id = "tourslist">
          <Container></Container>
          <Row style={{ justifyContent: "center", alignItems: "center", marginTop:'2rem' }}>
            {/* {tours?.map((tour, index) => ( */}
              <Col xs="auto" style={{ paddingBottom: '1rem' }}>
                <Card className="text-center"style={{ width: '18rem', backgroundColor: "#B8CBE9", borderRadius: '3rem' }} onClick={() => handleCardClick()}>
                  <Card.Body>
                  <Card.Img src={'img/human.png'} variant="top" style={{ width: "200px", height: "200px" }} />
                    <Card.Title>Фамилия Имя Отчество</Card.Title>
                    <Card.Text>Дата рождения</Card.Text>
                    <Card.Text style={{ marginLeft: '10px' }}>Город</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            {/* ))} */}
          </Row>
  
  
        </Container>
        </div>
    );
};