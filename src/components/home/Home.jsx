import Homepic from "../../assets/images/png/homebackground.png";
import Header from "../Header/Header";

import "./Home.css";

export default function Home() {
  return (
    <div class="home">
      <Header
        links={[
          { name: "Avatars", loc: "Avatars" },
          { name: "Cart", loc: "Cart" },
        ]}
      ></Header>
      <div>
        <img src={Homepic} alt="Home of Linxonix" className="container" />
        <figcaption>Come and join us!</figcaption>
        <br />
        <br />

        <div className="box">
          <h1>About Us!</h1>
          <p>
            Linxonix will be the number one in making the community VR chat have a more enjoyable experience while
            browsing and shopping online.
          </p>
        </div>
        <br />
      </div>
      <footer>
        <small>
          Copyright &copy; Linxonix Contact us at <a href="Linxonix@hotmail.com">Linxonix@gmail.com</a>
        </small>
      </footer>
    </div>
  );
}
