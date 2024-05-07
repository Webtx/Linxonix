import './Hunter.css'
import {useState} from 'react'
import Hunter2 from '../../assets/images/hunter 2.png'
import Hunter1 from '../../assets/images/hunter.png'

import copy from '../../assets/images/copy.png'

export default function Hunter(){

const Hunters = {Hunter1,Hunter2}
const [stImage, setImage]=useState(Hunters.Hunter1);

    return(
    <body className="hunter">
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

                    <img src={stImage} alt="Hunter" class="image"/>

                    <input type="button" value="Prev" id="button1" onClick={()=>setImage(Hunters.Hunter1)}/>
                    <input type="button" value="Next" id="button2" onClick={()=>setImage(Hunters.Hunter2)}/>
    
                </div>
                <div class="details">
                    <div class="avatar">Hunter<br/>
                    $45.00+</div>
                    <h2>FEATURES:</h2>
                    <p>
                    30+ Toggles Color Swaps and Hue Shifts<br/>
                    Skin Tone Muscle Slider Hair Swap Cigar System
                    </p>
                    <p>- Credits : Head & HairCap (EDITED BY ME, NO REUSE)<br/>
                    Eyes Beard Body : ME Outfit Tattoos Glasses</p>
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
