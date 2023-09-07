import React from 'react';
import main from './../../../assets/images/main-photo.png'
import {Container} from "../../../components/Container";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {S} from './Main_Styles'

export const Main: React.FC = () => {
    return (
        <S.StyledMain id={'home'}>
            <Container>
                <FlexWrapper direction={'column'} justify={'center'} align={'center'}>
                    <S.MainDescription>
                        <S.MainTitle>
                            Yaroslav
                            Finashin
                        </S.MainTitle>
                        <S.MainText>
                            Frontend Developer<br/>
                            23 years old, Minsk
                        </S.MainText>
                        <S.SwitchLanguage>
                            <a href="">RU </a>
                                |
                            <a href=""> ENG</a>
                        </S.SwitchLanguage>
                    </S.MainDescription>
                    <S.MainImage src={main}/>
                </FlexWrapper>
            </Container>
        </S.StyledMain>
    );
};

