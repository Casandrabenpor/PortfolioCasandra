import Email from "../assets/gmail.png";
import Github from "../assets/github.svg";
import Linkedin from "../assets/linkedin.png";


import "../styles/contact.scss";
export const Contact = () => (<>
  <div className=" puff-in-center borderContact">
    <div className="icons">
      <a href="mailto:casandra211@gmail.com">
        <img src={Email} className="email" alt="email" />
      </a>
      <a href="https://github.com/Casandrabenpor">
        <img src={Github} className="github" alt="GitHub" />
      </a>
      <a href="https://www.linkedin.com/in/casandra-bennassar-porcel/">
        <img src={Linkedin} className="Linkedin" alt="Linkedin" />
      </a>
    </div>
  </div>


</>

)