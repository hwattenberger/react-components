import React from 'react'
import styled from 'styled-components';

const Backbar = styled.div`
    max-width: 400px;
    height: 25px;
    border-radius: 3px;
    background-color: grey;
`;

const Progress = styled.div<ProgressProps>`
    width: ${(props) => (props.completedPercent > 100) ? 100 : props.completedPercent}%;
    height: 25px;
    border-radius: 3px;
    background-color: ${(props) => props.color};
    transition: width 4s;
`;

interface ProgressProps {
    completedPercent: number;
    color: string;
}

interface ProgressBarProps {
    completedPercent: number;
    color: string;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({ completedPercent, color }) => {
    return (
        <Backbar>
            <Progress completedPercent={completedPercent} color={color} aria-label="progress percent" />
        </Backbar>
    );
}