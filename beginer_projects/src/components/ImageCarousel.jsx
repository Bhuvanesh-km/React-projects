import React, { useState } from "react";
import "./style.css";
const images = [
  "https://images.pexels.com/photos/3836292/pexels-photo-3836292.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  "https://images.pexels.com/photos/2792157/pexels-photo-2792157.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  "https://images.pexels.com/photos/1166209/pexels-photo-1166209.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  "https://images.pexels.com/photos/1661179/pexels-photo-1661179.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
];

const ImageCarousel = () => {
  const [currentValue, setCurrentValue] = useState(0);
  const handelLeftClick = () => {
    setCurrentValue(currentValue === 0 ? images.length - 1 : currentValue - 1);
  };
  const handelRightClick = () => {
    setCurrentValue(currentValue === images.length - 1 ? 0 : currentValue + 1);
  };
  return (
    <center>
      <h1>Image Carousel</h1>
      <div className="carousel-container">
        <div className="left-arrow">
          <button onClick={handelLeftClick}>prev</button>
        </div>
        <div className="Image">
          {" "}
          {images.map(
            (image, index) =>
              currentValue === index && (
                <img key={index} src={image} alt="image" className="image" />
              )
          )}
        </div>
        <div className="right-arrow">
          <button onClick={handelRightClick}>next</button>
        </div>
      </div>
    </center>
  );
};

export default ImageCarousel;
