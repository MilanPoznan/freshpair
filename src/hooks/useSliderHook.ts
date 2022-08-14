import { useState } from 'react'
/**
 * Using to switch between slides in slider on swipe
 * @param {int} activeSlide 
 * @param {array} slider_repeater -> returned from ACF 
 * @param {function} setActiveSlide -> setState function
 */
const useSliderHook = (activeSlide: number, slider_repeater: any[], setActiveSlide: React.Dispatch<React.SetStateAction<number>>) => {

  const [initialX, setInitialX] = useState(0)
  const [currentX, setCurrentX] = useState(0)


  const nextSlide = () => activeSlide === (slider_repeater.length - 1) ? null : setActiveSlide(activeSlide + 1)
  const previousSlide = () => activeSlide !== 0 ? setActiveSlide(activeSlide - 1) : null

  //E is Touch/click elem but to lazy to set it now
  const onTouchStart = (e: any) => {
    setInitialX(e.touches[0].clientX)
  }

  //E is HTML elem but to lazy to set it now
  const onTouchMove = (e: any) => {
    if (initialX === null) {
      return;
    }
    setCurrentX(e.touches[0].clientX)
  }

  const onTouchEnd = () => {
    let total = initialX - currentX
    if (total > 50) {
      previousSlide()
    } else if (total < -50) {
      nextSlide()
    } else {
      return
    }
  }
  return [nextSlide, previousSlide, onTouchStart, onTouchMove, onTouchEnd]
}

export default useSliderHook;