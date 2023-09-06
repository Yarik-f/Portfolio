import React from 'react';
import styled from "styled-components";
import main from './../../../assets/images/main-photo.png'
import {Container} from "../../../components/Container";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {theme} from "../../../styles/Theme";

export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <FlexWrapper direction={'column'} justify={'center'} align={'center'}>
                    <MainDescription>
                        <MainTitle>
                            Yaroslav
                            Finashin
                        </MainTitle>
                        <MainText>
                            Frontend Developer<br/>
                            23 years old, Minsk
                        </MainText>
                        <SwitchLanguage>
                            RU | ENG
                        </SwitchLanguage>
                    </MainDescription>
                    <MainImage src={main}/>
                </FlexWrapper>
            </Container>
        </StyledMain>
    );
};

const StyledMain = styled.section`
  
`
const MainDescription = styled.div`
  display: flex;
  gap: 295px;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 20px;

  @media ${theme.media.tablet}{
    gap: 180px;
    width: 100%;
  }
  @media ${theme.media.mobile}{
    gap: 120px;
    width: 100%;
  }
`
const MainTitle = styled.h1`
  max-width: 125px;
  font-size: 45px;
  @media ${theme.media.tablet}{
    font-size: 32px;
    max-width: 100%;
  }
  @media ${theme.media.mobile}{
    font-size: 24px;
    max-width: 100%;
  }
`
const MainText = styled.p`
  font-size: 18px;
  max-width: 170px;
  @media ${theme.media.tablet}{
    font-size: 14px;
    width: 100%;
  }
  @media ${theme.media.mobile}{
    font-size: 12px;
    width: 100%;
  }
`
const SwitchLanguage = styled.p`
  transform: rotate(-90deg);
  font-size: 16px;
  @media ${theme.media.tablet}{
    display: none;
  }
`
const MainImage = styled.img`
  margin-bottom: 105px;
  @media ${theme.media.tablet}{
    width: 100%;
  }
  
`