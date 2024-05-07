import './Diara.css'
import {useState} from 'react'
import Diara1 from '../../assets/images/ami2.gif'
import Diara2 from '../../assets/images/am1.avif'

import copy from '../../assets/images/copy.png'

export default function Diara(){

const Diaras = {Diara1,Diara2}
const [stImage, setImage]=useState(Diaras.Diara1);

    return(
    <body className="diara">
    <header>
        <h1>Linxonix</h1>
        <nav>
        <li key="mnu_0">
                <a href={`/Avatars`}>Avatars</a>
            </li>
            <li key="mnu_1">
                <a href={`/Maki`}>Maki</a>
            </li>
            <li key="mnu_2">
                <a href={`/Hunter`}>Hunter</a>
            </li>
        </nav>
    </header>

    <div class="container">
        <div class="card">
            <div class="carousel-container">
                <div>

                    <img src={stImage} alt="Diara" class="image"/>

                    <input type="button" value="Prev" id="button1" onClick={()=>setImage(Diaras.Diara1)}/>
                    <input type="button" value="Next" id="button2" onClick={()=>setImage(Diaras.Diara2)}/>
    
                </div>
                <div class="details">
                    <div class="avatar">Amani 3.0 (PHYSBONES)<br/>
                        $25.00</div>
                    <h2>FEATURES:</h2>
                    <p>- FBT READY</p>
                    <p>- Fake Index Fingers</p>
                    <p>- 4 HAIR HUESHIFTS</p>
                    <p>- GoGo Locomotion</p>
                    <p>- CLOTHING SWAPS</p>
                    <p>- Color Swaps On Everything</p>
                    <h2>ASSETS:</h2>
                    <p>- RP Base -{'>'} Zinpia (SCULPTED BY ME, NO REUSE)</p>
                    <h2>TOS:</h2>
                    <p>- DO NOT share this avatar, if you buy it as a gift put THEIR information instead of yours.</p>
                    <h2>CREDITS:</h2>
                    <p>- Showcase / Videographer: InnocentDestiny</p>
                </div>
                
            </div>

             <img src={copy} alt="copy" class="copy"/>
             <br/>
        </div>
       
    </div>

    <footer>
        <p>&copy; 2024 Linxonix. All rights reserved.</p>
    </footer>
    </body>
    );
}
