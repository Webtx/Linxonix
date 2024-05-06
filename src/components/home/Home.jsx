import React from 'react';
import Homepic from '../../assets/Vrchat_gif.png';
import './Home.css';

export default function Home() {
    return (
        <div>
            <header>
                <h2>Linxonix</h2>
                <div id="nav">
                    <nav>
                        <ul>
                            <li>Avatars</li>
                            <li>Shopping Cart</li>
                        </ul>
                    </nav>
                </div>
            </header>
            <main>
                <img src={Homepic} alt="Home picture of Linxonix" className='container' />
                <figcaption>Lots of text</figcaption>
                <br />
                <br />
                <div className='box'>
                    <h1>About Us!</h1>
                    <p>Linxonix will be the number one in making the community VR 
                        chat have a more enjoyable experience while browsing and shopping online.</p>
                </div>
                <br />
            </main>
            <footer>
                <small>
                    Copyright &copy; Linxonix
                    Contact us at <a href="mailto:Linxonix@hotmail.com">Linxonix@hotmail.com</a>
                </small>
            </footer>
        </div>
    );
}