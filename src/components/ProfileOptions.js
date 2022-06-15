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

const ProfileIcon = styled.button`
  background-color: #202020;
  color: #fff;
  border: 0;
  padding: 10px;
  border-radius: 20px;
  padding: 7px;
`;



function ProfileOptions(props) {
  return (
    <ProfileOps>
    {(props.nav != "") ? (
      <ProfileIcon>{props.nav.charAt(0)}</ProfileIcon>
    ) : (
      <LogIn onClick={props.action}>Log In</LogIn>
    )}
    </ProfileOps>
   

  )
}

export default ProfileOptions