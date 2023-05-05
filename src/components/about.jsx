import "../styles/about.css";
import Computer from "../assets/computer.jpg";

export const About = () => {
  return (
    <div className="puff-in-center about">
      <h3 className="title">SOBRE MÍ</h3>
      <div className="content">
        <div className="text">
          <p>
            Programadora Jr. Frontend en el desarrollo de páginas web/móvil
            y en constante aprendizaje. <br/>
            Interesada en aprender mas sobre
            maquetación y todo lo relacionado a front-end.
          </p>
        </div>
        <div className="image">
          <img src={Computer} alt="computer" />
        </div>
      </div>
    </div>
  );
};
