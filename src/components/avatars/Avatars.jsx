import "./Avatars.css";
import MAKI from "../../assets/images/maki.avif";
import AMANI from "../../assets/images/amani.jpeg";
import HUNTER from "../../assets/images/hunter.png";
import DIA from "../../assets/images/dia.avif";
import SXNIC from "../../assets/images/sxnic.avif";
import VAEH from "../../assets/images/vaeh.png";
import ATLAS from "../../assets/images/atlas.png";
import BLUB from "../../assets/images/blub.avif";
import SUMI from "../../assets/images/sumi.png";

export default function Avatars(){

    return(
    <body className="avatars">
    <header>
        <h1>Linxonix</h1>
            <nav>
            <li key="mnu_0">
                <a href={`/Home`}>Home</a>
            </li>
            <li key="mnu_1">
                <a href={`/Maki`}>Maki</a>
            </li>
            <li key="mnu_2">
                <a href={`/Hunter`}>Hunter</a>
            </li>
            <li key="mnu_3">
                <a href={`/Diara`}>Diara</a>
            </li>
    
           
        </nav>
    </header>

    <div class="container">
         <div class="card">
        <p>Check out thousands of VRChat avatars, Assets, Worlds, that can be used for anything you imagine, made by
            hundreds of independent artists.</p>
        <br/>
        <br/>

        <div class="image-link">
                <img src={MAKI} alt="MAKI"/>
            <p>MAKI</p>
        </div>
         <div class="image-link">
                <img src={AMANI} alt="AMANI"/>
            <p>AMANI</p>
        </div>
         <div class="image-link">
                <img src={HUNTER} alt="HUNTER"/>
            <p>HUNTER</p>
        </div>
        <p>  🌟 Ｕｐｃｏｍｉｎｇ 🌟     </p>

        <div class="image-link">
                <img src={DIA} alt="DIA"/>
            <p>DIA</p>
        </div>

        <div class="image-link">
                <img src={SXNIC} alt="SXNIC"/>
            <p>SXNIC</p>
        </div>

        <div class="image-link">
                <img src={VAEH} alt="VAEH"/>
            <p>VAEH</p>
        </div>

        <div class="image-link">
                <img src={ATLAS} alt="ATLAS"/>
            <p>ATLAS</p>
        </div>

        <div class="image-link">
                <img src={BLUB} alt="BLUB"/>
            <p>BLUB</p>
        </div>

        <div class="image-link">
                <img src={SUMI}alt="SUMI"/>
            <p>SUMI</p>
        </div>

    </div>
</div>
    <footer>
        <p>&copy; 2023 Linxonix Website. All rights reserved.</p>
    </footer>

</body>

    );
}