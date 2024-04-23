import avatarFemale from '../assets/img_avatar2.png'
import avatarMale from '../assets/img_avatar.png'
import './CardStyle.css'


export default function Card({prpGnr, prpName1, prpMyLastName, prpProfession}){
    return(
        <>
       <div className="root">
       
          <h1>React Router Contacts</h1>
          <nav>
            <ul>

              
            <li key="mnu_0">
                <a href ={'/login'}>login</a>
              </li>

              <li key="mnu_1">
                <a href={`/todoList`}>TodoList</a>
              </li>

              <li key="mnu_2">
                <a href={`/calc`}>Calc</a>
              </li>

              <li key="mnu_3">
                <a href={`/card`}>Annie Yang</a>
              </li>

              <li key="mnu_4">
                <a href={`/task`}>Task</a>
              </li>
      
      


            </ul>
          </nav>
        </div>
        <br></br><br></br><br></br>
        
        <div id="detail"></div>
         <div class="wrapper">
        <div class="card">
            <img src= {prpGnr=="f" ?avatarFemale: avatarMale} alt="Avatar"/>
            <div class="container">
                <h4><b>{prpName1} {prpMyLastName}</b></h4>
                <p>{prpProfession}</p>
            </div>
        </div>
    </div>
        </>
    )
}
