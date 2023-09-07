import styled from "styled-components";
import {theme} from "../../styles/Theme";
import {Link} from "react-scroll";

const MenuList = styled.ul`
    display: flex;
    justify-content: space-between;
    margin: 35px 0 30px 0;
  
  @media ${theme.media.tablet} {
    display: none;
  }

`
const MenuLink = styled(Link)`
  font-size: 18px;
  color: ${theme.colors.fontText};
  cursor: pointer;
  &:hover {
    color: ${theme.colors.font};
  }
`


export const S = {
    MenuList,
    MenuLink
}