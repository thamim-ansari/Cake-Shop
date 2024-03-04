import {Link} from 'react-router-dom'
import {
  NotFoundPageContainer,
  NotFoundContainer,
  NotFoundImage,
  NotFoundHeading,
  NotFoundDescription,
  GoHomeBtn,
} from './styledComponents'

const NotFound = () => (
  <NotFoundPageContainer>
    <NotFoundContainer>
      <NotFoundImage
        src="https://img.freepik.com/free-vector/404-error-with-cone-signal_24908-77776.jpg?w=740&t=st=1709371563~exp=1709372163~hmac=d57a93f10f3200b460cfef2be98688cb15b2a5dff0a414c649a0100eba69d24c"
        alt="page-not-found-image"
      />
      <NotFoundHeading>Page Not Found</NotFoundHeading>
      <NotFoundDescription>
        We are sorry, the page you requested could not be found
      </NotFoundDescription>
      <Link to="/">
        <GoHomeBtn>Go Home</GoHomeBtn>
      </Link>
    </NotFoundContainer>
  </NotFoundPageContainer>
)

export default NotFound
