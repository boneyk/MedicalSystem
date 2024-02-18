
import React, { useState,setErrorMessage, useEffect } from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Header from "./components/Header";


export const Auth = () => {
  const [login, setLogin] = useState("");
const [password, setPassword] = useState("");
const [loginDirty, setLoginDirty] = useState(false);
const [passwordDirty, setPasswordDirty] = useState(false);
const [loginError, setLoginError] = useState("Логин не может быть пустым");
const [passwordError, setPasswordError] = useState("Пароль не может быть пустым");
const [formValid, setFormValid] = useState(false);
const [success, setSuccess] = useState(false);
const [successError, setSuccessError] = useState("Неправильно введен логин или пароль");

  useEffect(() => {
    console.log("токен из хранилища:", localStorage.getItem("token"));
    if (!loginDirty && !passwordDirty && !success) {
      setFormValid(true);
    } else {
      setFormValid(false);
    }
    localStorage.setItem("token", null);
  }, [loginDirty, passwordDirty]);
  
  const handleLoginChange = (event) => {
    setLogin(event.target.value);
  };
  
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  
  const blurHandler = (e) => {
    switch (e.target.name) {
      case "login":
        if (login === "") {
          setLoginDirty(true);
        } else {
          setLoginDirty(false);
        }
        break;
      case "password":
        if (password === "") {
          setPasswordDirty(true);
        } else {
          setPasswordDirty(false);
        }
        break;
    }
  };
  
    return (
    <div style={{background:"#EAEAE2"}}>
<Container style={{ padding:"1rem",justifyContent: "center", alignItems: "center" }}>
        <Row className="vh-100 d-flex justify-content-center align-items-center">
          <Col md={10} lg={5} xs={12}>
            <Card
              className="shadow px-4"
              style={{ backgroundColor: "#B8CBE9", borderColor: "#67D1FF",borderRadius:'2rem' }}
            >
              <Card.Body>
                <div className="mb-3 mt-md-4">
                  <h2 className="fw-bold mb-2 text-center text-uppercase">Авторизация</h2>
                  <div className="mb-3">
                    <Form>
                    {(loginDirty) && <div style ={{color:'red'}}>{loginError}</div>}
                      <Form.Group className="mb-3" controlId="Login">
                        <Form.Label className="text-center">Логин</Form.Label>
                        <Form.Control
                          type="text"
                          name="login"
                          placeholder="Введите логин"
                          onBlur={e=>blurHandler(e)}
                          onChange={handleLoginChange}
                        />
                      </Form.Group>
                      {(passwordDirty) && <div style ={{color:'red'}}>{passwordError}</div>}
                      <Form.Group
                        className="mb-3"
                        controlId="formBasicPassword"
                      >
                        <Form.Label>Пароль</Form.Label>
                        <Form.Control
                          type="password"
                          name = "password"
                          placeholder="Введите пароль"
                          onBlur={e=>blurHandler(e)}
                          onChange={handlePasswordChange}
                        />
                      </Form.Group>

                      <div className="d-grid mb-3" style={{justifyContent: "center", alignItems: "center",display: "flex"}}>
                        <Button
                          variant="secondary"
                          type="submit"
                          style={{
                            width:"200px",
                            justifyContent: "center", alignItems: "center",display: "flex",
                          }}onAbort={!success}
                          disabled = {!formValid}>
                          <Link
                            style={{
                              textDecoration: "none",color:'white'
                            }}
                            to="/patients"
                            >
                            Войти
                          </Link>
                        </Button>
                        {(success) && <div style ={{color:'red'}}>{successError}</div>}
                      </div>
                    </Form>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      </div>
    );
};