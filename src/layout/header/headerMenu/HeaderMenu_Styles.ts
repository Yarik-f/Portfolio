import styled from "styled-components";
import {theme} from "../../../styles/Theme";

const StyledHeaderMenu = styled.nav`
  position: relative;

  span {
    position: absolute;
    content: '';
    border: 1px solid #828282;
    width: 100%;
    
    @media ${theme.media.tablet} {
      display: none;
    }
  }
`

export const S = {
    StyledHeaderMenu
}