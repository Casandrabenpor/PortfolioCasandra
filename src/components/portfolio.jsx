import "../styles/portfolio.scss";
import HeaderCasandra from "../assets/casandra.jpg";
import CV from "../CV.pdf";
import "../styles/animation.scss";

export const Portfolio = () => {
    return (
        <div transition-style class="--in-custom">
            <header className=" portfolio">
                <div className="slide-in-left header_portfolio">
                    <h1>Casandra Bennassar</h1>
                    <h2>Frontend Developer</h2>
                    <div className="">
                        <button className="btn-a heartbeat">
                            <a href={CV} download>
                                DESCARGA CV
                            </a>
                        </button>
                        <a href="https://www.linkedin.com/in/casandra-bennassar-porcel">  <button className="btn-a heartbeat">¿HABLAMOS?</button></a>
                    </div>
                    <div className="contact-info">
                        <h3>Contact</h3>
                        <p>📞34 600 222 894</p>
                        <p>casandra211@gmail.com</p>
                    </div>
                </div>
                <div className="shakeFix img_portfolio">
                    <img className="" src={HeaderCasandra} alt="Casandra" />
                </div>
            </header>
        </div>
    )
}