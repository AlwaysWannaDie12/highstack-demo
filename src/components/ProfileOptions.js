import styled from "styled-components";
import LoginForm from "./LoginForm";


const ProfileOps = styled.div`
  margin-top: 5px;
`;

const LogIn = styled.button`
  background-color: #FF4C29;
  color: #000;
  border: 0;
  border-radius: 10px;
  padding: 7px;
  width: 40px;
  height: 25px;
`;

const ProfileIcon = styled.button`
  background-color: #FF4C29;
  color: #fff;
  border: 0;
  border-radius: 10px;
  padding: 7px;
  width: 40px;
  height: 25px;
`;



function ProfileOptions(props) {
  return (
    <ProfileOps>
    {(props.nav != "") ? (
      <ProfileIcon>{props.nav.charAt(0)}</ProfileIcon>
    ) : (
      <LogIn onClick={props.action}></LogIn>
    )}
    </ProfileOps>
   

  )
}

export default ProfileOptions