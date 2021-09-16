import React from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import {useSelector}from 'react-redux'
import CardWeather from './CardWeather'

const responsive = {
  superLargeDesktop: {
    breakpoint: {max: 4000, min: 1300},
    items: 10,
  },
  desktop: {
    breakpoint: {max: 1300, min: 900},
    items: 8,
  },
  tablet: {
    breakpoint: {max: 900, min: 540},
    items: 5,
  },
  mobile: {
    breakpoint: {max: 540, min: 0},
    items: 3,
  },
}
const BlockCards = () => {
  const {weatherHourly} = useSelector((state) => state.weather.weather)

  return (
    <Carousel
      responsive={responsive}
      arrows={false}
      slidesToSlide={4}
      transitionDuration={400}
    >
      {weatherHourly.map((value) => (
        <CardWeather key={value.hourWeek} value={value} />
      ))}
    </Carousel>
  )
}

export default BlockCards
