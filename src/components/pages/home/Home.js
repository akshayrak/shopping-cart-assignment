import React, { useEffect, useState } from 'react';
import  Carousel from '../../carousel/Carousel';
import CatagoryBanner from '../../catagoryBanner/CatagoryBanner';
import service from '../../../services/api'

const Home = ({setSelectedCategory}) => {
  let [carouselData, setCarouselData] = useState([])
  let [catagoryData,setCatagoryData] = useState([])
  

  useEffect(()=>{
    fetch(service.bannersURL)
    .then(response => response.json())
    .then(data => setCarouselData(data))

    fetch(service.categoriesURL)
    .then(response => response.json())
    .then(data => setCatagoryData(data))
  },[])
 
  return( 
  <>
    {carouselData.length>0&&<Carousel imageData={carouselData} /> }
    {catagoryData.length>0&&<CatagoryBanner catagoryData={catagoryData} />}
  </>
  );
};

export default Home;
