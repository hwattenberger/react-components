import React from "react";
import styled from 'styled-components';


interface Props {
    goLeft: (isDisabled: boolean) => void;
    isDisabled: boolean;
}

interface SVGStyle {
    isDisabled: boolean;
}

const SVG = styled.svg<SVGStyle>`
    fill: ${props => props.isDisabled ? 'grey' : 'black'};
`;

const LeftArrow: React.FC<Props> = ({ goLeft, isDisabled }) => {

    return (
        <SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" aria-label="go left" onClick={() => goLeft(isDisabled)} isDisabled={isDisabled}>
            <path d="M24 12.001H2.914l5.294-5.295-.707-.707L1 12.501l6.5 6.5.707-.707-5.293-5.293H24v-1z" data-name="Left" />
        </SVG>
    )
}

export default LeftArrow;