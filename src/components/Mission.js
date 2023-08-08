import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import './Mission.css'
import image2 from '../image2.jpeg';
import MissionCard from "./MissionCard";
import { fillerText } from "../content";


const Mission=()=>{
        return (
          <div className="mission-container">
          <Container>
            <Row>
              <Col md={12} className="mission-heading">
                <h1>OUR MISSION</h1>
              </Col>
            </Row>
            <MissionCard displayImage={image2} missionHeadding='Mission Headding' text={fillerText}/>
          </Container>
        </div>
      );
    };

export default Mission