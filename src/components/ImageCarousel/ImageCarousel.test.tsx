import ImageCarousel from "./ImageCarousel";
import { render, fireEvent, screen } from "@testing-library/react";

describe('ImageCarousel', () => {
    const url1 = "https://images.unsplash.com/photo-1470093851219-69951fcbb533?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGFuaW1hbHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    const url2 = "https://images.unsplash.com/photo-1472491235688-bdc81a63246e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGFuaW1hbHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    const url3 = "https://images.unsplash.com/photo-1463501810073-6e31c827a9bc?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzF8fGFuaW1hbHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"

    describe('render', () => {
        it("load a image", () => {
            render(<ImageCarousel />);

            expect(screen.getByAltText('carousel image')).toHaveAttribute('src', url1)
        })
    })

    describe('left and right arrow work', () => {
        it('verify that image stays the same if you go left after initial render', () => {
            render(<ImageCarousel />);
            fireEvent.click(screen.getByLabelText('go left'));
            expect(screen.getByAltText('carousel image')).toHaveAttribute('src', url1)
        })

        it('image properly updates when going right', () => {
            render(<ImageCarousel />);
            fireEvent.click(screen.getByLabelText('go right'));
            expect(screen.getByAltText('carousel image')).toHaveAttribute('src', url2)
        })

        it('image properly updates when going right twice', () => {
            render(<ImageCarousel />);
            fireEvent.click(screen.getByLabelText('go right'));
            fireEvent.click(screen.getByLabelText('go right'));
            expect(screen.getByAltText('carousel image')).toHaveAttribute('src', url3)
        })

        it('image properly updates when going right twice and left once', () => {
            render(<ImageCarousel />);
            fireEvent.click(screen.getByLabelText('go right'));
            fireEvent.click(screen.getByLabelText('go right'));
            fireEvent.click(screen.getByLabelText('go left'));
            expect(screen.getByAltText('carousel image')).toHaveAttribute('src', url2)
        })
    })
})