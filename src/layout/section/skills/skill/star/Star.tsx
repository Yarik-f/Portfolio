import React from 'react';
import styled from "styled-components";

import {Icon} from "../../../../../components/icon/Icon";

type SkillPropsType = {
    iconId: string
    width?: string
    height?: string
    viewBox?: string
    fill?: string

}
export const Star = (props: SkillPropsType) => {
    return (
        <StyledStar>
            <Icon iconId={props.iconId}
                  width={props.width || "21"}
                  height={props.height || "20"}
                  viewBox={props.viewBox || "0 0 21 20"}
                  fill={props.fill || "none"}/>
        </StyledStar>
    );
};
const StyledStar = styled.li`
`