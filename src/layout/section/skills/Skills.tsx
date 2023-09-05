import React from 'react';
import styled from "styled-components";
import {Skill} from "./Skill";


export const Skills = () => {
    return (
        <StyledSkills>
            <SkillsTitle>Skills</SkillsTitle>
            <SkillsText>I work in such programs as</SkillsText>
            <SkillsList>
                <Skill
                    iconId={'photoshop'}
                    title={'Adobe\n' +
                        'Photoshop'}/>
                <Skill
                    iconId={'illustrator'}
                    title={'Adobe \n' +
                        'Illustrator'}/>
                <Skill
                    iconId={'effects'}
                    title={'Adobe \n' +
                        'After Effects'}/>
                <Skill
                    iconId={'figma'}
                    title={'Figma'}/>
            </SkillsList>
        </StyledSkills>
    );
};
const StyledSkills = styled.section``
const SkillsTitle = styled.h2``
const SkillsText = styled.p``
const SkillsList = styled.ul``