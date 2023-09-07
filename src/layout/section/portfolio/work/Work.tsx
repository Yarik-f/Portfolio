import React from 'react';
import {Button} from "../../../../components/Button";
import {S} from './Work_Styles'

type WorkPropsType = {
    src: string
}

export const Work: React.FC<WorkPropsType> = (props: WorkPropsType) => {
    return (
            <S.WorkItems>
                <S.ImageWrapper>
                    <S.PortfolioImage src={props.src}/>
                    <Button>View Project</Button>
                </S.ImageWrapper>
            </S.WorkItems>

    );
};

