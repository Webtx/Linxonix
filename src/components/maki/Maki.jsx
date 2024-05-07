import './Maki.css'
import {useState} from 'react'
import Maki2 from '../../assets/images/maki_2.avif'
import Maki3 from '../../assets/images/maki_3.avif'

import copy from '../../assets/images/copy.png'

export default function Maki(){

const Makis = {Maki2,Maki3}
const [stImage, setImage]=useState(Makis.Maki3);

    return(
    <body className="maki">
    <header>
        <h1>Linxonix</h1>
        <nav>
            <a href="#">Back to Main Page</a>
        </nav>
    </header>

    <div class="container">
        <div class="card">
            <div class="carousel-container">
                <div>

                    <img src={stImage} alt="Maki" class="image"/>

                    <input type="button" value="Prev" id="button1" onClick={()=>setImage(Makis.Maki2)}/>
                    <input type="button" value="Next" id="button2" onClick={()=>setImage(Makis.Maki3)}/>
    
                </div>
                <div class="details">
                    <div class="avatar">MAKI ZENIN W/ OPTI<br/>
                        $40.00</div>
                    <h2>FEATURES:</h2>
                    <p>- 160+ Toggles</p>
                    <p>- Fake Index Fingers</p>
                    <p>- 12+ DPS Options</p>
                    <p>- GoGo Locomotion</p>
                    <p>- 3 Weapons Option w/ Blood Textures</p>
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
