import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";

export const DelAcc = () => {
  const [login, setLogin] = useState("");
  const [loginDirty, setLoginDirty] = useState(false);
  const [loginError, setLoginError] = useState("Логин не должен быть пустым");
  const [success, setSuccess] = useState(false);

  const handleLoginChange = (event) => {
    setLogin(event.target.value);
  };

  const blurHandler = (e) => {
    switch (e.target.name) {
      case "login":
        if (login === "") {
          setLoginDirty(true);
          setSuccess(false);
        } else {
          setLoginDirty(false);
          setSuccess(true);
        }
        break;
    }
  };

  return (
    <div style={{ background: "#EAEAE2" }}>
      <Container style={{ paddingTop: '2rem', paddingBottom: '2rem', justifyContent: "center", alignItems: "center" }}>
        <h2 style={{ paddingLeft: '6rem', paddingBottom: '1rem', justifyContent: "center", alignItems: "center" }}>• Система работы администратора •</h2>
        <Row style={{ justifyContent: "center", alignItems: "center" }}>
          <Col xs="auto">
            <img src={`/img/medical.png`} style={{ width: "250px", height: "250px", marginRight: "20px", marginBottom: "1rem" }} />
          </Col>
          <Col xs="auto" className="p-0" md={8} lg={6}>
            <Card
              className="shadow px-4"
              style={{ background: "#AFD6A7", borderColor: "#B8CBE9", marginBottom: "20px" }}
            >
              <h3 style={{ borderBottom: '1px solid black' }}>Поиск учетной записи врача:</h3>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="text-center">Логин:</Form.Label>
                <Form.Control
                  type="text"
                  name="login"
                  onBlur={e => blurHandler(e)}
                  onChange={handleLoginChange}
                />
              </Form.Group>
              {loginDirty && <div style={{ color: 'red' }}>{loginError}</div>}
              <Row style={{ justifyContent: "right", alignItems: "right" }}>
                <Button style={{ width: "120px", marginBottom: "1rem", marginRight: "1rem" }} variant="secondary" disabled={login === ""} >Найти</Button>
              </Row>
            </Card>
            <Card
              className="shadow px-4"
              style={{ backgroundColor: "#B8CBE9", borderColor: "#B8CBE9", marginBottom: "20px" }}
            >
              <h3 style={{ borderBottom: '1px solid black' }}>Удалить учетную запись врача:</h3>
              <Form.Group className="mb-3" controlId="Login">
                <Form.Label className="text-center">ФИО:</Form.Label>
                <Form.Control
                  type="text"
                  name="login"
                  readOnly
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="text-center">Логин:</Form.Label>
                <Form.Control
                  type="text"
                  name="email"
                  readOnly
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="Password">
                <Form.Label className="text-center">Пароль:</Form.Label>
                <Form.Control
                  type="text"
                  name="password"
                  readOnly
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="Password">
                <Form.Label className="text-center">Медицинское учреждение:</Form.Label>
                <Form.Control
                  type="text"
                  name="password"
                  readOnly
                />
              </Form.Group>
              <Row style={{ justifyContent: "right", alignItems: "right" }}>
                <Button style={{ width: "120px", marginBottom: "1rem", marginRight: "1rem" }} variant="secondary">Удалить</Button>
              </Row>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
