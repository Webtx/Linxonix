import CharacterPage from "../CharacterPage/CharacterPage";

import image1 from "../../../assets/images/characters/hunter/hunter 2.png";
import image2 from "../../../assets/images/characters/hunter/hunter.png";

export default function Hunter() {
  const images = [image1, image2];

  return (
    <CharacterPage
      articleName="Hunter"
      priceTag={45}
      images={images}
      subsections={[
        {
          name: "Features",
          values: ["30+ Toggles Color Swaps and Hue Shifts", "Skin Tone Muscle Slider Hair Swap Cigar System"],
        },

        {
          name: "TOS",
          values: ["DO NOT share this avatar, if you buy it as a gift put THEIR information instead of yours."],
        },

        {
          name: "Credits",
          values: [
            "Head & HairCap (EDITED BY ME, NO REUSE)",
            "Eyes Beard Body : ME Outfit Tattoos Glasses",
            "Showcase / Videographer: InnocentDestiny",
          ],
        },
      ]}
    />
  );
}
