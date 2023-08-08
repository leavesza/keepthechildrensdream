import React from "react";
import {Row, Col, Card } from 'react-bootstrap';


const MissionCard = (props) =>{
    return(
    <Row>
    <Col md={12}>
      <Card border="dark" bg="light" className="custom-card">
        <Card.Body>
          <Row>
            <Col md={6} className="mission-image">
              <img src={props.displayImage} alt="Mission Image" />
            </Col>
            <Col md={6} className="mission-text">
              <Card.Title className="custom-title">
                <h2>{props.missionHeadding}</h2>
              </Card.Title>
              <Card.Text>
                <p>
                  {props.text}
                </p>
              </Card.Text>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Col>
  </Row>
    )
}

export default MissionCard