import styled from "styled-components";
import {theme} from "../../styles/Theme";

const StyledFooter = styled.footer`
`
const FooterList = styled.ul`
  padding-top: 70px;
  display: flex;
  gap: 60px;
  margin-bottom: 25px;
  @media ${theme.media.mobile}{
    gap: 30px;
  }
`
const FooterItem = styled.li``
const FooterText = styled.p`
  font-size: 14px;
  color: ${theme.colors.fontText};
  max-width: 280px;
  text-align: center;
  padding-bottom: 125px;
`

export const S ={
    StyledFooter,
    FooterList,
    FooterItem,
    FooterText
}