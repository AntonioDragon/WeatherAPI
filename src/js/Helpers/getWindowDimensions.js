import {useState, useEffect} from 'react'

const getWindowDimensions = () => {
  const {innerWidth: width, innerHeight: height} = window
  return {
    width,
    height,
  }
}

const useWindowDimensions = () => {
  const [windowDim, setWindowDim] = useState(getWindowDimensions())

  useEffect(() => {
    const handleResize = () => {
      setWindowDim(getWindowDimensions())
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return windowDim
}

export default useWindowDimensions
