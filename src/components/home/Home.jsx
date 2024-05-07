import Homepic from '../../assets/images/picthing.png';

import './Home.css';


export default function Home(){
    return(
        <div class='home'>
        <header>
        <h2 >Linxonix</h2>
        <div>
        <nav>
            <ul>
            <li key="mnu_0">
                <a href={`/Avatars`}>Avatars</a>
              </li>
                <li>Shopping Cart</li>            
            </ul>
        </nav>
        </div>
        </header>
        <body>
            <img src={Homepic} alt="Home picture of Linxonix" className='container'/>
            <figcaption>Come and join us!</figcaption>
            <br/>
            <br/>
           
            <div className='box'>
            <h1>About Us!</h1>
            <p>Linxonix will be the number one in making the community VR 
                chat have a more enjoyable experience while browsing and shopping online.</p>
            </div>
            <br/>
        </body>
        <footer>
            <small>
                Copyright &copy; Linxonix
                Contact us at <a href="Linxonix@hotmail.com">Linxonix@gmail.com</a>
                </small>
        </footer>
        </div>
    )
}