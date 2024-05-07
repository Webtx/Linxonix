

import './Root.css'
export default function Root() {
    return (
      <>
        <div className="root">
          <h1>React Router Contacts</h1>
          <nav>
            <ul>

              <li key="mnu_0">
                <a href ={'/login'}>login</a>
              </li>

              <li key="mnu_1">
                <a href={`/home`}>Home</a>
              </li>
             
              <li key="mnu_2">
                <a href={`/Maki`}>Maki</a>
              </li>
              <li key="mnu_3">
                <a href={`/Hunter`}>Hunter</a>
              </li>
              <li key="mnu_4">
                <a href={`/Diara`}>Diara</a>
              </li>
              <li key="mnu_5">
                <a href={`/Avatars`}>Avatars</a>
            </li>
            </ul>
          </nav>
        </div>
        <div id="detail"></div>
      </>
    );
  }


