import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CardWeather from './CardWeather'
import {useSelector} from 'react-redux'

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1300 },
    items: 15
  },
  desktop: {
    breakpoint: { max: 1300, min: 800 },
    items: 8
  },
  tablet: {
    breakpoint: { max: 800, min: 540 },
    items: 5
  },
  mobile: {
    breakpoint: { max: 540, min: 0 },
    items: 3
  }
}
const BlockCards = () => {
  const hoursArr = useSelector(state => state.weather.weather.hoursArr)
   

  return (
    <Carousel 
      responsive={responsive}
      arrows={false}
      slidesToSlide={4}
      transitionDuration={400}
    >
        {
          hoursArr.map((value, index) =>
            <CardWeather key={value} value={value} index={index}/>,
          )
        }
    </Carousel>
  )
}

export default BlockCards
