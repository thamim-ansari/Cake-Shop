import {Link} from 'react-router-dom'
import {
  NotFoundPageContainer,
  NotFoundPageMainContainer,
  NotFoundPageImage,
  NotFoundPageHeading,
  NotFoundPageDescription,
  GoHomeBtn,
} from './styledComponents'

const NotFound = () => (
  <NotFoundPageContainer>
    <NotFoundPageMainContainer>
      <NotFoundPageImage
        src="https://img.freepik.com/free-vector/404-error-with-cone-signal_24908-77776.jpg?w=740&t=st=1709371563~exp=1709372163~hmac=d57a93f10f3200b460cfef2be98688cb15b2a5dff0a414c649a0100eba69d24c"
        alt="page-not-found-image"
      />
      <NotFoundPageHeading>Page Not Found</NotFoundPageHeading>
      <NotFoundPageDescription>
        We are sorry, the page you requested could not be found
      </NotFoundPageDescription>
      <Link to="/">
        <GoHomeBtn>Go Home</GoHomeBtn>
      </Link>
    </NotFoundPageMainContainer>
  </NotFoundPageContainer>
)

export default NotFound
