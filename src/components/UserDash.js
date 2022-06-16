import styled from "styled-components";

const Dash =  styled.div`
    background-color: #000;
    position: absolute;
    color: white;
    padding: 50px;
    border-radius: 10px;
    margin-top: 50px;
`;


function UserDash() {
  return (
    <Dash>UserDash</Dash>
  )
}

export default UserDash