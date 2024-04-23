import { useState } from 'react';
import { Navigate } from "react-router-dom";
import './Login.css';


export const Login = (props) => {
    
    const [userName, setUserName] = useState('');
    const [pass, setPassword] = useState('');
    const [redirect, setRedirect] = useState(false);
    

    const handleSubmit = (e) => {
      e.preventDefault();
      if (userName === 'laura' && pass === 'yes') {

          setRedirect(true); // Set redirect to true if login is successful
      } else {
          alert("Invalid username or password");
      }
  };

  if (redirect) {
    return <Navigate to="/calc" />;
  }

    return (
      <div className="login">
        
          <header>
            <h2 class ="logo"></h2>
          </header>
            
            <div className="wrapper">
             
        
                    <form onSubmit={handleSubmit}>
                    <h1>Login</h1>
                      <div className="input-box">
                        <input value={userName} onChange={(e) => setUserName(e.target.value)} type="text" placeholder='Username' required/>
                        </div>

                      <div className='input-box'>
                        <input value={pass} onChange={(e) => setPassword(e.target.value)} type="password" placeholder= 'Password' required  />
                       </div>

                        <button type="submit">Log in</button>
                    </form>
                   
                </div>
              
                
               
                </div>    
       
        
    );
};

export default Login;
