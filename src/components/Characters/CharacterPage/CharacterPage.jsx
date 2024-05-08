import Header from "../../Header/Header";
import { useState } from "react";

import Footer from "../../Footer/Footer";
import copyright from "../../../assets/images/png/copyright.png";
import "./CharacterPage.css";

/** @description Represents a page for a character */
export default function CharacterPage(
  props = {
    articleName: "",
    images: [],
    priceTag: 0,
    subsections: [{ name: "", values: [""] }],
  }
) {
  const images = props.images;
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  function ampCount() {
    /** @description reached end, go back to start */
    if (currentImageIndex + 1 === images.length) {
      setCurrentImageIndex(0);
      return;
    }
    setCurrentImageIndex(currentImageIndex + 1);
  }

  function decreaseCount() {
    /** @description reached start, go back to end */
    if (currentImageIndex - 1 === -1) {
      setCurrentImageIndex(images.length - 1);
      return;
    }

    setCurrentImageIndex(currentImageIndex - 1);
  }

  return (
    <div className="CharacterPage">
      <Header links={[{ name: "Avatars", loc: "avatars" }]} />
      <main id="container">
        <div id="carousel">
          <figure>
            <img src={images[currentImageIndex]} alt="" />
          </figure>
          <div id="controls">
            <button onClick={() => decreaseCount()}>Prev</button>
            <span id="count">{(currentImageIndex + 1).toString()} of {images.length.toString()}</span>
            <button onClick={() => ampCount()}>After</button>
          </div>
        </div>
        <div id="details">
          <hgroup>
            <h1>{props.articleName}</h1>
            <span>{props.priceTag.toFixed(2)}$</span>
          </hgroup>
          {props.subsections.map((section, i) => {
            return (
              <section key={i}>
                <h2>{section.name}</h2>
                <ul>
                  {section.values.map((value, j) => {
                    return <li key={`${i}-${j}`}>{value}</li>;
                  })}
                </ul>
              </section>
            );
          })}
          <img src={copyright} alt="Asset copyright" id="asset-copyright" />
        </div>
      </main>
      <Footer />
    </div>
  );
}
