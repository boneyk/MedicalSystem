import {React,useState } from "react";
import { Container, Row,Navbar, Nav } from "react-bootstrap";
import {Link} from "react-router-dom";
import Offcanvas from 'react-bootstrap/Offcanvas';



function Header() {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleHome = () => {
    // (token === null) ? setStatus(false) : setStatus(true);
      window.location.href = `/`;
  };
  const handleCreate = () => {
    // (token === null) ? setStatus(false) : setStatus(true);
      window.location.href = `/manager/create`;
  };
  const handleEdit = () => {
    // (token === null) ? setStatus(false) : setStatus(true);
      window.location.href = `/manager/edit`;
  };
  const handleDel = () => {
    // (token === null) ? setStatus(false) : setStatus(true);
      window.location.href = `/manager/delete`;
  };
    return (
    <Container style={{ borderBottom: '1px solid black', background:"#EAEAE2", padding:'1px' }} fluid>
        <Row xs="auto" className="justify-content-center mt-4" style={{ padding: '1rem'}}>
        <Container md = {1}>
            <img src="/img/banner.png" width={'120'} height={'120'} alt="tourAgency icon"/>
        </Container>
        <Container md = {1} className="d-flex align-items-center justify-content-left">
            <h1 style={{ fontSize: "30px", textAlign: "center" }} className="text-center ">Медицинская система</h1>
        </Container>
        <Container md = {1} className="d-flex align-items-center justify-content-right">
            <h1 onClick={() => handleHome()} style={{ fontSize: "25px", textAlign: "bottom",marginRight:"10px" }} to= '/'>Выйти</h1>
            <img src="/img/menu.png" alt="Menu" style={{width:"30px",height:"30px"}} onClick={handleShow} />

        </Container>

      <Offcanvas show={show} onHide={handleClose} placement={"end"}>
        <Offcanvas.Header closeButton>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <h4 onClick={() => handleCreate()}>Создание учётной записи</h4>
        <h4 onClick={() => handleEdit()}>Редактирование учётной записи</h4>
        <h4 onClick={() => handleDel()}>Удаление учётной записи</h4>
        </Offcanvas.Body>
      </Offcanvas>
    </Row>
    </Container>
    );
}
export default Header;