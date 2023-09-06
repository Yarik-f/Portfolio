import React from 'react';
import styled from "styled-components";
import {Icon} from "../../../../components/icon/Icon";
import {theme} from "../../../../styles/Theme";


type SkillPropsType = {
    iconId: string
    title: string
    width?: string
    height?: string
    viewBox?: string
    max?: string
}

export const Skill = (props: SkillPropsType) => {
    return (
        <StyledSkill>
            <div>
                <Icon iconId={props.iconId}
                      width={props.width || "90"}
                      height={props.height || "90"}
                      viewBox={props.viewBox || "0 0 90 90"}/>
            </div>
            <SkillTitle>{props.title}</SkillTitle>
        </StyledSkill>
    );
};
const StyledSkill = styled.li`
  min-width: 170px;
  display: flex;
  flex-direction: column;
 align-items: center;

`
const SkillTitle = styled.p`
  font-size: 12px;
  text-align: center;
  font-weight: bold;
  color: ${theme.colors.fontText};
  margin-top: 15px;
  margin-bottom: 15px;
`
