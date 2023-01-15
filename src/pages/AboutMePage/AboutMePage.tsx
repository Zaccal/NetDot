import { Container, Row, Col, Image } from 'react-bootstrap';
import './AboutMePageStyles.css'

const AboutProjectPage = () => {
  return (
    <Container className='mt-5'>
        <Row>
          <Col md={4}>
            <Image src={'https://avatars.githubusercontent.com/u/90643054?v=4'} rounded className="about-me__image" />
          </Col>
          <Col md={8}>
            <h2 className="about-me__name">Zaccal</h2>
            <p className="about-me__bio">Hello, my name is Adilet, I am 16 years old, I am student I learn on the Frontend developer. I use language programming JavaScript, nice to meet you.</p>
            <a href="https://github.com/Zaccal" className="about-me-more">more...</a>
          </Col>
      </Row>
    </Container>
  )
}

export default AboutProjectPage