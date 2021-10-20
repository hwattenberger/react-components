import React, { useState } from "react";
import Star from "./Star"

const StarRating: React.FC = () => {
    const [ratingNumber, setRatingNumber] = useState(0);

    const changeStars = (num: number) => {
        setRatingNumber(num);
    }

    const isSelected = (i: number) => {
        if (i <= ratingNumber) return true;
        return false;
    }

    return (
        <>
            {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} isOn={isSelected(i)} changeStars={() => changeStars(i)} />
            ))}
        </>
    )
}

export default StarRating;