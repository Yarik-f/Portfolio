import React from 'react';
import {Container} from "../../../components/Container";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {SectionTitle} from "../../../components/SectionTitle";
import {S} from './About_Styles'

export const About: React.FC = () => {
    return (
        <S.StyledAbout id={'about'}>
            <Container>
                <FlexWrapper direction={'column'} align={'center'}>
                    <SectionTitle>About me</SectionTitle>
                    <S.AboutDescription>
                        <S.AboutText>
                            Hi, I'm Yaroslav – Frontend Developer from Minsk.
                            I'm interested in design and everything connected with it.
                        </S.AboutText>
                        <S.AboutText>
                            I'm studying at courses "Frontend Developer" in IT-Incubator.
                        </S.AboutText>
                        <S.AboutText>
                            Ready to implement excellent projects
                            with wonderful people.
                        </S.AboutText>
                    </S.AboutDescription>
                </FlexWrapper>
            </Container>
        </S.StyledAbout>
    );
};

