import React from 'react';
import styled from "styled-components";
import {Skill} from "./skill/Skill";
import {Star} from "./skill/star/Star";


export const Skills = () => {
    return (
        <StyledSkills>
            <SkillsTitle>Skills</SkillsTitle>
            <SkillsText>I work in such programs as</SkillsText>
            <SkillsList>
                <SkillsItem>
                    <Skill
                        iconId={'photoshop'}
                        title={'Adobe\n' +
                            'Photoshop'}/>
                    <StarList>
                        <Star iconId={'star'}/>
                        <Star iconId={'star'}/>
                        <Star iconId={'star'}/>
                        <Star iconId={'star'}/>
                        <Star iconId={'starTwo'}/>
                    </StarList>
                </SkillsItem>
                <SkillsItem>
                    <Skill
                        iconId={'illustrator'}
                        title={'Adobe \n' +
                            'Illustrator'}/>
                    <StarList>
                        <Star iconId={'star'}/>
                        <Star iconId={'star'}/>
                        <Star iconId={'star'}/>
                        <Star iconId={'starTwo'}/>
                        <Star iconId={'starTwo'}/>
                    </StarList>
                </SkillsItem>
                <SkillsItem>
                    <Skill
                        iconId={'effects'}
                        title={'Adobe \n' +
                            'After Effects'}/>
                    <StarList>
                        <Star iconId={'star'}/>
                        <Star iconId={'star'}/>
                        <Star iconId={'star'}/>
                        <Star iconId={'star'}/>
                        <Star iconId={'starTwo'}/>
                    </StarList>
                </SkillsItem>
                <SkillsItem>
                    <Skill
                        iconId={'figma'}
                        width={'60'}
                        height={'90'}
                        viewBox={'0 0 60 90'}
                        title={'Figma'}
                        max={'60px'}/>
                    <StarList>
                        <Star iconId={'star'}/>
                        <Star iconId={'star'}/>
                        <Star iconId={'star'}/>
                        <Star iconId={'star'}/>
                        <Star iconId={'starTwo'}/>
                    </StarList>
                </SkillsItem>
            </SkillsList>

        </StyledSkills>
    );
};
const StyledSkills = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const SkillsTitle = styled.h2`
  font-size: 34px;
  margin-bottom: 70px;
`
const SkillsText = styled.p`
  font-size: 18px;
  margin-bottom: 80px;
`
const SkillsList = styled.ul`
  display: flex;
  gap: 50px;
  margin-bottom: 110px;
`
const SkillsItem = styled.ul`
  display: flex;
  flex-direction: column;
`
const StarList = styled.ul`
  display: flex;
  gap: 10px;
`