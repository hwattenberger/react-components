import React, { useState, useEffect } from 'react'
import { ProgressBar } from './ProgressBar';

export const ProgressBarShell: React.FC = () => {
    const [completedPercent, setCompletedPercent] = useState(0);
    const [color] = useState("purple");

    useEffect(() => {
        let tempPerfect = completedPercent;

        let intervalId = setInterval(() => {
            if (tempPerfect >= 100) {
                clearInterval(intervalId)
                return;
            }
            tempPerfect = tempPerfect + 10;
            setCompletedPercent(tempPerfect);
        }, 1000)

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div>
            Progress Bar: <ProgressBar completedPercent={completedPercent} color={color} />
        </div>
    );
}