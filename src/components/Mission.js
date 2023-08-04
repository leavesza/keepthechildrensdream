import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import './Mission.css'


function Mission(){
        return (
            <div className="mission-container">
      <Container>
      <Row>
          <Col md={12} className="mission-heading">
            <h1>Our Mission</h1>
          </Col>
        </Row>
        <Row>
          <Col md={6} className="mission-image">
            <img src="/path/to/your/image.jpg" alt="Mission Image" />
          </Col>
          <Col md={6} className="mission-text">
            <h2>Mission Heading</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              varius aliquam nisl, vel auctor erat dignissim nec. Fusce varius,
              odio ut luctus posuere, sem quam ultrices felis, eu eleifend neque
              velit vel ipsum.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
    
export default Mission