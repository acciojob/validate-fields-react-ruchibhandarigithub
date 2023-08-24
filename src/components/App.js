
import React,{useState } from "react";
import './../styles/App.css';

const App = () => {
  const [username,setUsername]= useState('');
  const [password,setPassword]=useState('');
  const [error ,setError]=useState('');
  const handleLogin = () =>{
      if(username==='' || password===''){
         setError('Both username and password are required.')
      }
      setError('');
    }
  return (
    

    <div>
       <div>
         <label>Username:</label><input type="text" onChange={(e)=> setUsername(e.target.value)} />
       </div>
        <div>
         <label>Password:</label><input type="password" onChange={(e)=> setPassword(e.target.value)}/>
       </div>
       <button onClick={handleLogin}>Login</button>
       <div id='errorMessage'>
       {error && <p >{error}</p>}
       </div>


    </div>
  )
}

export default App
