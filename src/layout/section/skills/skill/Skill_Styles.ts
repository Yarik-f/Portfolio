import styled from "styled-components";
import {theme} from "../../../../styles/Theme";

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

export const S = {
    StyledSkill,
    SkillTitle
}