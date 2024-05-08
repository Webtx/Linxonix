import CharacterPage from "../CharacterPage/CharacterPage";

import image1 from "../../../assets/images/characters/maki/maki_2.avif";
import image2 from "../../../assets/images/characters/maki/maki_3.avif";

export default function Maki() {
  const images = [image1, image2];

  return (
    <CharacterPage
      articleName="MAKI ZENIN W/ OPTI"
      priceTag={40}
      images={images}
      subsections={[
        {
          name: "Features",
          values: [
            "160+ Toggles",
            "Fake Index Fingers",
            "12+ DPS Options",
            "Go Go Locomotion",
            "3 Weapons Option w/ Blood Textures",
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
