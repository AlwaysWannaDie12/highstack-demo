import styled from "styled-components";
import Logo from "./Logo";
import ProfileOptions from "./ProfileOptions";
import SearchBar from "./SearchBar";

const NavBar = styled.header`
  background-color: #393939;
  box-shadow: 0 3px 3px rgba(0,0,0,0.3);
  display: grid;
  grid-template-columns: 200px 1fr 70px;
  grid-column-gap: 20px;
  padding: 10px;
  color: #fff;
`;

function Header(props) {
  return (
    <NavBar>
      <Logo/>
      <SearchBar />
      {(props.nav != "") ? (
        <span>{props.nav}</span>
      ) : (
        <ProfileOptions action={props.action}/>
      )}
    </NavBar>
  );
}

export default Header;
