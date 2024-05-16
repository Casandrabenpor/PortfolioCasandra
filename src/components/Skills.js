import MySQL from '../assets/img/technologies/mysql.svg';
import Css from '../assets/img/technologies/css.svg';
import Express from '../assets/img/technologies/express.svg';
import Git from '../assets/img/technologies/git.svg';
import Nodejs from '../assets/img/technologies/nodejs.svg';
import MongoDB from '../assets/img/technologies/mongodb.svg';
import PHP from '../assets/img/technologies/php.svg';
import React from '../assets/img/technologies/react.svg';
import Redux from '../assets/img/technologies/redux.svg';
import JavaScript from '../assets/img/technologies/javascript.svg';
import TypeScript from '../assets/img/technologies/typescript.svg';
import Sass from '../assets/img/technologies/sass.svg';
import Html from '../assets/img/technologies/html.svg';
import Angular from '../assets/img/technologies/angular.svg';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import colorSharp from '../assets/img/color-sharp.png';

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>
                Estas son mis principales <b>skills</b>, aunque se{' '}
                <b>multiplican y fortalecen</b> a menudo,<br></br> ya que
                aprendo e incorporo <b>nuevas tecnologías</b> y{' '}
                <b>buenas prácticas</b> a diario
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <img src={Html} alt="html" />
                  <h5>HTML5</h5>
                </div>
                <div className="item">
                  <img src={React} alt="react" />
                  <h5>React</h5>
                </div>
                <div className="item">
                  <img src={Redux} alt="redux" />
                  <h5>Redux</h5>
                </div>
                <div className="item">
                  <img src={Angular} alt="angular" />
                  <h5>Angular</h5>
                </div>
                <div className="item">
                  <img src={Express} alt="express" />
                  <h5>Express</h5>
                </div>
                <div className="item">
                  <img src={PHP} alt="php" />
                  <h5>PHP</h5>
                </div>
                <div className="item">
                  <img src={Git} alt="git" />
                  <h5>Git</h5>
                </div>
                <div className="item">
                  <img src={MySQL} alt="mysql" />
                  <h5>MySQL</h5>
                </div>
                <div className="item">
                  <img src={Nodejs} alt="node" />
                  <h5>NodeJS</h5>
                </div>
                <div className="item">
                  <img src={MongoDB} alt="mongo" />
                  <h5>MongoDB</h5>
                </div>
                <div className="item">
                  <img src={Css} alt="css" />
                  <h5>CSS</h5>
                </div>
                <div className="item">
                  <img src={Sass} alt="sass" />
                  <h5>Sass</h5>
                </div>
                <div className="item">
                  <img src={JavaScript} alt="js" />
                  <h5>JavaScript</h5>
                </div>
                <div className="item">
                  <img src={TypeScript} alt="typescript" />
                  <h5>TypeScript</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image4" />
    </section>
  );
};
