import { Container, Row, Col, Tab, Nav } from 'react-bootstrap';
import { ProjectCard } from './ProjectCard';
import colorSharp2 from '../assets/img/color-sharp2.png';
import Oxygen from '../assets/img/oxygen.png';
import AppPhotos from '../assets/img/app.png';
import HotelMiranda from '../assets/img/Hotel-Miranda.png';
import Dashboard from '../assets/img/dashboard.png';
import Portfolio from '../assets/img/Portfolio.png';
import Travelance from '../assets/img/travelance.png';
import Matriculas from '../assets/img/matricula.png';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
  const projectsFront = [
    {
      title: 'Oxygen Shop',
      description: 'Design & Development',
      imgUrl: Oxygen,
      url: 'https://casandrabenpor.github.io/Oxygen-shop-js/',
    },
    {
      title: 'Miranda',
      description: 'Design & Development',
      imgUrl: HotelMiranda,
      url: 'https://casandrabenpor.github.io/Hotel-Miranda/',
    },
    {
      title: 'Portfolio',
      description: 'Design & Development',
      imgUrl: Portfolio,
      url: 'https://github.com/Casandrabenpor/Portfolio',
    },
    {
      title: 'Travelance',
      description: 'Design & Development',
      imgUrl: Travelance,
      url: 'https://casandrabenpor.github.io/Project-Travelance/#',
    },
  ];
  const projectsFull = [
    {
      title: 'Photo App',
      description: 'Design & Development',
      imgUrl: AppPhotos,
      url: 'https://casandrabenpor.github.io/App-photos/',
    },
    {
      title: 'Dashboard Hotel Miranda',
      description: 'Design & Development',
      imgUrl: Dashboard,
      url: 'https://dgiq3w7rj860j.cloudfront.net/#/login',
    },
    {
      title: 'Generador de matriculas',
      description: 'Design & Development',
      imgUrl: Matriculas,
      url: 'https://casandrabenpor.github.io/GenerarMatriculas/',
    },
  ];
  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? 'animate__animated animate__fadeIn' : ''
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    Aquí están algunos de mis proyectos, la mayoría de ellos, si
                    volviera a realizarlos los{' '}
                    <b>optimizaría y desarrollaría diferente</b>. Pero todo es
                    un proceso y me encuentro en
                    <b> constante evolución</b>.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Front End</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Full Stack</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? 'animate__animated animate__slideInUp' : ''
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projectsFront.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {projectsFull.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="bg" />
    </section>
  );
};
