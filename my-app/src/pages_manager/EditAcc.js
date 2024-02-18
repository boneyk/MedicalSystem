import React, { useState,setErrorMessage, useEffect } from "react";
import { Container, Row, Col, Card,Button,Form,Navbar, Tab,Tabs,Spinner,Placeholder  } from "react-bootstrap";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import InputGroup from 'react-bootstrap/InputGroup';



export const EditAcc = () => {
  const [login, setLogin] = useState("");
  const [loginDirty, setLoginDirty] = useState(false);
  const [loginError, setLoginError] = useState("Логин не должен быть пустым");
  const [success, setSuccess] = useState(false);

  const [loginEdit, setLoginEdit] = useState("");
const [password, setPassword] = useState("");
const [fio, setFio] = useState("");
const [med, setMed] = useState("");
const [loginEditDirty, setLoginEditDirty] = useState(false);
const [passwordDirty, setPasswordDirty] = useState(false);
const [fioDirty, setFioDirty] = useState(false);
const [medDirty, setMedDirty] = useState(false);
const [loginEditError, setLoginEditError] = useState("Логин не может быть пустым");
const [passwordError, setPasswordError] = useState("Пароль не может быть пустым");
const [fioError, setFioError] = useState("ФИО не может быть пустым");
const [medError, setMedError] = useState("Мед.учреждение не может быть пустым");
const [formValid, setFormValid] = useState(false);

  const handleLoginChange = (event) => {
    setLogin(event.target.value);
  };
  const handleLoginEditChange = (event) => {
    setLogin(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const handleFioChange = (event) => {
    setFio(event.target.value);
  };const handleMedChange = (event) => {
    setMed(event.target.value);
  };

  const blurHandler = (e) => {
    switch (e.target.name) {
      case "loginEdit":
        if (loginEdit === "") {
          setLoginEditDirty(true);
        } else {
          setLoginEditDirty(false);
        }
        break;
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
      case "fio":
          if (fio === "") {
            setFioDirty(true);
          } else {
            setFioDirty(false);
          }
          break;
      case "med":
        if (med === "") {
          setMedDirty(true);
        } else {
          setMedDirty(false);
        }
        break;
    }
  };
  useEffect(() => {
    console.log("токен из хранилища:", localStorage.getItem("token"));
    if (!loginEditDirty && !passwordDirty && !fioDirty && !medDirty) {
      setFormValid(true);
    } else {
      setFormValid(false);
    }
    localStorage.setItem("token", null);
  }, [loginEditDirty, passwordDirty,fioDirty,medDirty]);
    return (
        <div style={{background:"#EAEAE2"}}>
            <Container style={{ paddingTop: '2rem', paddingBottom: '2rem',justifyContent: "center", alignItems: "center" }}>
        <Container></Container>
        <h2 style={{ paddingLeft: '6rem', paddingBottom: '1rem',justifyContent: "center", alignItems: "center"  }}>• Система работы администратора •</h2>
      <Row style={{justifyContent: "center", alignItems: "center"}}>
      <Col xs="auto" >
        <img src={`/img/medical.png`} style={{ width: "250px", height: "250px", marginRight: "20px",marginBottom:"1rem" }} />
        </Col>
        <Col  xs="auto" className="p-0" md={8} lg={6} >
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
                <h3 style={{borderBottom:'1px solid black'}}>Редактировать учетную запись врача:</h3>
          <Form.Group className="mb-3" controlId="Login">
            <Form.Label className="text-center">ФИО:</Form.Label>
            <Form.Control
              type="text"
              name="fio"
              onBlur={e => blurHandler(e)}
              onChange={handleFioChange}
            />
          </Form.Group>
          {(fioDirty) && <div style ={{color:'red'}}>{fioError}</div>}
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className="text-center">Логин:</Form.Label>
            <Form.Control
              type="text"
              name="loginEdit"
              onBlur={e => blurHandler(e)}
              onChange={handleLoginEditChange}
            />
          </Form.Group>
          {(loginEditDirty) && <div style ={{color:'red'}}>{loginEditError}</div>}
          <Form.Group className="mb-3" controlId="Password">
            <Form.Label className="text-center">Пароль:</Form.Label>
            <Form.Control
              type="text"
              name="password"
              onBlur={e => blurHandler(e)}
              onChange={handlePasswordChange}
            />
          </Form.Group>
          {(passwordDirty) && <div style ={{color:'red'}}>{passwordError}</div>}
          <Form.Group className="mb-3" controlId="Password">
            <Form.Label className="text-center">Медицинское учреждение:</Form.Label>
            <Form.Control
              type="text"
              name="med"
              onBlur={e => blurHandler(e)}
              onChange={handleMedChange}
            />
          </Form.Group>
          {(medDirty) && <div style ={{color:'red'}}>{medError}</div>}
          <Row style={{justifyContent: "right", alignItems: "right"}}>
          <Button style={{width:"120px",marginBottom:"1rem",marginRight:"1rem"}} variant="secondary" disabled = {!formValid} >Сохранить</Button>
          </Row>
          </Card>
        </Col>
        </Row>
          </Container>
        </div>
    );
};