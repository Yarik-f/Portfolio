import React from 'react';
import styled from "styled-components";

import {Icon} from "../../../../../components/icon/Icon";

type SkillPropsType = {
    iconId: string

}
export const Star = (props: SkillPropsType) => {
    return (
        <StyledStar>
            <Icon iconId={props.iconId}
                  width={"21"}
                  height={"20"}
                  viewBox={"0 0 21 20"}/>
        </StyledStar>
    );
};
const StyledStar = styled.li`
`