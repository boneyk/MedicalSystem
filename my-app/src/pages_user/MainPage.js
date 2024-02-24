import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card,Button,Form,Navbar, Tab,Tabs,Spinner,Placeholder  } from "react-bootstrap";
import { Link } from "react-router-dom";
import InputGroup from 'react-bootstrap/InputGroup';



export const MainPage = () => {
  const [destination, setDestination] = useState('');
  const [name, setName] = useState('');
  const [dateP, setDateP] = useState('');

  const handleCardClick = (name,DateB,city) => {
    localStorage.setItem("name", name);
    localStorage.setItem("DateB", DateB);
    localStorage.setItem("city", city);

    // (token === null) ? setStatus(false) : setStatus(true);
      window.location.href = `/patient/info`;
  };
  const handleSearch = () => {
    // localStorage.setItem("tour_id", tour.id);
  };
    return (
        <div style={{background:"#EAEAE2"}} >
<Row className="justify-content-center" style={{padding:"1rem"}}>
<Col xs="auto" className="p-0" md={10} lg={10}>
<Container style={{ background: '#AFD6A7', borderRadius: '1rem' }} md={6} lg={4}>
  <Navbar collapseOnSelect expand="lg" className="justify-content-between" style={{ background: '#AFD6A7', borderRadius: '1rem',marginLeft:'5rem' }}>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav" className="mr-auto">
      <Form inline >
        <Row className="justify-content-center">
          <Col xs="auto">
            <InputGroup className="mb-3 mt-3">
              <InputGroup.Text id="basic-addon1">ФИО:</InputGroup.Text>
              <Form.Control type="text"
              onChange={(e) => setName(e.target.value)}
              />
            </InputGroup>
          </Col>
          <Col xs="auto">
            <InputGroup className="mb-3 mt-3">
              <InputGroup.Text id="basic-addon1">Дата рождения:</InputGroup.Text>
              <Form.Control type="text"
              onChange={(e) => setDateP(e.target.value)}
              />
            </InputGroup>
          </Col>
          <Col xs="auto">
            <InputGroup className="mb-3 mt-3">
              <InputGroup.Text id="basic-addon1">Город:</InputGroup.Text>
              <Form.Control type="text"
              onChange={(e) => setDestination(e.target.value)}
              />
            </InputGroup>
          </Col>
          <Col xs="auto" className="mb-3 mt-3">
            <img src={`/img/search.png`} style={{ width: "40px", height: "40px", marginRight: "20px", marginBottom: "1rem" }} />
            <Button type="submit" style={{ background: '#3C5A5C', borderColor: "#3C5A5C" }} onClick={() => handleSearch()} >Найти</Button>
          </Col>
        </Row>
      </Form>
    </Navbar.Collapse>
  </Navbar>
</Container>
</Col>
</Row>

        <Container className= "vh-100" style={{ paddingTop: '1rem', paddingBottom: '2rem',justifyContent: "center", alignItems: "center" }} id = "tourslist">
          <Container></Container>
          <Row style={{ justifyContent: "center", alignItems: "center", marginTop:'2rem' }}>
            {/* {tours?.map((tour, index) => ( */}
              <Col xs="auto" style={{ paddingBottom: '1rem' }}>
                <Card className="text-center"style={{ width: '18rem', backgroundColor: "#B8CBE9", borderRadius: '3rem' }} onClick={() => handleCardClick("Петров Петр Петрович","16.01.1989","Санкт-Петербург")}>
                  <Card.Body>
                  <Card.Img src={'img/human.png'} variant="top" style={{ width: "200px", height: "200px" }} />
                    <Card.Title>Петров Петр Петрович</Card.Title>
                    <Card.Text>16 января 1989</Card.Text>
                    <Card.Text style={{ marginLeft: '10px' }}>Санкт-Петербург</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs="auto" style={{ paddingBottom: '1rem' }}>
                <Card className="text-center"style={{ width: '18rem', backgroundColor: "#B8CBE9", borderRadius: '3rem' }} onClick={() => handleCardClick("Ковалев Роман Юрьевич","12.04.1999","Петропавловск-Камчатский")}>
                  <Card.Body>
                  <Card.Img src={'img/human.png'} variant="top" style={{ width: "200px", height: "200px" }} />
                    <Card.Title>Ковалев Роман Юрьевич</Card.Title>
                    <Card.Text>12 апреля 1999</Card.Text>
                    <Card.Text style={{ marginLeft: '10px' }}>Петропавловск-Камчатский</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs="auto" style={{ paddingBottom: '1rem' }}>
                <Card className="text-center"style={{ width: '18rem', backgroundColor: "#B8CBE9", borderRadius: '3rem' }} onClick={() => handleCardClick("Павлов Павел Павлович","05.06.1983","Владивосток")}>
                  <Card.Body>
                  <Card.Img src={'img/human.png'} variant="top" style={{ width: "200px", height: "200px" }} />
                    <Card.Title>Павлов Павел Павлович</Card.Title>
                    <Card.Text>5 июня 1983</Card.Text>
                    <Card.Text style={{ marginLeft: '10px' }}>Владивосток</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs="auto" style={{ paddingBottom: '1rem' }}>
                <Card className="text-center"style={{ width: '18rem', backgroundColor: "#B8CBE9", borderRadius: '3rem' }} onClick={() => handleCardClick("Федоров Федор Федоров","23.09.2003","Москва")}>
                  <Card.Body>
                  <Card.Img src={'img/human.png'} variant="top" style={{ width: "200px", height: "200px" }} />
                    <Card.Title>Федоров Федор Федоров</Card.Title>
                    <Card.Text>23 сентября 2003</Card.Text>
                    <Card.Text style={{ marginLeft: '10px' }}>Москва</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs="auto" style={{ paddingBottom: '1rem' }}>
                <Card className="text-center"style={{ width: '18rem', backgroundColor: "#B8CBE9", borderRadius: '3rem' }} onClick={() => handleCardClick("Иванов Иван Иваныч","07.02.2000","Хабаровск")}>
                  <Card.Body>
                  <Card.Img src={'img/human.png'} variant="top" style={{ width: "200px", height: "200px" }} />
                    <Card.Title>Иванов Иван Иванович</Card.Title>
                    <Card.Text>7 февраля 2000</Card.Text>
                    <Card.Text style={{ marginLeft: '10px' }}>Хабаровск</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs="auto" style={{ paddingBottom: '1rem' }}>
                <Card className="text-center"style={{ width: '18rem', backgroundColor: "#B8CBE9", borderRadius: '3rem' }} onClick={() => handleCardClick("Петров Петр Петрович","05.10.1990","Новосибирск")}>
                  <Card.Body>
                  <Card.Img src={'img/human.png'} variant="top" style={{ width: "200px", height: "200px" }} />
                    <Card.Title>Петров Петр Петрович</Card.Title>
                    <Card.Text>5 октября 1990</Card.Text>
                    <Card.Text style={{ marginLeft: '10px' }}>Новосибирск</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            {/* ))} */}
          </Row>
  
  
        </Container>
        </div>
    );
};