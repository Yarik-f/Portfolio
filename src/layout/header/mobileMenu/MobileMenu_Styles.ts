import styled, {css} from "styled-components";
import {theme} from "../../../styles/Theme";

const StyledMobileMenu = styled.nav`
  display: none;
  @media ${theme.media.tablet} {
    display: block;
    margin-bottom: 40px;
  }
  `
const BurgerButton = styled.button<{ isOpen: boolean }>`
  position: fixed;
  top: -110px;
  right: -90px;
  width: 200px;
  height: 200px;
  z-index: 999999999;

  span {
    display: block;
    width: 36px;
    height: 2px;
    background-color: ${theme.colors.font};
    position: absolute;
    left: 40px;
    bottom: 50px;

    ${props => props.isOpen && css<{ isOpen: boolean }>`
      background-color: rgba(255, 255, 255, 0);
    `}
    &::before {
      content: '';
      display: block;
      width: 36px;
      height: 2px;
      background-color: ${theme.colors.font};
      position: absolute;
      transform: translateY(-10px);


      ${props => props.isOpen && css<{ isOpen: boolean }>`
        transform: rotate(-45deg) translateY(0);
        background-color: ${theme.colors.fontAnother};
      `}
    }

    &::after {
      content: '';
      display: block;
      width: 24px;
      height: 2px;
      background-color: ${theme.colors.font};
      position: absolute;
      transform: translateY(10px);


      ${props => props.isOpen && css<{ isOpen: boolean }>`
        transform: rotate(45deg) translateY(0);
        background-color: ${theme.colors.fontAnother};
        width: 36px; 
      `}
    }
  }
`
const MobileMenuPopup = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99999;
  background-color: rgba(0, 0, 0, 0.49);
  display: none;

  ${props => props.isOpen && css<{ isOpen: boolean }>`
    display: flex;
    justify-content: center;
    align-items: center;
  `}
  ul {
    display: flex;
    gap: 30px;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }

  a {
    text-align: center;
    color: ${theme.colors.fontAnother};
  }
`

export const S = {
    StyledMobileMenu,
    BurgerButton,
    MobileMenuPopup
}