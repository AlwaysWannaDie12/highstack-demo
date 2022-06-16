import styled from "styled-components";
import { useState } from "react";

/*


*/
const LogInForm = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);   
    justify-content: center;
    width: 20rem;
    height: 25rem;
    background-color: #101010;
    padding: 30px;
    color: white;
    box-sizing: border-box;
    text-align: center; 
    border-radius: 20px;
    box-shadow: 0 3px 3px rgba(0,0,0,0.3);

    form{
        display: grid;
        grid-template-rows: 50px 30px 30px 30p;
        grid-row-gap: 30px;
    }

    input{
        padding: 5px;
        border-radius: 10px;
        background-color: #202020;
        color: #fff;
    }

    button{
        background-color: #202020;
        color: #fff;
        border: 0;
        border-radius: 10px;
        padding: 7px;
    }
    button.close-btn{
        display: inline;
        float: right;
        margin-top: -20px;
        margin-right: 5px;
        color: #fff;
        padding: 0px;
    }
`;

function LoginForm(props) {

    const [details, setDetails] = useState({ldap:"", password: ""});

    const submitHandler = e => {
        e.preventDefault();
        props.Login(details);
    }

    return (props.trigger) ? (
        <LogInForm>
            <form>
                LogIn
                {(props.error!= "") ? (<div>Error</div>) : ""}
                <input placeholder="Ldap" type="text" id="ldap" onChange={e => setDetails({...details, ldap: e.target.value})} value={details.ldap}></input>
                <input placeholder="Password" type="password" id="password" onChange={e => setDetails({...details, password: e.target.value})} value={details.password}></input>
                <button onClick={submitHandler}>Log In</button>
                <button onClick={props.action}>Cancel</button>
            </form>
            {props.children}
        </LogInForm>
    ) : "";
}

export default LoginForm