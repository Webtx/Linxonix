import CharacterPage from "../CharacterPage/CharacterPage";

import image1 from "../../../assets/images/characters/amani/am1.jpeg";
import image2 from "../../../assets/images/characters/amani/am1.avif";

export default function Amani() {
  const images = [image1, image2];

  return (
    <CharacterPage
      articleName="Amani 3.0  (Phybones)"
      priceTag={25}
      images={images}
      subsections={[
        {
          name: "Features",
          values: [
            "FBT Ready",
            "Fake Index Fingers",
            "4 Hair HUESHIFTS",
            "Go Go Locomotion",
            "CLOTHING SWAPS",
            "Color swaps on everything",
          ],
        },

        { name: "Assets", values: ["RP base -> Zinpia (SCULTPED BY ME, NO REUSE)"] },

        {
          name: "TOS",
          values: ["DO NOT share this avatar, if you buy it as a gift put THEIR information instead of yours."],
        },

        { name: "Credits", values: ["Showcase / Videographer: Innocent Destiny"] },
      ]}
    />
  );
}
