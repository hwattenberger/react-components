import React from "react";
import styled from 'styled-components';

interface PropsR {
    goRight: (isDisabled: boolean) => void;
    isDisabled: boolean;
}

interface SVGStyle {
    isDisabled: boolean;
}

const SVG = styled.svg<SVGStyle>`
    fill: ${props => props.isDisabled ? 'grey' : 'black'};
`;

const RightArrow: React.FC<PropsR> = ({ goRight, isDisabled }) => {

    return (
        <SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" aria-label="go right" onClick={() => goRight(isDisabled)} isDisabled={isDisabled}>
            <path d="m17.5 5.999-.707.707 5.293 5.293H1v1h21.086l-5.294 5.295.707.707L24 12.499l-6.5-6.5z" data-name="Right" />
        </SVG >
    )
}

export default RightArrow;