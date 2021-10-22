import { useState } from "react";
import styled from 'styled-components';
import LeftArrow from "./LeftArrow"
import RightArrow from "./RightArrow"

const imagesList: string[] = [
    "https://images.unsplash.com/photo-1470093851219-69951fcbb533?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGFuaW1hbHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1472491235688-bdc81a63246e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGFuaW1hbHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1463501810073-6e31c827a9bc?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzF8fGFuaW1hbHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1557008075-7f2c5efa4cfd?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDl8fGFuaW1hbHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1462953491269-9aff00919695?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Njh8fGFuaW1hbHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
]

const FlexDiv = styled.div`
        display: flex;
        height: 50px;
        justify-content: center;
    `;

const Image = styled.img`
    max-height: 400px;
`;

function ImageCarousel() {
    const [images] = useState(imagesList);
    const [currentImgNum, setCurrentImgNum] = useState<number>(0);

    const goLeft = (isDisabled: boolean) => {
        if (!isDisabled) setCurrentImgNum(currentImgNum - 1);
    };

    const goRight = (isDisabled: boolean) => {
        if (!isDisabled) setCurrentImgNum(currentImgNum + 1);
    };

    return (
        <div>
            <Image src={images[currentImgNum]} alt="carousel image" />
            <FlexDiv>
                <LeftArrow goLeft={goLeft} isDisabled={currentImgNum === 0} />
                <RightArrow goRight={goRight} isDisabled={currentImgNum === images.length - 1} />
            </FlexDiv>
        </div>
    );
}

export default ImageCarousel;