
import React from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Header from "../components/Header";


export const Auth = () => {
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
                      <Form.Group className="mb-3" controlId="Login">
                        <Form.Label className="text-center">Логин</Form.Label>
                        <Form.Control
                          type="text"
                          name="login"
                          placeholder="Введите логин"
                        />
                      </Form.Group>
                      <Form.Group
                        className="mb-3"
                        controlId="formBasicPassword"
                      >
                        <Form.Label>Пароль</Form.Label>
                        <Form.Control
                          type="password"
                          name = "password"
                          placeholder="Введите пароль"
                        />
                      </Form.Group>

                      <div className="d-grid mb-3" style={{justifyContent: "center", alignItems: "center",display: "flex"}}>
                        <Button
                          variant="primary"
                          type="submit"
                          style={{
                            backgroundColor: "#BFBFBF",
                            borderColor: "#BFBFBF",
                            width:"200px",
                            justifyContent: "center", alignItems: "center",display: "flex",
                          }}>
                          <Link
                            style={{
                              textDecoration: "none",color: "black",
                            }}
                            to="/patients"
                            >
                            Войти
                          </Link>
                        </Button>
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