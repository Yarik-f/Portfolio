import React from 'react';
import styled from "styled-components";
import main from './../../../assets/images/main-photo.png'

export const Main = () => {
    return (
        <StyledMain>
            <MainDescription>
                <MainTitle>
                    Yaroslav
                    Finashin
                </MainTitle>
                <MainText>
                    UX | UI designer <br/>
                    24 years old, Minsk
                </MainText>
                <SwitchLanguage>RU | ENG</SwitchLanguage>
            </MainDescription>
            <MainImage src={main}/>
        </StyledMain>
    );
};

const StyledMain = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const MainDescription = styled.div`
  display: flex;
  gap: 295px;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 20px;
`
const MainTitle = styled.h1`
  max-width: 125px;
  font-size: 45px;
`
const MainText = styled.p`
  font-size: 18px;
  max-width: 170px;
`
const SwitchLanguage = styled.p`
  transform: rotate(-90deg);
  font-size: 16px;
`
const MainImage = styled.img`
  margin-bottom: 105px;
`