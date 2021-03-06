import React, { useState, useEffect} from 'react';
import fire from './fire';
import Login from './Login';
import "./app.css";
import Home from '../../Pages/HomePage/Home';


const App = () => {
  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [hasAcount, setHasAccount] = useState(false);


  const clearInputs =() => {
    setEmail('');
    setPassword('');
  }

  const clearErrors = () => {
    setEmailError('');
    setPasswordError('');
  }

  const handleLogin = () => {
    clearErrors();
    fire
      .auth()
      .signInWithEmailAndPassword(email,password)
      .catch(err => {
        // eslint-disable-next-line default-case
        switch(err.code){
          case "auth/invalid-email":
          case "auth/user-disabled":
          case "auth/user-not-found":
             setEmailError(err.message);
             break;
          case "auth/wrong-password":
            setPasswordError(err.message);
            break;      
        }
      });
  };

  const handleSignup = () => {
    clearErrors();
    fire
      .auth()
      .createUserWithEmailAndPassword(email,password)
      .catch(err => {
        // eslint-disable-next-line default-case
        switch(err.code){
          case "auth/email-already-in-use":
          case "auth/invalid-email":
             setEmailError(err.message);
             break;
          case "auth/weak-password":
            setPasswordError(err.message);
            break;      
        }
      });
  };


  // const handleLogout = () => {
  //   fire.auth().signOut();
  // };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const authListener = () => {
    fire.auth().onAuthStateChanged((user) => {
      if(user){
        clearInputs();
        setUser(user);
      }else{
        setUser("");
      }
    });
  };

  useEffect(() => {
    authListener();
  });

  return (
    <div>
      {user ? (
       <Home/>
      ): (
        <Login 
        email={email} 
        setEmail={setEmail} 
        password={password} 
        setPassword={setPassword}
        handleLogin={handleLogin} 
        handleSignup={handleSignup}
        hasAcount={hasAcount}
        setHasAccount={setHasAccount}
        emailError={emailError}
        passwordError={passwordError}
        />
      )}
       {/* <Login 
        email={email} 
        setEmail={setEmail} 
        password={password} 
        setPassword={setPassword}
        handleLogin={handleLogin} 
        handleSignup={handleSignup}
        hasAcount={hasAcount}
        setHasAccount={setHasAccount}
        emailError={emailError}
        passwordError={passwordError}
        /> */}
      
     
    </div>
    
  )
}

export default App
