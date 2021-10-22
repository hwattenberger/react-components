import { ProgressBarShell } from "./ProgressBarShell";
import { ProgressBar } from "./ProgressBar";
import { render, screen } from "@testing-library/react";
import 'jest-styled-components';

describe("ProgressBarShell", () => {
    describe("render", () => {
        it("initially have 0% progress bar", () => {
            render(<ProgressBarShell />);
            expect(screen.getByLabelText("progress percent")).toHaveStyleRule('width', '0%');
        })
    })
})

describe("ProgressBar", () => {
    describe("render", () => {
        it("render with specified width", () => {
            render(<ProgressBar color="purple" completedPercent={20} />);
            expect(screen.getByLabelText("progress percent")).toHaveStyleRule('width', '20%');
        })
        it("initially have specified color", () => {
            render(<ProgressBar color="purple" completedPercent={20} />);
            expect(screen.getByLabelText("progress percent")).toHaveStyleRule('background-color', 'purple');
        })
    })
})