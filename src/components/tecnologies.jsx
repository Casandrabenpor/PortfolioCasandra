import "../styles/tecnologies.scss";
import Bootstrap from "../assets/bootstrap.svg";
import Css from "../assets/css.png";
import Html from "../assets/html.svg";
import Sass from "../assets/sass.svg";
import Js from "../assets/js.png";
import React from "../assets/react.svg";
import Redux from "../assets/redux.svg";
import Github from "../assets/github.svg";
import Mysql from "../assets/mysql.svg";
import Mongo from "../assets/mongodb.svg";
import Php from "../assets/php.svg"
import "../styles/animation.scss";


export const Tecnologies = () => {
    return (
        <div>
            <h3 className="title_tecnologies">TECNOLOGÍAS</h3>
            <div className=" icons">
                <img src={Bootstrap} alt="bootstrap" className="btn-a heartbeat" />
                <img src={Html} alt="html5" className="btn-a heartbeat" />
                <img src={Css} alt="css" className="btn-a heartbeat" />
                <img src={Sass} alt="sass" className="btn-a heartbeat" />
                <img src={Js} alt="Javascript" className="btn-a heartbeat" />
                <img src={React} alt="react" className="btn-a heartbeat" />
                <img src={Redux} alt="redux" className="btn-a heartbeat" />
                <img src={Github} alt="GitHub" className="btn-a heartbeat" />
                <img src={Mysql} alt="MySQL" className="btn-a heartbeat" />
                <img src={Mongo} alt="Mongo" className="btn-a heartbeat" />
                <img src={Php} alt="Php" className="btn-a heartbeat" />
            </div>
        </div>
    )
}