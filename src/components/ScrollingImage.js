import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './ScrollingImage.css'
import image1 from '../image1.jpg';
import image2 from '../image2.jpg';
import image3 from '../image3.jpg';

const images = [
    image1,
    image2,
    image3
   ];

function ScrollingImage(){
    return (
        <div className="container">
          <Carousel
            autoPlay
            interval={5000}
            infiniteLoop
            showThumbs={false}
            showStatus={false}
          >
            {images.map((image, index) => (
              <div key={index} className="carousel-slide">
                <div className="image-container">
                  <img src={image} alt={`Not Found ${index + 1}`} />
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      );
    };
    
    
    
export default ScrollingImage