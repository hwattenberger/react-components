import React, { useState } from "react";
import Snackbar from "./Snackbar";

const SnackbarShell = () => {
    const [snackText, setSnackText] = useState("");

    const showSnack = (): void => {
        setSnackText("This is a test snackbar message");
    }

    return (
        <div>
            <button onClick={showSnack}>Display Snackbar</button>
            <Snackbar text={snackText} hide={() => setSnackText("")} />
        </div>
    )
}

export default SnackbarShell;