import { Container, Button } from 'react-bootstrap';
import './AboutProjectPage.css'

const AboutProjectPage = () => {
  return (
    <Container className="about-project">
      <h1 className="display-4 about-project__title">NetDot</h1>
        <p className="lead about-project__description">NetDot is a web application that I have developed using React, TypeScript, and Bootstrap. The application allows users to create and view posts, as well as sign in and log in to view other users' profiles and their own. The application is designed to be user-friendly and easy to navigate. The use of React, TypeScript, and Bootstrap ensures that the application is fast, responsive, and visually pleasing. The application is called NetDot and can be used by anyone who has access to the internet.</p>
        <hr className="my-4" />
        <p>
          <Button variant="primary" href='https://github.com/Zaccal/NetDot' className="about-project__button">
            More...
          </Button>
        </p>
    </Container>
  )
}

export default AboutProjectPage