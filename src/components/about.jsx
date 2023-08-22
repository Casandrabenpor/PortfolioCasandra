import "../styles/about.scss";
import Computer from "../assets/computer.jpg";

export const About = () => {
  return (
    <div className="slide-in-elliptic-top-fwd about">
      <h3 className="title">SOBRE MÍ</h3>
      <div className="content">
        <div className="text">
          <p>
            ¡Hola! Soy Casandra Bennassar, una desarrolladora web Full-Stack Junior de Palma de Mallorca, España. Me apasiona trabajar con tecnologías como HTML5, JavaScript, CSS, Sass, React, Redux, TypeScript, Node, MongoDB, MySQL y Php.
          </p>
          <p>
            Estoy constantemente en busca de nuevas oportunidades para aprender y poner en práctica mis conocimientos.
          </p>
          <p>
            Actualmente, me encuentro realizando prácticas donde he tenido la oportunidad de adquirir
            experiencia en diversas tecnologías, entre las que destacan <b>React Redux, HTML5, CSS,
              Sass, JavaScript, MySQL, MongoDB y PHP.</b>
            <p>
              Durante mis prácticas, he participado en proyectos significativos, como el desarrollo de una
              página web e-commerce , una aplicación de edición de fotos y, en la actualidad, estamos
              trabajando en un sitio web para un hotel y un panel de control.
            </p>
          </p>
          <p>
            Me interesa especialmente la maquetación y todo lo relacionado con el front-end, ya que considero que es un área fundamental para crear interfaces de usuario atractivas y accesibles. Sin embargo, también estoy abierta a explorar otros campos dentro del desarrollo web y ampliar mis habilidades en áreas como el back-end, bases de datos y la creación de aplicaciones web completas.
          </p>
          <p>
            Si estás buscando a alguien con una mentalidad de aprendizaje continuo, capacidad para trabajar en equipo y entusiasmo por seguir creciendo como desarrolladora, ¡me encantaría formar parte de tu equipo!
          </p>
        </div>
        <div className="image">
          <img src={Computer} alt="computer" />
        </div>
      </div>
    </div>
  );
};
