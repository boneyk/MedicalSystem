import React, { useState } from 'react';
import { Container, Row, Col, Card,Button,Form,Navbar, Tab,Tabs,Spinner,Placeholder  } from "react-bootstrap";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import InputGroup from 'react-bootstrap/InputGroup';



export const Info = () => {
    const [showHeard, setShowHeard] = useState(false);
    const [showVessels, setShowVessels] = useState(false);
    const [showKidneys, setShowKidneys] = useState(false);
    const [showPancreas, setShowPancreas] = useState(false);
    const [showBlood, setShowBlood] = useState(false);
    const [showVision, setShowVision] = useState(false);
    const [showHormones, setShowHormones] = useState(false);

    return (
        <div style={{background:"#EAEAE2"}}>
            <Container style={{ paddingTop: '2rem', paddingBottom: '2rem',justifyContent: "center", alignItems: "center" }}>
        <Container></Container>
        <h2 style={{ paddingLeft: '6rem', paddingBottom: '1rem',justifyContent: "center", alignItems: "center"  }}>• Личные данные •</h2>
      <Row style={{justifyContent: "center", alignItems: "center"}}>
      <Col xs="auto" >
        <img src={`/img/humanInfo.png`} style={{ width: "250px", height: "250px", marginRight: "20px",marginBottom:"1rem" }} />
        </Col>
        <Col  xs="auto" className="p-0" md={8} lg={6} >
        <Card
              className="shadow px-4"
              style={{ backgroundColor: "#B8CBE9", borderColor: "#B8CBE9", marginBottom: "20px" }}
            >
                <h2 style={{borderBottom:'1px solid black'}}>Информация о пациенте:</h2>
          <Form.Group className="mb-3" controlId="Login">
            <Form.Label className="text-center">ФИО:</Form.Label>
            <Form.Control
              type="text"
              name="login"
              readOnly
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className="text-center">Дата рождения:</Form.Label>
            <Form.Control
              type="date"
              name="email"
              readOnly
            />
          </Form.Group>
          <Row>
                      <Col>
                      <Form.Group
                        className="mb-3"
                        controlId="text"
                      >
                        <Form.Label>Рост</Form.Label>
                        <Form.Control
                          type="text"
                          name = "sex"
                          readOnly
                        />
                      </Form.Group>
                      </Col>
                      <Col>
                      <Form.Group
                        className="mb-3"
                        controlId="text"
                      >
                        <Form.Label>Вес</Form.Label>
                        <Form.Control
                          type="text"
                          name = "password"
                          readOnly
                        />
                      </Form.Group>
                      </Col>
                      </Row>

          <Form.Group className="mb-3" controlId="Password">
            <Form.Label className="text-center">Город проживания</Form.Label>
            <Form.Control
              type="text"
              name="password"
              readOnly
            />
          </Form.Group>
          </Card>

        </Col>
      <h2 style={{ paddingLeft: '6rem', paddingBottom: '1rem', justifyContent: "center", alignItems: "center" }}>Анализы пациента:</h2>
      <Col xs="auto"className="p-0" md={8} lg={8}>
        <Card className="shadow px-4" style={{ marginBottom: "20px",padding: "1rem" }}>
          <div style={{ display: 'flex', alignItems: 'center',padding: "1rem" }}>
            <img
              src="/img/sort_down.png"
              alt="arrow"
              style={{ width: '40px', height: '40px', cursor: 'pointer' }}
              onClick={() => setShowHeard(!showHeard)}
            />
            <span style={{ marginLeft: '10px',fontSize:'25px' }}>Сердце</span>
          </div>
          {showHeard && (
            <div>лалалалалаллаал
            </div>
          )}
          <div style={{ display: 'flex', alignItems: 'center',padding: "1rem" }}>
            <img
              src="/img/sort_down.png"
              alt="arrow"
              style={{ width: '40px', height: '40px', cursor: 'pointer' }}
              onClick={() => setShowVessels(!showVessels)}
            />
            <span style={{ marginLeft: '10px',fontSize:'25px' }}>Сосуды</span>
          </div>
          {showVessels && (
            <div>лалалалалаллаал
            </div>
          )}
          <div style={{ display: 'flex', alignItems: 'center',padding: "1rem" }}>
            <img
              src="/img/sort_down.png"
              alt="arrow"
              style={{ width: '40px', height: '40px', cursor: 'pointer' }}
              onClick={() => setShowKidneys(!showKidneys)}
            />
            <span style={{ marginLeft: '10px',fontSize:'25px' }}>Почки</span>
          </div>
          {showKidneys && (
            <div>лалалалалаллаал
            </div>
          )}
          <div style={{ display: 'flex', alignItems: 'center',padding: "1rem" }}>
            <img
              src="/img/sort_down.png"
              alt="arrow"
              style={{ width: '40px', height: '40px', cursor: 'pointer' }}
              onClick={() => setShowPancreas(!showPancreas)}
            />
            <span style={{ marginLeft: '10px',fontSize:'25px' }}>Поджелудочная железа</span>
          </div>
          {showPancreas && (
            <div>лалалалалаллаал
            </div>
          )}
          <div style={{ display: 'flex', alignItems: 'center',padding: "1rem" }}>
            <img
              src="/img/sort_down.png"
              alt="arrow"
              style={{ width: '40px', height: '40px', cursor: 'pointer' }}
              onClick={() => setShowBlood(!showBlood)}
            />
            <span style={{ marginLeft: '10px',fontSize:'25px' }}>Кровь</span>
          </div>
          {showBlood && (
            <div>лалалалалаллаал
            </div>
          )}
          <div style={{ display: 'flex', alignItems: 'center',padding: "1rem" }}>
            <img
              src="/img/sort_down.png"
              alt="arrow"
              style={{ width: '40px', height: '40px', cursor: 'pointer' }}
              onClick={() => setShowVision(!showVision)}
            />
            <span style={{ marginLeft: '10px',fontSize:'25px' }}>Зрение</span>
          </div>
          {showVision && (
            <div>лалалалалаллаал
            </div>
          )}
          <div style={{ display: 'flex', alignItems: 'center',padding: "1rem" }}>
            <img
              src="/img/sort_down.png"
              alt="arrow"
              style={{ width: '40px', height: '40px', cursor: 'pointer' }}
              onClick={() => setShowHormones(!showHormones)}
            />
            <span style={{ marginLeft: '10px',fontSize:'25px' }}>Уровень гормонов</span>
          </div>
          {showHormones && (
            <div>лалалалалаллаал
            </div>
          )}
        </Card>
      </Col>
      <h2 style={{ paddingLeft: '6rem', paddingBottom: '1rem', justifyContent: "center", alignItems: "center" }}>Состояние здоровья:</h2>
<Col xs="auto" className="p-0" md={8} lg={8}>
    <Card className="shadow px-4" style={{ marginBottom: "20px", padding: "1rem", background:"#AFD6A7" }}>
        <Row>
            <Col xs="auto"  md={8} lg={6}>
                <img src={`/img/checklist.png`} style={{ width: "250px", height: "250px", marginBottom:"1rem" }} />
            </Col>
            <Col xs="auto"  md={8} lg={6} >
                <Form.Group className="mb-3" controlId="recommendedHealthGroup">
                    <Form.Label className="text-center">Рекомендованная группа здоровья:</Form.Label>
                    <Form.Control type="text" name="recommendedHealthGroup" readOnly />
                </Form.Group>
                <Form.Group className="mb-3" controlId="selectedHealthGroup">
            <Form.Label className="text-center">Установленная группа здоровья:</Form.Label>
            <Form.Select aria-label="Default select example">
                <option value="1">1 группа здоровья</option>
                <option value="2">2 группа здоровья</option>
                <option value="3">3 группа здоровья</option>
                <option value="4">4 группа здоровья</option>
                <option value="5">5 группа здоровья</option>
            </Form.Select>
        </Form.Group>
        <Button style={{backgroundColor: "#ffffff",borderColor:"#ffffff"}}>
            <h1 style={{fontSize:"15px",color:"black"}}>Подтвердить</h1>
        </Button>
            </Col>
        </Row>
    </Card>   
</Col>


        </Row>
          </Container>
        </div>
    );
};