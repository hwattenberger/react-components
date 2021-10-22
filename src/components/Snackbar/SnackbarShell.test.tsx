import SnackbarShell from "./SnackbarShell";
import { render, fireEvent, screen } from "@testing-library/react";

describe("Snackbar", () => {
    describe("render", () => {
        it("loads the snackbar trigger button", () => {
            render(<SnackbarShell />);
            expect(screen.getByText("Display Snackbar")).toBeInTheDocument();
        })

        it("snackbar doesn't show on initial render", () => {
            render(<SnackbarShell />);
            expect(screen.queryByText("X")).not.toBeInTheDocument();
        })
    })

    describe("show snackbar", () => {
        it("shows snackbar", () => {
            render(<SnackbarShell />);
            fireEvent.click(screen.getByText("Display Snackbar"));
            expect(screen.queryByText("X")).toBeInTheDocument();
        })
    })

    describe("hide snackbar", () => {
        it("hodes snackbar", () => {
            render(<SnackbarShell />);
            fireEvent.click(screen.getByText("Display Snackbar"));
            fireEvent.click(screen.getByText("X"));
            expect(screen.queryByText("X")).not.toBeInTheDocument();
        })
    })

})