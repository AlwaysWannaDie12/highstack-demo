import styled from "styled-components";

const Search = styled.input`
    padding: 5px;
    border-radius: 10px;
    background-color: #202020;
    color: #fff;
`;


function SearchBar() {
  return (
      <Search placeholder="Type to search..."></Search>
  )
}

export default SearchBar