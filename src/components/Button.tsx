import {theme} from "../styles/Theme";
import styled from "styled-components";

export const Button = styled.button`
  border: 1px solid black;
  border-radius: 100px;
  padding: 10px 30px 10px 30px;
  color: ${theme.colors.fontAnother};
  background-color: ${theme.colors.font};
  font-size: 16px;
  font-weight: bold;
  
  &:hover{
    cursor: pointer;
    background-color: ${theme.colors.fontAnother};
    color: ${theme.colors.font};
  }
`