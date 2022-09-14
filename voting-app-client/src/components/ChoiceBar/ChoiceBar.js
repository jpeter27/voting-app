import React from "react";
import styles from "./ChoiceBar.module.css"

export default function ChoiceBar({title, percent}) {
    const [count, setCount] = React.useState(0);

    function handleClick() {
        setCount(count + 1);
    }

    return (
        <div className={styles.ChoiceBar} onClick={handleClick}>
            <div className={styles.Progress} style={{width: `${percent}%`}}>
                <div className={styles.ChoiceBarTitle}>{title}</div>
            </div>
            <div className={styles.ChoiceBarBadge}>{count}</div>
        </div>
    );
}