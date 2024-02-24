import React, { useState } from 'react';
import { Container, Row, Col, Card,Button,Form,Navbar, Tab,Tabs,Spinner,Placeholder  } from "react-bootstrap";
import { Link } from "react-router-dom";
import InputGroup from 'react-bootstrap/InputGroup';



export const Info = () => {
    const [showHeard, setShowHeard] = useState(false);
    const [showVessels, setShowVessels] = useState(false);
    const [showKidneys, setShowKidneys] = useState(false);
    const [showPancreas, setShowPancreas] = useState(false);
    const [showBlood, setShowBlood] = useState(false);
    const [showVision, setShowVision] = useState(false);
    const [showHormones, setShowHormones] = useState(false);
    const name = localStorage.getItem("name");
    const DateB = localStorage.getItem("DateB");
    const city = localStorage.getItem("city");

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
              value = {name}
              readOnly
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className="text-center">Дата рождения:</Form.Label>
            <Form.Control
              type="text"
              name="email"
              value = {DateB}
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
                          value = "180 см"
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
                          value = "60 кг"
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
              value = {city}
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
            <div>Проведенный анализ: ЭКГ с нагрузкой<br/>
            Результаты анализа:<br/>
            1. Сердечный ритм: нормальный синусовый ритм.<br/>
            2. Частота сердечных сокращений: 75 ударов в минуту.<br/>
            3. Длительность интервалов: PQ - 0,16 сек, QRS - 0,08 сек, QT - 0,36 сек.<br/>
            4. Сегменты: ST-сегмент нормальный, T-зубец асимметричный.<br/>
            5. Особенности зубцов: P - высота 2 мм, Q - отрицательный, R - высота 10 мм, S - высота 5 мм, T - амплитуда 3 мм.<br/>
            6. Наличие признаков ишемии или инфаркта миокарда: отсутствуют.<br/>
            7. Оценка проводимости сердца: нормальная.<br/>
            Дата проведения анализа: 18 июня 2023
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
            <div>Проведенный анализ: биохимия крови<br/>
            Результаты анализа:<br/>
            1. Общий белок: 7 г/дл (норма 6-8 г/дл).<br/>
            2. Глюкоза: 90 мг/дл (норма 70-100 мг/дл).<br/>
            3. Холестерин: 180 мг/дл (норма менее 200 мг/дл).<br/>
            4. Билирубин: общий - 0,8 мг/дл (норма 0,3-1,2 мг/дл), прямой - 0,2 мг/дл (норма до 0,3 мг/дл).<br/>
            5. Мочевина: 20 мг/дл (норма 10-50 мг/дл).<br/>
            6. Креатинин: 0,8 мг/дл (норма 0,6-1,2 мг/дл).<br/>
            7. АЛТ (аланинаминотрансфераза): 20 Ед/л (норма до 40 Ед/л).<br/>
            8. АСТ (аспартатаминотрансфераза): 25 Ед/л (норма до 35 Ед/л).<br/>
            9. Щелочная фосфатаза: 70 Ед/л (норма 30-120 Ед/л).<br/>
            Дата проведения анализа: 10 июня 2023
            </div>
          )}
          <div style={{ display: 'flex', alignItems: 'center',padding: "1rem" }}>
            <img
              src="/img/sort_down.png"
              alt="arrow"
              style={{ width: '40px', height: '40px', cursor: 'pointer' }}
              onClick={() => setShowKidneys(!showKidneys)}
            />
            <span style={{ marginLeft: '10px',fontSize:'25px' }}>Легкие</span>
          </div>
          {showKidneys && (
            <div>Проведенный анализ: флюорография<br/>
            Результаты анализа:<br/>
            1. Состояние легких: отсутствие патологических изменений.<br/>
            2. Диафрагма: четкие контуры, без сдвига.<br/>
            3. Корни легких: в норме, без увеличения.<br/>
            4. Плевральные впадины: свободные, без выпота.<br/>
            5. Средостение: без патологий или опухолей.<br/>
            6. Медиастинальные органы: нормальные размеры и контуры.<br/>
            7. Костные структуры грудной клетки: без видимых изменений.<br/>
            8. Правый легкий: прозрачный, без инфильтратов или уплотнений.<br/>
            9. Левый легкий: прозрачный, без признаков патологии.<br/>
            Дата проведения анализа: 10 июня 2023
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
            <div>Проведенный анализ: общий анализ крови<br/>
            Результаты анализа:<br/>
- Гемоглобин: 14 г/дл<br/>
- Эритроциты: 4.5 млн/мкл<br/>
- Лейкоциты: 7 тыс/мкл<br/>
- Тромбоциты: 250 тыс/мкл<br/>
- Общий холестерин: 180 мг/дл<br/>
Дата проведения анализа: 12 июня 2023
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
            <div>Проведенный анализ: Офтальмоскопия<br/>
            Результаты анализа:<br/>
            1. Дальнозоркость: +1,25 D (диоптрии) на правом глазу и +1,50 D на левом глазу.<br/>
2. Близорукость: -2,00 D на правом глазу и -1,75 D на левом глазу.<br/>
3. Зрительная острота: 1,0 на обоих глазах (норма 1,0 или 100%).<br/>
4. Давление в глазах: 16 мм рт.ст. на правом глазу и 15 мм рт.ст. на левом глазу.<br/>
5. Цветоощущение: нормальное, отсутствуют нарушения.<br/>
6. Поле зрения: широкое, без дефектов или ослаблений.<br/>
7. Рефракция: астигматизм 0,75 D на обоих глазах.<br/>
Дата проведения анализа: 18 июня 2023
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
                <option value="0">Группа здоровья не выбрана</option>
                <option value="1">1 группа здоровья</option>
                <option value="2">2 группа здоровья</option>
                <option value="3">3 группа здоровья</option>
                <option value="4">4 группа здоровья</option>
                <option value="5">5 группа здоровья</option>
            </Form.Select>
        </Form.Group>
        <Row style={{justifyContent: "right", alignItems: "right"}}>
        <Button variant="secondary" style={{width:"140px",marginBottom:"1rem",marginRight:"1rem"}}>
            Подтвердить
        </Button>
        </Row>
            </Col>
        </Row>
    </Card>   
</Col>


        </Row>
          </Container>
        </div>
    );
};