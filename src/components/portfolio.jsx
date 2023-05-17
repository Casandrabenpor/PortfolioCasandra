import "../styles/portfolio.scss";
import HeaderCasandra from "../assets/casandra.jpg";
import CV from "../CV.pdf";

export const Portfolio = () => {
    return (
        <header className=" portfolio">
            <div className="slide-in-left header_portfolio">
                <h1>Casandra Bennassar</h1>
                <h2>Frontend Developer</h2>
                <div className="">
                   <button type="button">
                   <a href={CV} download>
                    DESCARGA CV
                   </a>
                   </button> 
                    <a href="https://www.linkedin.com/in/casandra-bennassar-porcel"><button type="button">¿HABLAMOS?</button></a>
                </div>
            </div>
            <div className="img_portfolio">
                <img className="" src={HeaderCasandra} alt="Casandra" />
            </div>
        </header>
    )
}