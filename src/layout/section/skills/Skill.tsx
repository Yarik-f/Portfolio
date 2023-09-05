import React from 'react';
import styled from "styled-components";
import {Icon} from "../../../components/icon/Icon";

type SkillPropsType = {
    iconId: string
    title: string

}
export const Skill = (props: SkillPropsType) => {
    return (
        <StyledSkill>
            <Icon iconId={props.iconId}
                  height={'90'}
                  width={'90'}
                  viewBox={'0 0 90 90'}/>
            <SkillTitle>{props.title}</SkillTitle>
        </StyledSkill>
    );
};
const StyledSkill = styled.li``
const SkillTitle = styled.p``