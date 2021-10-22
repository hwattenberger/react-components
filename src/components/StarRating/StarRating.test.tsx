import React from "react";
import StarRating from "./StarRating";
import { render, screen, fireEvent } from "@testing-library/react";
import { debug } from "console";

describe('StarRating', () => {

    describe('render', () => {

        it('Should display 5 stars', () => {
            render(
                <StarRating />
            )
            const stars = screen.getAllByTestId("star");
            expect(stars).toHaveLength(5);
        })
    })

    // describe('none selected', () => {
    //     it('Should do something', () => {
    //         render(
    //             <StarRating />
    //         )
    //         const stars = screen.getAllByTestId("star");

    //         fireEvent.click(stars[0]);
    //         // debug(stars[0]);
    //         expect(stars[0]).toHaveStyle('fill: black')
    //     })
    // })
})