

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

            
            </ul>
          </nav>
        </div>
        <div id="detail"></div>
      </>
    );
  }


