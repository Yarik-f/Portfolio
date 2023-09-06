import React from 'react';
import styled from "styled-components";
import main from './../../../assets/images/main-photo.png'
import {Container} from "../../../components/Container";
import {FlexWrapper} from "../../../components/FlexWrapper";

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