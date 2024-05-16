import { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import headerImg from '../assets/img/header-img.svg';
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ['Web Developer', 'Front-End', 'Full-Stack'];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  const scrollToConnect = (id) => {
    let element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? 'animate__animated animate__fadeIn' : ''
                  }
                >
                  <span className="tagline">Welcome to my Portfolio</span>
                  <h1>
                    {`Hi I'm Casandra`}{' '}
                    <div
                      className="txt-rotate"
                      dataPeriod="1000"
                      data-rotate='[ "Web Developer", "Front-End", "Full-Stack" ]'
                    >
                      <span className="wrap">{text}</span>
                    </div>
                  </h1>
                  <p>
                    Soy una desarrolladora web Full-Stack Junior de Palma de
                    Mallorca, España. Me interesa especialmente la maquetación y
                    todo lo relacionado con el front-end me apasiona, ya que
                    considero que es un área fundamental para crear interfaces
                    de usuario atractivas y accesibles.<br></br>
                    Sin embargo, también estoy abierta a explorar otros campos
                    dentro del desarrollo web y ampliar mis habilidades en áreas
                    como el back-end, bases de datos y la creación de
                    aplicaciones web completas. Estoy constantemente en busca de
                    nuevas oportunidades para aprender y poner en práctica mis
                    conocimientos.<br></br>
                    He tenido la oportunidad de adquirir experiencia en diversas
                    tecnologías, entre las que destacan React Redux, HTML5, CSS,
                    Sass, JavaScript, MySQL, MongoDB y PHP. Durante mi
                    experiencia, he participado en proyectos significativos,
                    como el desarrollo de una página web e-commerce , una
                    aplicación de edición de fotos, en un sitio web para un
                    hotel y un panel de control.<br></br>
                    Si estás buscando a alguien con una mentalidad de
                    aprendizaje continuo,perseverante capacidad para trabajar en
                    equipo y entusiasmo por seguir creciendo como
                    desarrolladora,<br></br>
                    ¡Me encantaría formar parte de tu equipo!
                  </p>
                  <button onClick={() => scrollToConnect('connect')}>
                    Let’s Connect <ArrowRightCircle size={25} />
                  </button>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? 'animate__animated animate__zoomIn' : ''
                  }
                >
                  <img src={headerImg} alt="Header Img" />
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
