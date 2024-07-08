import {useState, useEffect} from 'react'
import {IoIosArrowUp} from 'react-icons/io'
import {GoToTopBtn} from './styledComponents'

const GoToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }
    window.addEventListener('scroll', toggleVisibility)
    return () => {
      window.removeEventListener('scroll', toggleVisibility)
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <GoToTopBtn
      visibility={isVisible ? 'inline-block' : 'none'}
      onClick={scrollToTop}
      type="button"
    >
      <IoIosArrowUp size={16} aria-label="go to top icon" />
    </GoToTopBtn>
  )
}

export default GoToTopButton
