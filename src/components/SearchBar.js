import styled from "styled-components";
import { TextField } from "@mui/material";

const Search = styled.input`
    padding: 5px;
    border-radius: 10px;
    background-color: #082032;
    color: #fff;
`;


function SearchBar() {
  return (
      <TextField label="Search" variant="outlined"></TextField>
  )
}

export default SearchBar