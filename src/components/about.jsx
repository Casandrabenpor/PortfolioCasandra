import "../styles/about.scss";
import Computer from "../assets/computer.jpg";

export const About = () => {
  return (
    <div className="slide-in-elliptic-top-fwd about">
      <h3 className="title">SOBRE MÍ</h3>
      <div className="content">
        <div className="text">
          <p>
            ¡Hola! Soy Casandra Bennassar, una desarrolladora web Full-Stack Junior de Palma de Mallorca, España. Me apasiona trabajar con tecnologías como HTML5, JavaScript, CSS, Sass, React, Redux, TypeScript, Node, MongoDB y MySQL.<br />

            Estoy constantemente en busca de nuevas oportunidades para aprender y poner en práctica mis conocimientos.
            Me interesa especialmente la maquetación y todo lo relacionado con el front-end, ya que considero que es un área fundamental para crear interfaces de usuario atractivas y accesibles. Sin embargo, también estoy abierta a explorar otros campos dentro del desarrollo web y ampliar mis habilidades en áreas como el back-end, bases de datos y la creación de aplicaciones web completas.
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
