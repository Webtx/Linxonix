import React from 'react';
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
           
        </nav>
    </header>

    <div class="container">
         <div class="card">
        <p>Check out thousands of VRChat avatars, Assets, Worlds, that can be used for anything you imagine, made by
            hundreds of independent artists.</p>
        <br/>
        <br/>

        <div class="image-link">
            <a href="/Maki">
                <img src={MAKI} alt="MAKI"/>
            </a>
            <p>MAKI</p>
        </div>
         <div class="image-link">
            <a href="/Diara">
                <img src={AMANI} alt="AMANI"/>
            </a>
            <p>AMANI</p>
        </div>
         <div class="image-link">
            <a href="/Hunter">
                <img src={HUNTER} alt="HUNTER"/>
            </a>
            <p>HUNTER</p>
        </div>
        <p>  🌟 Ｕｐｃｏｍｉｎｇ 🌟     </p>

        <div class="image-link">
            <a href="/Dia">
                <img src={DIA} alt="DIA"/>
            </a>
            <p>DIA</p>
        </div>

        <div class="image-link">
            <a href="/Sxnic">
                <img src={SXNIC} alt="SXNIC"/>
            </a>
            <p>SXNIC</p>
        </div>

        <div class="image-link">
            <a href="/Vaeh">
                <img src={VAEH} alt="VAEH"/>
            </a>
            <p>VAEH</p>
        </div>

        <div class="image-link">
            <a href="/Atlas">
                <img src={ATLAS} alt="ATLAS"/>
            </a>
            <p>ATLAS</p>
        </div>

        <div class="image-link">
            <a href="/Blub">
                <img src={BLUB} alt="BLUB"/>
            </a>
            <p>BLUB</p>
        </div>

        <div class="image-link">
            <a href="/Sumi">
                <img src={SUMI} alt="SUMI"/>
            </a>
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
