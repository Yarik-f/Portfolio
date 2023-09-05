import React from 'react';
import styled from "styled-components";
import main from './../../../assets/images/main-photo.png'

export const Main = () => {
    return (
        <StyledMain>
            <MainDescription>
                <MainTitle>
                    Denis
                    Novik
                </MainTitle>
                <MainText>
                    UX | UI designer
                    24 years old, Minsk
                </MainText>
                <SwitchLanguage>RU | ENG</SwitchLanguage>
            </MainDescription>
            <MainImage src={main}/>
        </StyledMain>
    );
};

const StyledMain = styled.section``
const MainDescription = styled.div``
const MainTitle = styled.h1``
const MainText = styled.p``
const SwitchLanguage = styled.p``
const MainImage = styled.img``