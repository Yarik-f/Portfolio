import React from 'react';
import {Button} from "../../../../components/Button";
import styled from "styled-components";
import {theme} from "../../../../styles/Theme";


type WorkPropsType = {
    src: string
}

export const Work = (props: WorkPropsType) => {
    return (
            <WorkItems>
                <ImageWrapper>
                    <PortfolioImage src={props.src}/>
                    <Button>View Project</Button>
                </ImageWrapper>
            </WorkItems>

    );
};

const WorkItems = styled.li`

`
const ImageWrapper = styled.div`
  position: relative;
  

  &:hover {
    &:before {
      content: '';
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 4px;
      background-color: rgba(110, 107, 107, 0.1);
      backdrop-filter: blur(2px);
      border-radius: 10px;
    }

    ${Button} {
      opacity: 1;
      background-color: #070707;
      color: ${theme.colors.fontAnother};
    }
  }

  ${Button} {
    opacity: 0;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    transition: .4s ease-in-out;
  }

`
const PortfolioImage = styled.img`
  width: 350px;
  border-radius: 10px;
  box-shadow: 0 4px 4px 0 rgba(61, 59, 59, 0.32);
`
