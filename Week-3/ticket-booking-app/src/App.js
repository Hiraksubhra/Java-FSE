import './App.css';
import React, { useState } from 'react';

function UserGreeting(props){
  return <h1>Welcome Back</h1>;
}

function GuestGreeting(props){
  return <h1>Please Sign Up</h1>;
}

function Greeting(props){
  const isLoggedIn = props.isLoggedIn;
  if(isLoggedIn){
    return <UserGreeting />;
  }else{
    return <GuestGreeting />;
  }
}

function LoginButton(props){
  return(
    <button onClick={props.onClick}>
      Login
    </button>
  );
}
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginClick = ()=>{
    setIsLoggedIn(true);
  };
  const handleLogoutClick = () => {
    setIsLoggedIn(false);
  };

  let button;
  if(isLoggedIn){
    button = <LogoutButton onClick={handleLogoutClick} />;
  }else{
    button = <LoginButton onClick={handleLoginClick} />;
  }

  return (
    <div className="App" style={{ textAlign: 'center', marginTop: '100px', fontFamily: 'sans-serif' }}>
      <Greeting isLoggedIn={isLoggedIn} />
      {button}
    </div>
  );
}

export default App;
