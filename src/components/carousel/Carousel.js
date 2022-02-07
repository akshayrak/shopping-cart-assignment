import React from 'react';
import Flickity from "react-flickity-component";
import "./Carousel.scss"

const Carousel = ({ imageData }) => {

  const flickityOptions = { autoPlay: true }
  return (
    <div className='carousel-container'>
      <Flickity options={flickityOptions} className='flickity-tag'>
      {imageData.map(data => {
        return <>
          <div key={data.id}>
            <img
              src={`https://raw.githubusercontent.com/akshayrak/shopping-cart-assignment/master${data.bannerImageUrl}`}
              alt={data.bannerImageAlt}
              className='carousel-img'
              key={data.order}
            />
          </div>

        </>
      })}
    </Flickity>
    </div>
  );
};

export default Carousel;
