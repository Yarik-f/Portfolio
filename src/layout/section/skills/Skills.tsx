import React from 'react';
import styled from "styled-components";
import {Slider} from "../../../components/slider/Slider";
import {Container} from "../../../components/Container";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {SectionTitle} from "../../../components/SectionTitle";


export const Skills = () => {
    return (
        <StyledSkills>
            <Container>
                <FlexWrapper direction={'column'} align={'center'}>
                    <SectionTitle>Skills</SectionTitle>
                    <SkillsText>I work in such programs as</SkillsText>
                    <Slider/>
                </FlexWrapper>
            </Container>
        </StyledSkills>
    );
};
const StyledSkills = styled.section`
`
const SkillsText = styled.p`
  font-size: 18px;
  margin-bottom: 80px;
`