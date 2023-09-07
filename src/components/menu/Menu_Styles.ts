import styled from "styled-components";
import {theme} from "../../styles/Theme";

const MenuList = styled.ul`
    display: flex;
    justify-content: space-between;
    margin: 35px 0 30px 0;

  a {
    font-size: 18px;
    color: ${theme.colors.fontText};
    
    &:hover {
      color: ${theme.colors.font};
    }
  }
  
  @media ${theme.media.tablet} {
    display: none;
  }

`

export const S = {
    MenuList
}