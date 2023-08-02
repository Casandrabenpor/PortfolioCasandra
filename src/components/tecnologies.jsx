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


export const Tecnologies = () => {
    return (
        <div>
            <h3 className="title_tecnologies">TECNOLOGÍAS</h3>
            <div className="icons">
                <img src={Bootstrap} alt="bootstrap"></img>
                <img src={Html} alt="html5"></img>
                <img src={Css} alt="css"></img>
                <img src={Sass} alt="sass"></img>
                <img src={Js} alt="Javascript"></img>
                <img src={React} alt="react"></img>
                <img src={Redux} alt="redux"></img>
                <img src={Github} alt="GitHub"></img>
                <img src={Mysql} alt="MySQL"></img>
                <img src={Mongo} alt="Mongo"></img>
                <img src={Php} alt="Php"></img>
            </div>
        </div>
    )
}