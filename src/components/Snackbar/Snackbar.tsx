import React from "react";
import styled from 'styled-components';

const Div = styled.div`
    background-color: tan;
    width: 300px;
    position: fixed;
    bottom: 10px;
    left: 10px;
    min-height: 30px;
    justify-content: space-between; 
    align-items: center;
    display: flex;
    padding: 2px;
`;

const Close = styled.span`
    font-size: 20px;
    margin: 4px;
    cursor: pointer;
`;

interface Props {
    text: string;
    hide: () => void;
}

const Snackbar: React.FC<Props> = ({ text, hide }) => {

    if (text === "") return null;

    return (
        <Div>
            {text}
            <Close onClick={hide}>X</Close>
        </Div>
    )
}

export default Snackbar;