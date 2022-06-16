import styled from "styled-components";
import Logo from "./Logo";
import ProfileOptions from "./ProfileOptions";
import SearchBar from "./SearchBar";

const NavBar = styled.header`
  background-color: #334756;
  box-shadow: 0 3px 3px rgba(0,0,0,0.3);
  display: grid;
  grid-template-columns: 10rem 1fr 6rem;
  grid-column-gap: 20px;
  position: fixed;
  padding: 10px;
  color: #fff;
  width: 100%;
`;

function Header(props) {
  return (
    <NavBar>
      <Logo/>
      <SearchBar />
      {(props.nav != "") ? (
        <ProfileOptions nav={props.nav}/>
      ) : (
        <ProfileOptions action={props.action} nav=""/>
      )}
    </NavBar>
  );
}

export default Header;
