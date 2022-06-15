import styled from "styled-components";
import icon from "./static/logo.png";
import {Link} from 'react-router-dom';

const LogoLink = styled.div`
    color:#fff;
    text-decoration: none;
    display: inline-block;
    line-height: 30px;
    padding: 5px 15px;

    b{
        font-weight: bold;
    }

    img{
        margin-bottom: -6px;
        height: 25px;
        display: inline-block;
        float: left;
    }

    span{
        display: inline-block;
        padding-left: 5px;
        font-size:1.1rem;
    }
`;



function Logo() {
  return (
    <LogoLink className="Logo">
            <img src={icon} alt="HRC"/>
            <span>high<b>Stack</b></span>
    </LogoLink>
  )
}

export default Logo