import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import './ScrollingImage.css'
import image1 from '../image1.jpeg';
import image2 from '../image2.jpeg';
import image3 from '../image3.jpeg';

// const images = [
//     image1,
//     image2,
//     image3
//    ];

function ScrollingImage(){
    return (
        <div className="container2">
         <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100 h-250"
          src={image1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image2}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image3}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
        </div>
      );
    };
    
    
    
export default ScrollingImage