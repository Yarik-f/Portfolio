import React from 'react';
import {Slider} from "../../../components/slider/Slider";
import {Container} from "../../../components/Container";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {SectionTitle} from "../../../components/SectionTitle";
import {S} from './Skills_Styles'


export const Skills = () => {
    return (
        <S.StyledSkills>
            <Container>
                <FlexWrapper direction={'column'} align={'center'}>
                    <SectionTitle>Skills</SectionTitle>
                    <S.SkillsText>I work in such programs as</S.SkillsText>
                    <Slider/>
                </FlexWrapper>
            </Container>
        </S.StyledSkills>
    );
};
