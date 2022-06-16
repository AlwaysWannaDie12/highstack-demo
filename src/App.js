import GlobalStyle from "./components/GlobalStyle";
import Header from "./components/Header";
import {
  BrowserRouter as Router,
  Routes ,
  Route,
} from "react-router-dom";
import { useState } from "react";
import LoginForm from "./components/LoginForm";
import styled from "styled-components";
import TopQuestions from "./components/TopQuestions";
import {Container} from "@mui/material";
import UserDash from "./components/UserDash";






function App() {
  const [buttonPopup, setButtonPopup] = useState(false);

  const adminUser = {
    ldap: "srenjoy.saha",
    password: "test1234"
  }

  const [user, setUser] = useState({ldap: "", name: "", password: ""});
  const [error, setError] = useState("");

  const Login = details => {
    console.log(details);
    
    if(details.ldap == adminUser.ldap && details.password == adminUser.password){
      
      setUser({
        ldap: details.ldap,
        password: details.password,
        name: details.ldap.split('.')[0].charAt(0).toUpperCase() + details.ldap.split('.')[0].slice(1),
      })
      console.log(user);
      setButtonPopup(!buttonPopup);
    }
    else{
      console.log("Incorrect Details");
      setError("Incorrect Details");
    }
  }

  const Logout = () =>{
    console.log("Logout");
  }
  
  return (

    <div className="App">
      <GlobalStyle />
      
      {(user.ldap !="") ? (
        <Header nav={user.name}/>
      ) : (
        <Header action={() => setButtonPopup(!buttonPopup)} nav=""/>
      ) }

      <Container maxWidth="fixed" >
        <TopQuestions/>
      </Container>
      
      <LoginForm trigger = {buttonPopup} action={() => setButtonPopup(!buttonPopup)} Login={Login} error={error}/>
    </div>
  );
}

export default App;
