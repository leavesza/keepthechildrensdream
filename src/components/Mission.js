import React from "react";
import { Container, Row, Col, Card } from 'react-bootstrap';
import './Mission.css'
import image2 from '../image2.jpeg';


function Mission(){
        return (
          <div className="mission-container">
          <Container>
            <Row>
              <Col md={12} className="mission-heading">
                <h1>OUR MISSION</h1>
              </Col>
            </Row>
            <Row>
              <Col md={12}>
                <Card border="dark" bg="light" className="custom-card">
                  <Card.Body>
                    <Row>
                      <Col md={6} className="mission-image">
                        <img src={image2} alt="Mission Image" />
                      </Col>
                      <Col md={6} className="mission-text">
                        <Card.Title className="custom-title">
                          <h2>Mission Heading</h2>
                        </Card.Title>
                        <Card.Text>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Vivamus varius aliquam nisl, vel auctor erat dignissim
                            nec. Fusce varius, odio ut luctus posuere, sem quam
                            ultrices felis, eu eleifend neque velit vel ipsum.
                          </p>
                        </Card.Text>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      );
    };

export default Mission