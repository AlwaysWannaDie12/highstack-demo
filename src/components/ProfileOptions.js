import styled from "styled-components";
import LoginForm from "./LoginForm";


const ProfileOps = styled.div`
  margin-top: 5px;
`;

const LogIn = styled.button`
  background-color: #202020;
  color: #fff;
  border: 0;
  border-radius: 10px;
  padding: 7px;
`;



function ProfileOptions(props) {
  return (
    <ProfileOps>
        <LogIn onClick={props.action}>Log In</LogIn>
    </ProfileOps>
    
  )
}

export default ProfileOptions