import { Container, Row, Col } from 'react-bootstrap';
import contactImg from '../assets/img/contact-img.svg';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import contactIcon from '../assets/img/contactIcon.svg';
import contactIcon2 from '../assets/img/contactIcon2.svg';
import CV from '../assets/files/CV.pdf';

export const SimpleContact = () => {
  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <img
                  className={
                    isVisible ? 'animate__animated animate__zoomIn' : ''
                  }
                  src={contactImg}
                  alt="Contact Us"
                />
              )}
            </TrackVisibility>
          </Col>
          <Col size={12} md={6} className="text-center">
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? 'animate__animated animate__fadeIn' : ''
                  }
                >
                  <h2>Get In Touch</h2>
                  <div className="contactContainer">
                    <img
                      className="contact-icon"
                      src={contactIcon2}
                      alt="navicon"
                    />
                    <p>600 222 894</p>
                  </div>
                  <div className="contactContainer">
                    <img
                      className="contact-icon"
                      src={contactIcon}
                      alt="navicon"
                    />
                    <p>casandra211@gmail.com</p>
                  </div>
                  <div className="contactContainer">
                    <a href={CV} download>
                      DESCARGA CV
                    </a>
                  </div>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
