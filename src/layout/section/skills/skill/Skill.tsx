import React from 'react';
import {Icon} from "../../../../components/icon/Icon";
import {S} from './Skill_Styles'

type SkillPropsType = {
    iconId: string
    title: string
    width?: string
    height?: string
    viewBox?: string
    max?: string
}

export const Skill: React.FC<SkillPropsType> = (props: SkillPropsType) => {
    return (
        <S.StyledSkill>
            <div>
                <Icon iconId={props.iconId}
                      width={props.width || "90"}
                      height={props.height || "90"}
                      viewBox={props.viewBox || "0 0 90 90"}/>
            </div>
            <S.SkillTitle>{props.title}</S.SkillTitle>
        </S.StyledSkill>
    );
};

