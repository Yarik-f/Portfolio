import styled from "styled-components";
import {theme} from "../../../styles/Theme";

const StyledMain = styled.section`
  
`
const MainDescription = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 20px;
  width: 100%;

  @media ${theme.media.tablet}{
    width: 100%;
  }
  @media ${theme.media.mobile}{
    width: 100%;
  }
`
const MainTitle = styled.h1`
  max-width: 125px;
  font-size: 45px;
  @media ${theme.media.tablet}{
    font-size: 32px;
  }
  @media ${theme.media.mobile}{
    font-size: 24px;
  }
`
const MainText = styled.p`
  font-size: 18px;
  max-width: 170px;
  @media ${theme.media.tablet}{
    font-size: 14px;
  }
  @media ${theme.media.mobile}{
    font-size: 12px;
  }
`
const SwitchLanguage = styled.p`
  transform: rotate(-90deg);

  a {
    font-size: 16px;
    color: ${theme.colors.fontText};
    font-weight: bold;
    

    &:hover {
      color: ${theme.colors.font};
    }
  }

  @media ${theme.media.tablet} {
    font-size: 14px;
  }
  @media ${theme.media.mobile} {
    font-size: 12px;
  }

`
const MainImage = styled.img`
  margin-bottom: 105px;
  width: 100%;
  
`

export const S = {
    StyledMain,
    MainDescription,
    MainTitle,
    MainText,
    SwitchLanguage,
    MainImage
}