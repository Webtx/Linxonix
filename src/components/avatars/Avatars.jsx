import MAKI from "../../assets/images/characters/maki/maki.avif";
import AMANI from "../../assets/images/characters/amani/am1.jpeg";
import HUNTER from "../../assets/images/characters/hunter/hunter.png";
import DIA from "../../assets/images/characters/dia/dia.avif";
import SXNIC from "../../assets/images/characters/sxnic/sxnic.avif";
import VAEH from "../../assets/images/characters/vaeh/vaeh.png";
import ATLAS from "../../assets/images/characters/atlas/atlas.png";
import BLUB from "../../assets/images/characters/blub/blub.avif";
import SUMI from "../../assets/images/characters/sumi/sumi.png";

import Footer from "../Footer/Footer";
import Card from "./card/Card";
import Header from "../Header/Header";
import "./Avatars.css";

/** @description Displays current avatars available */
export default function Avatars() {
  return (
    <div className="Avatars">
      <Header links={[{ name: "Home", loc: "/" }]}></Header>
      <div className="container">
        <div className="card">
          <p>
            Check out thousands of VRChat avatars, Assets, Worlds, that can be used for anything you imagine, made
            by hundreds of independent artists.
          </p>
          <Card name="maki" src={MAKI}></Card>
          <Card name="amani" src={AMANI}></Card>
          <Card name="hunter" src={HUNTER}></Card>

          <h2>Upcoming</h2>
          {[
            ["dia", DIA],
            ["sxnic", SXNIC],
            ["vaeh", VAEH],
            ["atlas", ATLAS],
            ["blub", BLUB],
            ["sumi", SUMI],
          ].map((cardInfo, index) => {
            return <Card name={cardInfo[0]} src={cardInfo[1]} key={index}></Card>;
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
}
